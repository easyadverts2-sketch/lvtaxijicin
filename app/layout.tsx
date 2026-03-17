import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business } from "@/src/config/business";
import { JsonLdTaxiService } from "@/components/JsonLdTaxiService";
import { GtagScript } from "@/components/GtagScript";
import { THEME_INIT_SCRIPT } from "./theme-init-script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: `${business.businessName} – Městské taxi Jičín`,
    template: `%s | ${business.businessName}`,
  },
  description:
    "Taxi Jičín. Rychlá objednávka, férový ceník. Zavolejte nebo objednejte online.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <GtagScript />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLdTaxiService />
      </body>
    </html>
  );
}
