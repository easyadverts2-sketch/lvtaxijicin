/**
 * Konfigurace firmy – jediné místo pro úpravu kontaktů a parametrů.
 * Snadná změna bez zásahu do kódu stránek.
 */
export const business = {
  businessName: "LV Taxi Jičín",
  phoneE164: "+420602252139",
  phoneDisplay: "602 252 139",
  whatsappE164: "+420602252139",
  contactEmail: "info@lvtaxi.cz",
  city: "Jičín",
  serviceArea: [
    "Jičín",
    "Valdice",
    "Lomnice nad Popelkou",
    "Hořice",
    "Nová Paka",
    "Libuň",
    "Železnice",
  ],
  address: undefined as string | undefined,
  openingHoursText: undefined as string | undefined,
  featureFlags: {
    cardsPayment: false,
    childSeat: false,
    nonstop: false,
  } as {
    cardsPayment?: boolean;
    childSeat?: boolean;
    nonstop?: boolean;
  },
} as const;

export type BusinessConfig = typeof business;
