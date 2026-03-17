import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/src/config/business";
import type { OrderRequest } from "@/src/types/order";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? business.contactEmail;

/**
 * POST /api/order
 * Odešle objednávku e-mailem na contactEmail. Připraveno na rozšíření o DB (Supabase).
 */
export async function POST(request: NextRequest) {
  let body: OrderRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatný formát." }, { status: 400 });
  }

  const { name, phone, from, to, datetime, note, gdprConsent } = body;

  if (!gdprConsent) {
    return NextResponse.json(
      { error: "Je vyžadován souhlas se zpracováním údajů." },
      { status: 400 }
    );
  }
  if (!phone?.trim()) {
    return NextResponse.json({ error: "Telefon je povinný." }, { status: 400 });
  }
  if (!from?.trim() || !to?.trim()) {
    return NextResponse.json({ error: "Odkud a kam jsou povinné." }, { status: 400 });
  }

  const lines = [
    `Telefon: ${phone.trim()}`,
    `Odkud: ${from.trim()}`,
    `Kam: ${to.trim()}`,
    ...(name?.trim() ? [`Jméno: ${name.trim()}`] : []),
    ...(datetime?.trim() ? [`Datum/čas: ${datetime.trim()}`] : []),
    ...(note?.trim() ? [`Poznámka: ${note.trim()}`] : []),
    ...(body.distanceKm != null ? [`Vzdálenost (km): ${body.distanceKm}`] : []),
    ...(body.estimatedPriceCzk != null ? [`Orientační cena (Kč): ${body.estimatedPriceCzk}`] : []),
  ];

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY chybí – e-mail se neodeslal. Objednávka:", { phone: "***", from, to });
    return NextResponse.json(
      { error: "Odesílání e-mailu není nakonfigurováno. Zavolejte prosím." },
      { status: 503 }
    );
  }

  const fromEmail = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  try {
    const subject = `Nová objednávka: ${from.trim()} → ${to.trim()}`;
    const text = lines.join("\n");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json(
        { error: "E-mail se nepodařilo odeslat. Zkuste to znovu nebo zavolejte." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Došlo k chybě. Zkuste to znovu nebo zavolejte." },
      { status: 500 }
    );
  }
}
