import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutResearchSection } from "@/components/sections/about-research-section";
import { PersonalizedLearningSection } from "@/components/sections/personalized-learning-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutResearchSection />
      <PersonalizedLearningSection />
      <CtaSection />
    </>
  );
}
