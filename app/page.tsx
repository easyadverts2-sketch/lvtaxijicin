import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { QuickOrderSection } from "@/components/home/QuickOrderSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ReviewsSection />
      <section id="objednavka" className="scroll-mt-20">
        <QuickOrderSection />
      </section>
      <BenefitsSection />
      <HowItWorksSection />
      <FaqSection />
    </>
  );
}
