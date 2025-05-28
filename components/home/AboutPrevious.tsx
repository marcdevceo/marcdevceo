/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Card from "@/components/ui/Card";
import { FlexContainer, SpacerY } from "@/components/ui/Spacer";
import { Subtitle, Text } from "@/components/ui/Typography";

export default function AboutPrevious() {
  return (
    <FlexContainer className="flex-1">
      <Link href={"/about"} className="h-full w-full ">
        <Card className="justify-center">
            <Subtitle align="center">About Me Preview</Subtitle>
            <Text align="center" weight="bold">
              Click to Learn More!
            </Text>
          <SpacerY size="xxl" />
            <Text>
              I’m Marcus Kimber — a Full-Stack Product Developer with a foundation
              built on 20+ years in customer service and 10+ years in leadership.
              Before I ever wrote a line of code, I was solving real problems for
              real people.
            </Text>
            <SpacerY size="md" />
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
