import AboutPrevious from "@/components/AboutPrevious";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import { FlexContainer, Main } from "@/components/ui/Spacer";
import {} from "@/components/ui/Typography";

export default function Home() {
  return (
    <Main>
      <HeroSection />
      <FlexContainer flex="primary" gap="xxl" margin="primary" alignItems="stretch">
        <FeaturedProjects />
        <AboutPrevious />
      </FlexContainer>
    </Main>
  );
}
