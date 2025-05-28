import AboutPrevious from "@/components/home/AboutPrevious";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection from "@/components/home/HeroSection";
import { FlexContainer, Main, SpacerY } from "@/components/ui/Spacer";
import {} from "@/components/ui/Typography";

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <SpacerY size="xxl" />
      <FlexContainer flex="primary" gap="xxl" alignItems="stretch">
        <FeaturedProjects />
        <AboutPrevious />
      </FlexContainer>
    </Main>
  );
}
