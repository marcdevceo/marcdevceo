/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Card from "@/components/ui/Card";
import {  SpacerY } from "@/components/ui/Spacer";
import { Subtitle, Text } from "@/components/ui/Typography";

export default function AboutPrevious() {
  return (
      <Link href={"/about-me"} className="flex-1">
        <Card className="justify-center w-full h-auto">
            <Subtitle align="center">About Me Preview</Subtitle>
            <Text align="center" weight="bold">
              Click to Learn More!
            </Text>
          <SpacerY size="xxl" />
            <Text size="buttonText">
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
  );
}
