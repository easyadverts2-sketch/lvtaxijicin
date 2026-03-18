import Link from "next/link";
import { PRICING, calculatePrice } from "@/src/lib/pricing";

export const metadata = {
  title: "Ceník",
  description: "Ceník taxi Jičín – nástupní sazba a jízdné podle km. Orientační výpočty.",
};

const examples = [
  { km: 10, label: "10 km" },
  { km: 25, label: "25 km" },
  { km: 40, label: "40 km" },
];

export default function CenikPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Ceník
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Orientační cena podle ujetých kilometrů. Konečná cena se může lišit dle skutečné trasy.
      </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Nástupní sazba</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{PRICING.startFeeCzk} Kč</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Do 15 km</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{PRICING.perKmUpTo15} Kč/km</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">15–30 km</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{PRICING.perKm15To30} Kč/km</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Nad 30 km</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">{PRICING.perKmOver30} Kč/km</p>
          </div>
        </div>

        <section className="mt-12" aria-labelledby="priklady-heading">
          <h2 id="priklady-heading" className="text-xl font-bold text-neutral-900 dark:text-white">
            Příklad výpočtu
          </h2>
          <div className="mt-6 space-y-6">
            {examples.map(({ km, label }) => {
              const b = calculatePrice(km);
              return (
                <div
                  key={km}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50"
                >
                  <p className="font-medium text-neutral-900 dark:text-white">{label}</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Nástup {b.startFee} Kč + jízdné {b.segment1 + b.segment2 + b.segment3} Kč ={" "}
                    <strong>{b.totalCzk} Kč</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <p className="mt-10 text-neutral-600 dark:text-neutral-400">
          Chcete objednat jízdu? Vyplňte formulář na úvodní stránce nebo nám zavolejte.
        </p>
        <Link
          href="/#objednavka"
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-black shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-950"
        >
          Objednat taxi
        </Link>
      </div>
    </div>
  );
}
