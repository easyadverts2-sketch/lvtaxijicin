"use client";

import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";

export function HeroSection() {
  return (
    <section className="relative bg-neutral-950 py-16 sm:py-20 dark:bg-neutral-950">
      {/* Volitelný vizuál: přidejte obrázek do public/taxi-hero.jpg a odkomentujte next/image s fill + priority */}
      <div className="absolute inset-0 bg-neutral-950" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Taxi Jičín během pár minut
        </h1>
        <p className="mt-4 text-lg text-neutral-300 sm:text-xl">
          Rychlá a spolehlivá přeprava 24/7. Zavolejte a jedeme.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${business.phoneE164}`}
            onClick={trackClickCall}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-yellow-400/25 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Zavolat taxi
          </a>
          <a
            href="#objednavka"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-yellow-400 bg-transparent px-6 py-3 text-base font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Objednat online
          </a>
        </div>
        <p className="mt-8 text-sm font-medium tracking-wide text-neutral-400">
          Férové ceny • Rychlý příjezd • Místní služba
        </p>
      </div>
    </section>
  );
}
