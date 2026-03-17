"use client";

import { useState, useCallback } from "react";
import { PriceCalculator } from "@/components/PriceCalculator";
import { OrderForm } from "@/components/OrderForm";
import type { OrderRequest } from "@/src/types/order";

export function QuickOrderSection() {
  const [prefill, setPrefill] = useState<Partial<OrderRequest> | null>(null);

  const handleRequestOrder = useCallback(
    (from: string, to: string, distanceKm: number, estimatedPriceCzk: number) => {
      setPrefill({ from, to, distanceKm, estimatedPriceCzk });
    },
    []
  );

  return (
    <section className="bg-neutral-50 py-12 sm:py-16 dark:bg-neutral-900" aria-labelledby="quick-order-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="quick-order-heading" className="text-2xl font-bold text-neutral-900 dark:text-white">
          Rychlá objednávka
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Spočítejte si orientační cenu a pak objednejte jízdu.
        </p>
        <div className="mt-8">
          <PriceCalculator onRequestOrder={handleRequestOrder} />
        </div>
        <div className="mt-10">
          <OrderForm
            prefill={prefill ?? undefined}
            onSuccess={() => setPrefill(null)}
          />
        </div>
      </div>
    </section>
  );
}
