export function BenefitsSection() {
  const items = [
    {
      title: "Rychlá objednávka",
      description: "Zavolejte nebo vyplňte formulář – vyřídíme to hned.",
    },
    {
      title: "Férový ceník",
      description: "Jasné sazby podle kilometrů, bez skrytých poplatků.",
    },
    {
      title: "Místní znalost",
      description: "Známé ulice i okolí Jičína, rychlé vyzvednutí.",
    },
  ];

  return (
    <section className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-900" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="benefits-heading" className="sr-only">
          Proč nás vybrat
        </h2>
        <ul className="grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <li key={i} className="text-center">
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
