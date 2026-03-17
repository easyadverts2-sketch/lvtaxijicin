import { NextRequest, NextResponse } from "next/server";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

type MapboxResponse = {
  routes?: Array<{
    distance: number;
    duration: number;
  }>;
  message?: string;
};

/**
 * POST /api/route-distance
 * Body: { from: string, to: string }
 * Vrací distanceKm a durationMin. Bez Mapbox klíče vrací 501 a UI nabídne ruční zadání km.
 * Adresy nelogujeme.
 */
export async function POST(request: NextRequest) {
  if (!MAPBOX_TOKEN) {
    return NextResponse.json(
      { error: "Služba výpočtu trasy není k dispozici. Zadejte prosím vzdálenost v km ručně." },
      { status: 501 }
    );
  }

  let body: { from?: string; to?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Neplatný formát požadavku." },
      { status: 400 }
    );
  }

  const from = typeof body.from === "string" ? body.from.trim() : "";
  const to = typeof body.to === "string" ? body.to.trim() : "";

  if (!from || !to) {
    return NextResponse.json(
      { error: "Zadejte odkud a kam." },
      { status: 400 }
    );
  }

  try {
    const coordsFrom = await geocode(from);
    const coordsTo = await geocode(to);
    if (!coordsFrom || !coordsTo) {
      return NextResponse.json(
        { error: "Jednu nebo obě adresy se nepodařilo najít. Zkuste upřesnit nebo zadejte km ručně." },
        { status: 422 }
      );
    }

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsFrom.lng},${coordsFrom.lat};${coordsTo.lng},${coordsTo.lat}?access_token=${MAPBOX_TOKEN}`;
    const res = await fetch(url);
    const data: MapboxResponse = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: "Trasu se nepodařilo spočítat. Zadejte prosím km ručně." },
        { status: 502 }
      );
    }

    const route = data.routes?.[0];
    if (!route) {
      return NextResponse.json(
        { error: "Trasa nebyla nalezena. Zadejte prosím km ručně." },
        { status: 422 }
      );
    }

    const distanceKm = Math.round((route.distance / 1000) * 10) / 10;
    const durationMin = Math.round(route.duration / 60);

    return NextResponse.json({ distanceKm, durationMin });
  } catch {
    return NextResponse.json(
      { error: "Došlo k chybě. Zkuste znovu nebo zadejte km ručně." },
      { status: 500 }
    );
  }
}

async function geocode(query: string): Promise<{ lat: number; lng: number } | null> {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&country=CZ&limit=1`;
  const res = await fetch(url);
  const data = await res.json();
  const feature = data.features?.[0];
  if (!feature?.geometry?.coordinates?.length) return null;
  const [lng, lat] = feature.geometry.coordinates;
  return { lat, lng };
}
