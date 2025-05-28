import Image from "next/image";
import Card from "@/components/ui/Card";
import { Subtitle, Text } from "@/components/ui/Typography";
import SpacerX, { Container, FlexContainer } from "../ui/Spacer";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { projectslist } from "@/data/projectslist";

export default function ProjectCard() {
  return (
    <FlexContainer flex="primary" gap="xxl" alignItems="stretch">
      {projectslist.map((project) => (
        <Container key={project.title} className="flex-1">
          <Card className="flex flex-col gap-4 justify-between">
                    <Subtitle align="center">{project.title}</Subtitle>
                    <Container className="flex justify-center h-[200px] overflow-hidden">
                        <Image
                        src={project.img}
                        alt="image of MoviFind App"
                        width={300}
                        height={200}
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
                        <Link href={project.liveUrl} target="_blank">
                        <Button>Visit the Site</Button>
                        </Link>
                        <Link href={project.githubUrl} target="_blank">
                        <Button>GitHub Link</Button>
                        </Link>
                    </FlexContainer>
          </Card>
        </Container>
      ))}
    </FlexContainer>
  );
}
