"use client";

import Link from "next/link";
import { business } from "@/src/config/business";
import { trackClickCall, trackClickWhatsApp } from "@/src/lib/analytics";

const whatsappUrl = `https://wa.me/${business.whatsappE164.replace(/\+/g, "")}`;

export function HeroSection() {
  return (
    <section className="bg-white py-12 sm:py-16 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Taxi Jičín – objednejte za pár vteřin
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Zadejte odkud a kam, uvidíte orientační cenu a rovnou objednáte.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${business.phoneE164}`}
            onClick={trackClickCall}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500 focus-ring"
          >
            Volat
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackClickWhatsApp}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-yellow-400 px-6 py-3 text-base font-medium text-yellow-400 hover:bg-yellow-400 hover:text-black focus-ring"
          >
            WhatsApp
          </a>
          <a
            href="#objednavka"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-yellow-400 px-6 py-3 text-base font-medium text-yellow-400 hover:bg-yellow-400 hover:text-black focus-ring"
          >
            Objednat
          </a>
        </div>
      </div>
    </section>
  );
}
