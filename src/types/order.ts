/**
 * Typ objednávky – připraveno pro budoucí rozšíření (např. Supabase).
 */

export type OrderRequest = {
  name?: string;
  phone: string;
  from: string;
  to: string;
  datetime?: string;
  note?: string;
  gdprConsent: boolean;
  /** Orientation distance in km (from calculator or API) */
  distanceKm?: number;
  /** Estimated price in CZK */
  estimatedPriceCzk?: number;
};
