/* eslint-disable react/no-unescaped-entities */
import Title, { Text } from "@/components/ui/Typography";
import { FlexContainer } from "@/components/ui/Spacer";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ProjectHero() {
  return (
    <FlexContainer flex="column" gap="lg">
      <Title>Projects Page</Title>
      <Text>
        This page is a curated showcase of the work I’ve built from the ground
        up — spanning UI/UX, backend logic, and full product delivery. Each
        project reflects my process: from understanding real-world needs to
        architecting scalable, maintainable solutions. Whether you’re a
        recruiter or a potential client, these case studies highlight how I
        merge design, development, and storytelling into impactful digital
        experiences.
      </Text>
      <FlexContainer justifyContent="center" width="w-full">
        <Link href={"/contact"}>
          <Button className="px-16">Let's Connect</Button>
        </Link>
      </FlexContainer>
    </FlexContainer>
  );
}
