import Link from "next/link";
import { business } from "@/src/config/business";

export const metadata = {
  title: "Služby",
  description: "Taxi Jičín – jízdy po městě, okolí, delší trasy. Možnost pro firmy.",
};

export default function SluzbyPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Služby
        </h1>

        <ul className="mt-10 space-y-8">
          <li>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Jízdy po městě a okolí
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Přeprava v {business.city} a blízkém okolí. Cena dle ceníku podle ujetých kilometrů.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Delší trasy
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Větší vzdálenosti – cena podle ceníku (nad 30 km 25 Kč/km). Trasu a cenu lze domluvit předem.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Letiště
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Přeprava na letiště na vyžádání. Cenu a dostupnost prosím ověřte telefonicky nebo e-mailem.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Pro firmy
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Nabízíme možnost fakturace a čekačky. Konkrétní podmínky a ceny vám sdělíme na vyžádání.
            </p>
          </li>
        </ul>

        <div className="mt-12">
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-medium text-black hover:bg-yellow-500"
          >
            Kontaktovat
          </Link>
        </div>
      </div>
    </div>
  );
}
