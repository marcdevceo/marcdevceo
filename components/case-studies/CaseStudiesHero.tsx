import Title, { Text } from "@/components/ui/Typography";
import { FlexContainer } from "../ui/Spacer";

export default function CaseStudiesHero() {
  return (
    <FlexContainer flex="column" gap="md">
      <Title>Case Studies Page</Title>
      <Text size="buttonText">
        Case Studies give clients and recruiters a deeper look into how I think,
        build, and solve problems — not just what I’ve shipped. Instead of
        listing tools and features, I break down the strategy, design choices,
        and real-world challenges behind each project. It’s not just a portfolio
        — it’s proof of impact.
      </Text>
    </FlexContainer>
  );
}
