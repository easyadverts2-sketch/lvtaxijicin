"use client";

import { OrderForm } from "@/components/OrderForm";

export function QuickOrderSection() {
  return (
    <section
      className="border-t border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:py-20"
      aria-labelledby="quick-order-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="quick-order-heading" className="text-2xl font-bold text-neutral-900 dark:text-white">
          Objednejte taxi online
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Vyplňte formulář a my vás budeme co nejdříve kontaktovat. Pro okamžitou jízdu raději zavolejte.
        </p>
        <div className="mt-8">
          <OrderForm onSuccess={() => {}} />
        </div>
      </div>
    </section>
  );
}
