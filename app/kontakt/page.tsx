"use client";

import { business } from "@/src/config/business";
import { trackClickCall } from "@/src/lib/analytics";
import { trackClickWhatsApp } from "@/src/lib/analytics";

const whatsappUrl = `https://wa.me/${business.whatsappE164.replace(/\+/g, "")}`;

export default function KontaktPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Kontakt
        </h1>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Telefon
            </h2>
            <a
              href={`tel:${business.phoneE164}`}
              onClick={trackClickCall}
              className="mt-1 block text-2xl font-semibold text-yellow-500 hover:text-yellow-600 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded dark:text-yellow-400 dark:hover:text-yellow-300"
            >
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              WhatsApp
            </h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackClickWhatsApp}
              className="mt-1 block text-xl font-medium text-neutral-900 hover:text-yellow-500 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded dark:text-white dark:hover:text-yellow-400"
            >
              Napsat na WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              E-mail
            </h2>
            <a
              href={`mailto:${business.contactEmail}`}
              className="mt-1 block text-lg text-neutral-900 hover:text-yellow-500 hover:underline dark:text-white dark:hover:text-yellow-400"
            >
              {business.contactEmail}
            </a>
          </div>

          {business.serviceArea.length > 0 && (
            <div>
            <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Oblast působnosti
            </h2>
            <p className="mt-1 text-neutral-700 dark:text-neutral-300">
                {business.serviceArea.join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Mapa jen pokud je adresa – business.address je undefined */}
      </div>
    </div>
  );
}
