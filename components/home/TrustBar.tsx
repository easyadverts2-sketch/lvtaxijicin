import { BadgeCheck, MessageCircle, MapPin } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Férové ceny" },
  { icon: MessageCircle, label: "Rychlá domluva" },
  { icon: MapPin, label: "Místní taxislužba" },
];

export function TrustBar() {
  return (
    <div className="relative border-y border-neutral-200 bg-neutral-50 py-5 dark:border-neutral-800 dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:gap-x-12 sm:px-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
          >
            <Icon className="h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400" strokeWidth={2} aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
