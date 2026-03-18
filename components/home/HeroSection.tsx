"use client";

import Image from "next/image";
import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(85vh,820px)] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay: light = světlejší, dark = tmavší */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/65 dark:from-black/75 dark:via-black/70 dark:to-black/80"
        aria-hidden
      />
      {/* Motiv trasy */}
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-25" aria-hidden>
        <svg
          className="absolute bottom-[12%] left-1/2 h-24 w-[min(90%,520px)] -translate-x-1/2 text-orange-400"
          viewBox="0 0 400 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="40" r="8" fill="currentColor" className="opacity-90" />
          <circle cx="376" cy="40" r="8" fill="currentColor" className="opacity-90" />
          <path
            d="M32 40 Q120 8 200 40 T368 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(85vh,820px)] max-w-4xl flex-col justify-center px-4 py-20 text-center sm:px-6 sm:py-24 md:py-28">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
          Taxi Jičín během pár minut
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/95 drop-shadow sm:text-xl md:text-2xl">
          Rychlá a spolehlivá přeprava 24/7. Zavolejte a jedeme.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12">
          <a
            href={`tel:${business.phoneE164}`}
            onClick={trackClickCall}
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02] hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            Zavolat taxi
          </a>
          <a
            href="#objednavka"
            className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white/90 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            Objednat online
          </a>
        </div>
      </div>
    </section>
  );
}
