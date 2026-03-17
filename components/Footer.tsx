import Link from "next/link";
import { business } from "@/src/config/business";

export function Footer() {
  return (
    <footer
      className="border-t border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950"
      role="contentinfo"
    >
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">
              {business.businessName}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <a href={`tel:${business.phoneE164}`} className="hover:text-yellow-400 hover:underline">
                {business.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${business.contactEmail}`} className="hover:text-yellow-400 hover:underline">
                {business.contactEmail}
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Patička">
            <Link href="/cenik" className="text-neutral-600 hover:text-yellow-600 hover:underline dark:text-neutral-400 dark:hover:text-yellow-400">
              Ceník
            </Link>
            <Link href="/sluzby" className="text-neutral-600 hover:text-yellow-600 hover:underline dark:text-neutral-400 dark:hover:text-yellow-400">
              Služby
            </Link>
            <Link href="/kontakt" className="text-neutral-600 hover:text-yellow-600 hover:underline dark:text-neutral-400 dark:hover:text-yellow-400">
              Kontakt
            </Link>
            <Link href="/gdpr" className="text-neutral-600 hover:text-yellow-600 hover:underline dark:text-neutral-400 dark:hover:text-yellow-400">
              GDPR
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} {business.businessName}. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
