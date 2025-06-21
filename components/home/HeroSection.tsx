/* eslint-disable react/no-unescaped-entities */

import { BlockContainer, BodyText, Button, FlexContainer, Title } from "@/ui-framework";

export default function HeroSection() {
  return (
    <FlexContainer bg="accent" flexDirection="column" padding="primary">
      <Title>Welcome to MarcDevCEO Portfolio</Title>
      <BlockContainer padding="primary">
        <BodyText
          align="center"
          color="neutral"
          font="body"
          weight="medium"
          size="body"
        >
          I’m a Full-Stack Product Developer who builds with purpose. I bridge
          the gap between user pain points and elegant solutions. My experience
          in customer service shaped how I design, build, and launch digital
          products people actually love to use.
        </BodyText>
      </BlockContainer>
      <FlexContainer padding="md" justify="center" className="w-full">
        <Button href="/contact">
          Let's Get Started!
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
