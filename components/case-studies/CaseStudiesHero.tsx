import { BodyText, FlexContainer, Title } from "@/ui-framework";

export default function CaseStudiesHero() {
  return (
    <FlexContainer flexDirection="column" gap="md">
      <Title>Case Studies Page</Title>
      <BodyText size="buttonText">
        Case Studies give clients and recruiters a deeper look into how I think,
        build, and solve problems — not just what I’ve shipped. Instead of
        listing tools and features, I break down the strategy, design choices,
        and real-world challenges behind each project. It’s not just a portfolio
        — it’s proof of impact.
      </BodyText>
    </FlexContainer>
  );
}
