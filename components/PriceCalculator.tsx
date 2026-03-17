"use client";

import { useState, useCallback } from "react";
import { calculatePrice } from "@/src/lib/pricing";

type Props = {
  onRequestOrder: (
    from: string,
    to: string,
    distanceKm: number,
    estimatedPriceCzk: number
  ) => void;
};

export function PriceCalculator({ onRequestOrder }: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [distanceKm, setDistanceKm] = useState<number | "">("");
  const [manualKm, setManualKm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDistance = useCallback(async () => {
    if (!from.trim() || !to.trim()) {
      setError("Vyplňte odkud a kam.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/route-distance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from: from.trim(), to: to.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Nepodařilo se spočítat trasu.");
        setDistanceKm("");
        return;
      }
      setDistanceKm(data.distanceKm ?? 0);
      setManualKm("");
    } catch {
      setError("Chyba spojení. Zadejte vzdálenost v km ručně.");
      setDistanceKm("");
    } finally {
      setLoading(false);
    }
  }, [from, to]);

  const useManualKm = useCallback(() => {
    const km = parseFloat(manualKm.replace(",", "."));
    if (!Number.isNaN(km) && km >= 0) {
      setDistanceKm(km);
      setError(null);
    } else {
      setError("Zadejte platný počet km.");
    }
  }, [manualKm]);

  const breakdown = distanceKm !== "" && distanceKm >= 0 ? calculatePrice(Number(distanceKm)) : null;

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="calc-from" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Odkud
          </label>
          <input
            id="calc-from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="např. Jičín, náměstí"
            className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
          />
        </div>
        <div>
          <label htmlFor="calc-to" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Kam
          </label>
          <input
            id="calc-to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="např. Valdice"
            className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-end gap-3">
        <button
          type="button"
          onClick={fetchDistance}
          disabled={loading}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 disabled:opacity-50 focus-ring"
        >
          {loading ? "Počítám…" : "Spočítat trasu"}
        </button>
        <div className="flex items-center gap-2">
          <label htmlFor="manual-km" className="text-sm text-neutral-600 dark:text-neutral-400">
            nebo km:
          </label>
          <input
            id="manual-km"
            type="text"
            inputMode="decimal"
            value={manualKm}
            onChange={(e) => setManualKm(e.target.value)}
            placeholder="např. 12"
            className="w-20 rounded border border-neutral-300 bg-white px-2 py-1.5 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
          />
          <button
            type="button"
            onClick={useManualKm}
            className="rounded-lg border-2 border-yellow-400 px-3 py-1.5 text-sm font-medium text-yellow-500 hover:bg-yellow-400 hover:text-black focus-ring dark:text-yellow-400"
          >
            Použít
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400" role="alert">
          {error}
        </p>
      )}

      {breakdown && (
        <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-600 dark:bg-neutral-700/50">
          <p className="font-medium text-neutral-900 dark:text-white">
            Orientační cena: <strong>{breakdown.totalCzk} Kč</strong>
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Nástup 50 Kč + jízdné {breakdown.segment1 + breakdown.segment2 + breakdown.segment3} Kč
            ({breakdown.distanceKm} km)
          </p>
          <button
            type="button"
            onClick={() =>
              onRequestOrder(from, to, breakdown.distanceKm, breakdown.totalCzk)
            }
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 focus-ring"
          >
            Objednat tuto jízdu
          </button>
        </div>
      )}
    </div>
  );
}
