import { business } from "@/src/config/business";

export const metadata = {
  title: "GDPR",
  description: "Informace o zpracování osobních údajů – Taxi Jičín.",
};

export default function GdprPage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Ochrana osobních údajů (GDPR)
        </h1>

        <div className="mt-10 space-y-6 text-neutral-700 dark:text-neutral-300">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Jaké údaje sbíráme
          </h2>
          <p className="mt-2">
            Při objednávce jízdy: telefonní číslo, jméno (volitelně), místo nástupu a cíle, datum a čas (volitelně), poznámku.
            Tyto údaje slouží výhradně k vyřízení vaší objednávky.
          </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Účel zpracování
            </h2>
          <p className="mt-2">
            Zpracování objednávky taxi, komunikace s vámi a provedení přepravy.
          </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Doba uchování
            </h2>
          <p className="mt-2">
            Údaje uchováváme po dobu nezbytně nutnou k vyřízení objednávky a případným reklamacím, nejdéle v rozsahu stanoveném právními předpisy (např. účetní evidence).
          </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Vaše práva
            </h2>
          <p className="mt-2">
            Máte právo na přístup k údajům, jejich opravu, výmaz (pokud to neodporuje zákonu), omezení zpracování a vznesení námitky. Můžete se obrátit na dozorový úřad (ÚOOÚ).
          </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Kontakt
            </h2>
            <p className="mt-2">
              Ohledně zpracování osobních údajů nás můžete kontaktovat na{" "}
              <a href={`mailto:${business.contactEmail}`} className="text-yellow-500 hover:text-yellow-600 hover:underline dark:text-yellow-400 dark:hover:text-yellow-300">
                {business.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
