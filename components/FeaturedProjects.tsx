import Link from "next/link";
import Card from "./ui/Card";
import {  FlexContainer, SpacerY } from "./ui/Spacer";
import { Subtitle, Text } from "./ui/Typography";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <FlexContainer flex="column" className="flex-1">
      <Link
        href="https://movifind.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full"
      >
        <Card>
            <Subtitle align="center">Featured Project</Subtitle>
            <Text align="center" weight="bold">
              Click to Visit!
            </Text>
            <SpacerY size="xxxl" />
            <Image
              src="/movifind.png"
              alt="MoviFind Image"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
        </Card>
      </Link>
    </FlexContainer>
  );
}
