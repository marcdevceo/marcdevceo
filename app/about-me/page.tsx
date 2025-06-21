import CoreValue from "@/components/about-me/CoreValue";
import CTA from "@/components/about-me/CTA";
import HeroSection from "@/components/about-me/HeroSection";
import SkillSet from "@/components/about-me/SkillSet";
import { MainContainer } from "@/ui-framework";

export default function AboutMe() {
  return (
    <MainContainer gap="2xl">
      <HeroSection />
      <SkillSet />
      <CoreValue />
      <CTA />
    </MainContainer>
  );
}
