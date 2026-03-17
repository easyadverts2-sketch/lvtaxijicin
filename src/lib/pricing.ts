/**
 * Kusový (piecewise) výpočet ceny dle ceníku:
 * Nástupní sazba 50 Kč, do 15 km 35 Kč/km, 15–30 km 29 Kč/km, nad 30 km 25 Kč/km.
 */

export const PRICING = {
  startFeeCzk: 50,
  perKmUpTo15: 35,
  perKm15To30: 29,
  perKmOver30: 25,
  threshold15: 15,
  threshold30: 30,
} as const;

export type PriceBreakdown = {
  startFee: number;
  segment1: number; // 0–15 km
  segment2: number; // 15–30 km
  segment3: number; // nad 30 km
  totalCzk: number;
  distanceKm: number;
};

/**
 * Vrátí cenu v Kč a rozpad po segmentech.
 */
export function calculatePrice(distanceKm: number): PriceBreakdown {
  const d = Math.max(0, distanceKm);
  const startFee = PRICING.startFeeCzk;

  let segment1 = 0;
  let segment2 = 0;
  let segment3 = 0;

  if (d <= PRICING.threshold15) {
    segment1 = d * PRICING.perKmUpTo15;
  } else if (d <= PRICING.threshold30) {
    segment1 = PRICING.threshold15 * PRICING.perKmUpTo15;
    segment2 = (d - PRICING.threshold15) * PRICING.perKm15To30;
  } else {
    segment1 = PRICING.threshold15 * PRICING.perKmUpTo15;
    segment2 = (PRICING.threshold30 - PRICING.threshold15) * PRICING.perKm15To30;
    segment3 = (d - PRICING.threshold30) * PRICING.perKmOver30;
  }

  const totalCzk = Math.round(startFee + segment1 + segment2 + segment3);

  return {
    startFee,
    segment1: Math.round(segment1),
    segment2: Math.round(segment2),
    segment3: Math.round(segment3),
    totalCzk,
    distanceKm: d,
  };
}
