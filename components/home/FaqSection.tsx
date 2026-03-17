export function FaqSection() {
  const faqs = [
    {
      q: "Jak se počítá cena?",
      a: "Nástupní sazba 50 Kč a pak podle ujetých kilometrů: do 15 km 35 Kč/km, 15–30 km 29 Kč/km, nad 30 km 25 Kč/km. Kalkulačka na stránce ukazuje orientační cenu.",
    },
    {
      q: "Můžu objednat předem?",
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
    <section className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-900" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-2xl font-bold text-neutral-900 dark:text-white">
          Časté dotazy
        </h2>
        <dl className="mt-8 space-y-6">
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
