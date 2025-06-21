/* eslint-disable react/no-unescaped-entities */
import { BodyText, Card, Subtitle } from "@/ui-framework";
import Link from "next/link";

export default function AboutPrevious() {
  return (
      <Link href={"/about-me"} className="flex-1">
        <Card className="justify-center w-full h-auto">
            <Subtitle align="center">About Me Preview</Subtitle>
            <BodyText align="center" weight="bold">
              Click to Learn More!
            </BodyText>
            <BodyText>
              I’m Marcus Kimber — a Full-Stack Product Developer with a foundation
              built on 20+ years in customer service and 10+ years in leadership.
              Before I ever wrote a line of code, I was solving real problems for
              real people.
            </BodyText>
            <BodyText>
              I'm on a mission to help brands, businesses, and people bring ideas
              to life — and I bring the strategy, systems, and storytelling to
              make that happen.
            </BodyText>
        </Card>
      </Link>
  );
}
