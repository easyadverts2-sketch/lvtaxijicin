# LV Taxi Jičín

Moderní městské taxi web pro Jičín – mobil-first, konverzní landing, objednávkový formulář, kalkulačka ceny a integrace s Mapbox a Resend.

## Tech

- **Next.js 15** (App Router), **TypeScript**, **TailwindCSS**
- Minimální závislosti, a11y, SEO (metadata, Schema.org TaxiService)
- Analytika: **Google Analytics 4** přes gtag (eventy: `click_call`, `click_whatsapp`, `submit_order` – připraveno pro Google Ads konverze)
- E-maily: **Resend**
- Trasy: **Mapbox Directions API** (s fallbackem na ruční zadání km)

## Stránky

- `/` – úvod, hero, kalkulačka, objednávkový formulář, výhody, jak to funguje, FAQ
- `/cenik` – ceník + příklady výpočtu
- `/sluzby` – přehled služeb
- `/kontakt` – telefon, WhatsApp, e-mail, oblast působnosti
- `/gdpr` – ochrana osobních údajů

## Konfigurace

Obchodní údaje a feature flagy jsou v **`src/config/business.ts`**: název, telefon, e-mail, město, oblast působnosti, adresa, otevírací doba, `featureFlags` (cardsPayment, childSeat, nonstop).

## Env proměnné

Vytvořte `.env.local` (viz `.env.example`):

| Proměnná | Popis |
|----------|--------|
| `NEXT_PUBLIC_GA_ID` | ID měřicího webu GA4 (např. `G-XXXXXXXXXX`). Bez něj se gtag nenačte. |
| `MAPBOX_TOKEN` | Mapbox access token pro `/api/route-distance`. Bez něj uživatel zadá km ručně. |
| `RESEND_API_KEY` | API klíč Resend pro odesílání objednávek na e-mail. |
| `CONTACT_EMAIL` | E-mail, na který chodí objednávky (výchozí z `business.contactEmail`). |
| `RESEND_FROM` | (Volitelné) Od koho jde e-mail; Resend vyžaduje ověřenou doménu. |

### Google Ads konverze

V GA4 vytvořte události `click_call`, `click_whatsapp`, `submit_order` a importujte je do Google Ads jako konverze. Eventy se posílají automaticky při použití gtag (když je `NEXT_PUBLIC_GA_ID` nastavené).

## Skripty

```bash
npm run dev    # vývoj
npm run build  # produkční build
npm run start  # produkční server
npm run test   # unit testy (cenová funkce)
npm run lint   # ESLint
```

## Deploy na Vercel

1. Repozitář připojte k Vercel (GitHub/GitLab/Bitbucket).
2. V projektu Vercel: **Settings → Environment Variables** – přidejte `NEXT_PUBLIC_GA_ID`, `MAPBOX_TOKEN`, `RESEND_API_KEY`, `CONTACT_EMAIL` (a volitelně `RESEND_FROM`).
3. Deploy: **Deploy** nebo push do main větve.
4. (Volitelně) Vlastní doména v **Settings → Domains**.

Resend: pro produkci nastavte ověřenou doménu a `RESEND_FROM` na adresu z této domény (např. `objednavky@vasedomena.cz`).
