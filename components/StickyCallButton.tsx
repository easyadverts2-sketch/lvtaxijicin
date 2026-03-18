"use client";

import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${business.phoneE164}`}
      onClick={trackClickCall}
      aria-label="Zavolat taxi"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
