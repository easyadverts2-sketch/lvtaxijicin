"use client";

import { Phone } from "lucide-react";
import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${business.phoneE164}`}
      onClick={trackClickCall}
      aria-label="Zavolat taxi"
      className="fixed bottom-4 left-1/2 z-[100] flex min-h-14 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/35 transition hover:scale-[1.02] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-none sm:translate-x-0 sm:rounded-full sm:px-8"
    >
      <Phone className="h-6 w-6 shrink-0" strokeWidth={2.5} aria-hidden />
      <span>Zavolat taxi</span>
    </a>
  );
}
