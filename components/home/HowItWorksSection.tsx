export function HowItWorksSection() {
  const steps = [
    { num: 1, title: "Zavolejte nebo objednejte", text: "Zadejte trasu a kontakt. Můžete i jen zavolat." },
    { num: 2, title: "Potvrdíme jízdu", text: "Rychle vás vyzvedneme na zadaném místě." },
    { num: 3, title: "Dojeďte kam potřebujete", text: "Cena podle ceníku, platba na místě." },
  ];

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900" aria-labelledby="how-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="how-heading" className="text-2xl font-bold text-neutral-900 dark:text-white">
          Jak to funguje
        </h2>
        <ol className="mt-8 space-y-6">
          {steps.map((step) => (
            <li key={step.num} className="flex gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-yellow-400 bg-transparent font-semibold text-yellow-500 dark:text-yellow-400"
                aria-hidden
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
