/* eslint-disable react/no-unescaped-entities */

import { BodyText, Button, FlexContainer, Title } from "@/ui-framework";

export default function ProjectHero() {
  return (
    <FlexContainer flexDirection="column" gap="lg">
      <Title>Projects Page</Title>
      <BodyText size="buttonText">
        This page is a curated showcase of the work I’ve built from the ground
        up — spanning UI/UX, backend logic, and full product delivery. Each
        project reflects my process: from understanding real-world needs to
        architecting scalable, maintainable solutions. Whether you’re a
        recruiter or a potential client, these case studies highlight how I
        merge design, development, and storytelling into impactful digital
        experiences.
      </BodyText>
      <FlexContainer justify="center" width="full">
        <Button href="/contact" className="px-24">
          Let's Connect
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
