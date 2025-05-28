import Link from "next/link";
import Card from "@/components/ui/Card";
import {  SpacerY } from "@/components/ui/Spacer";
import { Subtitle, Text } from "@/components/ui/Typography";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
      <Link
        href="https://movifind.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
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
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
        </Card>
      </Link>
  );
}
