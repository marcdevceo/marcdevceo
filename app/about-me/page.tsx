import CoreValue from "@/components/about-me/CoreValue";
import CTA from "@/components/about-me/CTA";
import HeroSection from "@/components/about-me/HeroSection";
import SkillSet from "@/components/about-me/SkillSet";
import { Main, SpacerY } from "@/components/ui/Spacer";

export default function AboutMe() {
  return (
    <Main>
      <HeroSection />
      <SpacerY size="xxl" />
      <SkillSet />
      <SpacerY size="xxl" />
      <CoreValue />
      <SpacerY size="xxl" />
      <CTA />
    </Main>
  );
}
