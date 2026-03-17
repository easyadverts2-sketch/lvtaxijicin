import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt na taxi Jičín – telefon, WhatsApp, e-mail. Oblast působnosti.",
};

export default function KontaktLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
