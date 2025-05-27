/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Button from "./ui/Button";
import { Container, FlexContainer } from "./ui/Spacer";
import Title, { Text } from "./ui/Typography";

export default function HeroSection() {
  return (
    <FlexContainer bgVarient="accent" flex="column" margin="primary" padding="primary">
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
      <FlexContainer padding="md" justifyContent="center" className="w-full" >
        <Link href="/contact-me" passHref>
          <Button variant="secondary">Let's Get Started!</Button>
        </Link>
      </FlexContainer>
    </FlexContainer>
  );
}
