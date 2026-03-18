"use client";

import { OrderForm } from "@/components/OrderForm";

export function QuickOrderSection() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 dark:bg-neutral-900" aria-labelledby="quick-order-heading">
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
