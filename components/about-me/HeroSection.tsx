/* eslint-disable react/no-unescaped-entities */
import { journeyList } from "@/data/journeylist";
import { BlockContainer, BodyText, Card, FlexContainer, List, Subtitle, Title } from "@/ui-framework";

export default function HeroSection() {
  return (
    <BlockContainer>
      <BlockContainer>
        <Title>Who I am & Why I Build</Title>
        <BodyText align="center" size="buttonText" className="italic">
          "From the call center to code -- I build with empathy, strategy, and
          execution."
        </BodyText>
      </BlockContainer>
      <FlexContainer flexDirection="column" alignItems="center" width="full">
        <Subtitle align="center">My Journey</Subtitle>
        <Card>
          <List
            lists={journeyList}
            renderItem={(item) => {
              return <li key={item}>{item}</li>;
            }}
          />
        </Card>
      </FlexContainer>
    </BlockContainer>
  );
}
