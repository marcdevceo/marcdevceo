import Image from "next/image";
import { projectslist } from "@/data/projectslist";
import { BlockContainer, BodyText, Button, Card, FlexContainer, Subtitle } from "@/ui-framework";

export default function ProjectCard() {
  return (
    <FlexContainer flexDirection="primary" gap="2xl" alignItems="stretch">
      {projectslist.map((project) => (
        <BlockContainer key={project.title} className="flex-1">
          <Card className="flex flex-col gap-4 justify-between">
            <Subtitle align="center">{project.title}</Subtitle>
            <BlockContainer className="flex justify-center">
              <Image
                src={project.img}
                alt={`${project.title} screenshot`}
                width={300}
                height={200}
                className="object-cover h-[200px] overflow-hidden"
              />
            </BlockContainer>
            <BodyText size="caption">{project.description}</BodyText>
            <BodyText size="caption" weight="bold">
              Tech Stack:
                {project.techStack}
            </BodyText>
            <FlexContainer justify="center" width="full" gap="md">
              <Button href={project.liveUrl} target="_blank">
                Visit the Site
              </Button>
              <Button href={project.githubUrl} target="_blank">
                GitHub Link
              </Button>
            </FlexContainer>
          </Card>
        </BlockContainer>
      ))}
    </FlexContainer>
  );
}
