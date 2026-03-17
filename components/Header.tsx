"use client";

import Link from "next/link";
import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 focus-ring rounded px-2 py-1 dark:text-white"
        >
          {business.businessName}
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Hlavní navigace">
          <Link
            href="/cenik"
            className="text-neutral-600 hover:text-neutral-900 focus-ring rounded px-2 py-1 text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            Ceník
          </Link>
          <Link
            href="/sluzby"
            className="text-neutral-600 hover:text-neutral-900 focus-ring rounded px-2 py-1 text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            Služby
          </Link>
          <Link
            href="/kontakt"
            className="text-neutral-600 hover:text-neutral-900 focus-ring rounded px-2 py-1 text-sm dark:text-neutral-300 dark:hover:text-white"
          >
            Kontakt
          </Link>
          <ThemeToggle />
          <a
            href={`tel:${business.phoneE164}`}
            onClick={trackClickCall}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 focus-ring"
          >
            Volat
          </a>
        </nav>
      </div>
    </header>
  );
}
