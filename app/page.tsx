import AboutPrevious from "@/components/home/AboutPrevious";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection from "@/components/home/HeroSection";
import { FlexContainer, MainContainer } from "@/ui-framework";

export default function Home() {
  return (
    <MainContainer>
      <HeroSection />
      <FlexContainer flexDirection="primary" gap="2xl" alignItems="stretch">
        <FeaturedProjects />
        <AboutPrevious />
      </FlexContainer>
      
    </MainContainer>
  );
}
