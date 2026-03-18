import { Phone, CircleCheck, Car } from "lucide-react";
import { SectionMotif } from "@/components/SectionMotif";

const steps = [
  {
    icon: Phone,
    title: "Zavolejte",
    text: "Jedním hovorem nebo online objednávkou.",
  },
  {
    icon: CircleCheck,
    title: "Potvrdíme jízdu",
    text: "Rychle vás vyzvedneme na domluveném místě.",
  },
  {
    icon: Car,
    title: "Přijedeme",
    text: "Dovezeme vás bezpečně do cíle.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:py-20"
      aria-labelledby="how-heading"
    >
      <SectionMotif />
      <div className="relative z-[1] mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="how-heading"
          className="text-center text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl"
        >
          Jak to funguje
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <article className="group flex h-full flex-col items-center rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/10 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-orange-500/40 dark:hover:shadow-orange-500/5">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition group-hover:scale-110 group-hover:bg-orange-500/20 dark:bg-orange-500/15 dark:text-orange-400">
                  <Icon className="h-10 w-10" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
