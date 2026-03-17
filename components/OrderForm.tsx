"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";
import { trackSubmitOrder } from "@/src/lib/analytics";
import type { OrderRequest } from "@/src/types/order";

type Props = {
  prefill?: Partial<OrderRequest>;
  onSuccess?: () => void;
};

export function OrderForm({ prefill, onSuccess }: Props) {
  const [name, setName] = useState(prefill?.name ?? "");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState(prefill?.from ?? "");
  const [to, setTo] = useState(prefill?.to ?? "");
  const [datetime, setDatetime] = useState(prefill?.datetime ?? "");
  const [note, setNote] = useState(prefill?.note ?? "");
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    if (!gdpr) {
      setErrorMessage("Pro odeslání je nutný souhlas se zpracováním údajů (GDPR).");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Telefon je povinný.");
      return;
    }
    if (!from.trim() || !to.trim()) {
      setErrorMessage("Odkud a kam jsou povinné.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          phone: phone.trim(),
          from: from.trim(),
          to: to.trim(),
          datetime: datetime.trim() || undefined,
          note: note.trim() || undefined,
          gdprConsent: true,
          distanceKm: prefill?.distanceKm,
          estimatedPriceCzk: prefill?.estimatedPriceCzk,
        } satisfies OrderRequest),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error ?? "Odeslání se nepovedlo. Zkuste to znovu nebo nám zavolejte.");
        setStatus("error");
        return;
      }
      trackSubmitOrder();
      setStatus("success");
      onSuccess?.();
    } catch {
      setErrorMessage("Chyba spojení. Zkuste to znovu nebo nám zavolejte.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-600 dark:bg-neutral-800/50" role="status">
        <h3 className="font-semibold text-neutral-900 dark:text-white">
          Objednávka odeslána
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Ozveme se vám co nejdříve. Pokud potřebujete něco urgentně, zavolejte.
        </p>
        <a
          href={`tel:${business.phoneE164}`}
          onClick={trackClickCall}
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 focus-ring"
        >
          Zavolat
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Objednávka jízdy
      </h3>
      <div>
        <label htmlFor="order-name" className="block text-sm text-neutral-600 dark:text-neutral-400">
          Jméno (nepovinné)
        </label>
        <input
          id="order-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="order-phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Telefon <span className="text-red-600">*</span>
        </label>
        <input
          id="order-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="order-from" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Odkud <span className="text-red-600">*</span>
        </label>
        <input
          id="order-from"
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="order-to" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Kam <span className="text-red-600">*</span>
        </label>
        <input
          id="order-to"
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="order-datetime" className="block text-sm text-neutral-600 dark:text-neutral-400">
          Datum a čas (nepovinné)
        </label>
        <input
          id="order-datetime"
          type="text"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          placeholder="např. zítra 14:00"
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="order-note" className="block text-sm text-neutral-600 dark:text-neutral-400">
          Poznámka (nepovinné)
        </label>
        <textarea
          id="order-note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="order-gdpr"
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-yellow-500 focus:ring-yellow-400 dark:border-neutral-600"
        />
        <label htmlFor="order-gdpr" className="text-sm text-neutral-600 dark:text-neutral-400">
          Souhlasím se zpracováním údajů pro vyřízení objednávky (
          <Link href="/gdpr" className="underline hover:no-underline">
            GDPR
          </Link>
          ). <span className="text-red-600">*</span>
        </label>
      </div>
      {errorMessage && (
        <p className="text-sm text-neutral-700 dark:text-neutral-300" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 disabled:opacity-50 focus-ring sm:px-8"
      >
        {status === "sending" ? "Odesílám…" : "Odeslat objednávku"}
      </button>
    </form>
  );
}
