/* eslint-disable react/no-unescaped-entities */
import Card from "@/components/ui/Card";
import { FlexContainer, SpacerY } from "@/components/ui/Spacer";
import { Subtitle, Text } from "@/components/ui/Typography";

export default function CoreValue() {
  return (
    <>
      <Subtitle align="center">Core Values</Subtitle>
      <SpacerY />
      <FlexContainer
        flex="wrap"
        justifyContent="center"
        width="w-full"
        gap="xl"
        className="h-full"
      >
        <Card className="">
          <Text align="center" weight="bold">
            Empathy-driven UX
          </Text>
          <Text>
            I design with the user’s emotions, context, and needs at the
            forefront. Having spent years supporting real people, I build
            experiences that feel intuitive, respectful, and human-centered.
          </Text>
        </Card>
        <Card className="">
          <Text align="center" weight="bold">
            Systematic Thinking
          </Text>
          <Text>
            Great products are built on great systems. I approach development
            with structure, scalability, and consistency — from design tokens to
            API architecture — so everything fits, grows, and lasts.
          </Text>
        </Card>
        <Card className="">
          <Text align="center" weight="bold">
            Product over Features
          </Text>
          <Text>
            I don't just ship code — I ship outcomes. Every decision I make is
            tied to the bigger picture, focusing on delivering real value rather
            than just adding more buttons or buzzwords.
          </Text>
        </Card>
      </FlexContainer>
    </>
  );
}
