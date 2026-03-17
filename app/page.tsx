import Link from "next/link";
import { business } from "@/src/config/business";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickOrderSection } from "@/components/home/QuickOrderSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="objednavka" className="scroll-mt-20">
        <QuickOrderSection />
      </section>
      <BenefitsSection />
      <HowItWorksSection />
      <FaqSection />
    </>
  );
}
