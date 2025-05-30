/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import { Container, FlexContainer } from "@/components/ui/Spacer";
import Title, { Text } from "@/components/ui/Typography";

export default function HeroSection() {
  return (
    <FlexContainer bgVarient="accent" flex="column" padding="primary">
      <Title>Welcome to MarcDevCEO Portfolio</Title>
      <Container padding="primary">
        <Text
          align="center"
          color="neutral"
          font="sans"
          weight="medium"
          size="body"
        >
          I’m a Full-Stack Product Developer who builds with purpose. I bridge
          the gap between user pain points and elegant solutions. My experience
          in customer service shaped how I design, build, and launch digital
          products people actually love to use.
        </Text>
      </Container>
      <FlexContainer padding="md" justifyContent="center" className="w-full">
        <Button href="/contact-me">
          Let's Get Started!
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
