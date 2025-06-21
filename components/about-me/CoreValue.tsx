/* eslint-disable react/no-unescaped-entities */

import { BlockContainer, BodyText, Card, FlexContainer, Subtitle } from "@/ui-framework";

export default function CoreValue() {
  return (
    <BlockContainer>
      <Subtitle align="center">Core Values</Subtitle>
      <FlexContainer
        flexWrap="wrap"
        justify="center"
        width="full"
        height="full"
        gap="xl"    
      >
        <Card className="">
          <BodyText align="center" weight="bold">
            Empathy-driven UX
          </BodyText>
          <BodyText>
            I design with the user’s emotions, context, and needs at the
            forefront. Having spent years supporting real people, I build
            experiences that feel intuitive, respectful, and human-centered.
          </BodyText>
        </Card>
        <Card className="">
          <BodyText align="center" weight="bold">
            Systematic Thinking
          </BodyText>
          <BodyText>
            Great products are built on great systems. I approach development
            with structure, scalability, and consistency — from design tokens to
            API architecture — so everything fits, grows, and lasts.
          </BodyText>
        </Card>
        <Card className="">
          <BodyText align="center" weight="bold">
            Product over Features
          </BodyText>
          <BodyText>
            I don't just ship code — I ship outcomes. Every decision I make is
            tied to the bigger picture, focusing on delivering real value rather
            than just adding more buttons or buzzwords.
          </BodyText>
        </Card>
      </FlexContainer>
    </BlockContainer>
  );
}
