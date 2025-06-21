import ProjectCard from "@/components/projects/ProjectCard";
import ProjectHero from "@/components/projects/ProjectsHero";
import { MainContainer } from "@/ui-framework";

export default function Projects() {
    return(
        <MainContainer gap="2xl">
            <ProjectHero />
            <ProjectCard />
        </MainContainer>
    )
}