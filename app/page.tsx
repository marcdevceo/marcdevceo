import AboutPrevious from "@/components/home/AboutPrevious";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection from "@/components/home/HeroSection";
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
