/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Card from "./ui/Card";
import { FlexContainer, SpacerY } from "./ui/Spacer";
import { Subtitle, Text } from "./ui/Typography";

export default function AboutPrevious() {
  return (
    <FlexContainer flex="column" className="flex-1">
      <Link href={"/about"} className="h-full">
        <Card className="h-full flex flex-col justify-between">
          <Subtitle align="center">About Me Preview</Subtitle>
          <Text align="center" weight="bold">
            Click to Learn More!
          </Text>
          <SpacerY size="md" />
          <Text>
            I’m Marcus Kimber — a Full-Stack Product Developer with a foundation
            built on 20+ years in customer service and 10+ years in leadership.
            Before I ever wrote a line of code, I was solving real problems for
            real people.
          </Text>
          <SpacerY size="md" />
          {/* <Text>
            Today, I use that frontline insight to design, build, and ship web
            experiences that don’t just function — they connect. I believe
            products should be intuitive, useful, and a joy to use. That’s the
            standard I build by.
          </Text>
          <SpacerY size="md" /> */}
          <Text>
            I'm on a mission to help brands, businesses, and people bring ideas
            to life — and I bring the strategy, systems, and storytelling to
            make that happen.
          </Text>
        </Card>
      </Link>
    </FlexContainer>
  );
}
