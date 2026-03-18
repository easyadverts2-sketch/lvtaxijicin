export function FaqSection() {
  const faqs = [
    {
      q: "Jak se počítá cena?",
      a: "Nástupní sazba 50 Kč a pak podle ujetých kilometrů: do 15 km 35 Kč/km, 15–30 km 29 Kč/km, nad 30 km 25 Kč/km. Přesné ceny najdete v ceníku.",
    },
    {
      q: "Mohu objednat předem?",
      a: "Ano, napište do poznámky datum a čas a my to vyřídíme.",
    },
    {
      q: "Jezdíte i mimo Jičín?",
      a: "Ano, jezdíme i do okolí (Valdice, Lomnice nad Popelkou, Hořice, Nová Paka a další). Cena podle ceníku dle km.",
    },
    {
      q: "Jak platím?",
      a: "Platba hotově u řidiče po ukončení jízdy.",
    },
    {
      q: "Jak rychle přijedete?",
      a: "V Jičíně a blízkém okolí obvykle do několika minut. V špičce může být čekání delší.",
    },
  ];

  return (
    <section className="border-t border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
          Časté dotazy
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">Krátké odpovědi na nejčastější dotazy.</p>
        <dl className="mt-10 space-y-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt className="font-medium text-neutral-900 dark:text-white">
                {faq.q}
              </dt>
              <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
