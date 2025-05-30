import Image from "next/image";
import Card from "@/components/ui/Card";
import { Subtitle, Text } from "@/components/ui/Typography";
import SpacerX, { Container, FlexContainer } from "../ui/Spacer";
import Button from "@/components/ui/Button";
import { projectslist } from "@/data/projectslist";

export default function ProjectCard() {
  return (
    <FlexContainer flex="primary" gap="xxl" alignItems="stretch">
      {projectslist.map((project) => (
        <Container key={project.title} className="flex-1">
          <Card className="flex flex-col gap-4 justify-between">
            <Subtitle align="center">{project.title}</Subtitle>
            <Container className="flex justify-center">
              <Image
                src={project.img}
                alt={`${project.title} screenshot`}
                width={300}
                height={200}
                className="object-cover h-[200px] overflow-hidden"
              />
            </Container>
            <Text size="caption">{project.description}</Text>
            <Text size="caption" weight="bold">
              Tech Stack:
              <SpacerX className="font-light italic">
                {project.techStack}
              </SpacerX>
            </Text>
            <FlexContainer justifyContent="center" width="w-full" gap="md">
              <Button href={project.liveUrl} target="_blank">
                Visit the Site
              </Button>
              <Button href={project.githubUrl} target="_blank">
                GitHub Link
              </Button>
            </FlexContainer>
          </Card>
        </Container>
      ))}
    </FlexContainer>
  );
}
