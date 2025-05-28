/* eslint-disable react/no-unescaped-entities */
import Title, { List, Subtitle, Text } from "@/components/ui/Typography";
import { Container, FlexContainer, SpacerY } from "@/components/ui/Spacer";
import Card from "@/components/ui/Card";
import { journeyList } from "@/data/journeylist";

export default function HeroSection() {
  return (
    <>
      <Container>
        <Title>Who I am & Why I Build</Title>
        <SpacerY />
        <Text align="center" className="italic">
          "From the call center to code -- I build with empathy, strategy, and
          execution."
        </Text>
      </Container>
      <SpacerY size="xxl" />
      <FlexContainer flex="column" alignItems="center" width="w-full">
        <Subtitle align="center">My Journey</Subtitle>
        <SpacerY />
        <Card>
          <SpacerY size="md" />
          <List
            lists={journeyList}
            renderItem={(item) => {
              return <li key={item}>{item}</li>;
            }}
          />
        </Card>
      </FlexContainer>
    </>
  );
}
