import { business } from "@/src/config/business";

/**
 * Schema.org TaxiService + LocalBusiness pro SEO.
 * JSON-LD v layoutu – jedna struktura pro celý web.
 */
export function JsonLdTaxiService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://lvtaxi.cz/#organization",
    name: business.businessName,
    telephone: business.phoneE164,
    email: business.contactEmail,
    areaServed: business.serviceArea.map((name) => ({
      "@type": "City",
      name,
    })),
    ...(business.address && { address: { "@type": "PostalAddress", streetAddress: business.address } }),
    ...(business.openingHoursText && { openingHours: business.openingHoursText }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
