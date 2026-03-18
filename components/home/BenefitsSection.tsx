import { PhoneForwarded, Wallet, MapPinned } from "lucide-react";
import { SectionMotif } from "@/components/SectionMotif";

const items = [
  {
    icon: PhoneForwarded,
    title: "Rychlá objednávka",
    description: "Zavolejte nebo vyplňte formulář – vyřídíme to hned.",
  },
  {
    icon: Wallet,
    title: "Férový ceník",
    description: "Jasné sazby podle km, bez skrytých poplatků.",
  },
  {
    icon: MapPinned,
    title: "Místní znalost",
    description: "Známé ulice i okolí Jičína, rychlé vyzvednutí.",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:py-20"
      aria-labelledby="benefits-heading"
    >
      <SectionMotif />
      <div className="relative z-[1] mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="benefits-heading" className="sr-only">
          Proč nás vybrat
        </h2>
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {items.map(({ icon: Icon, title, description }) => (
            <li key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400">
                <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
