import ProjectCard from "@/components/projects/ProjectCard";
import ProjectHero from "@/components/projects/ProjectsHero";
import { Main } from "@/components/ui/Spacer";

export default function Projects() {
    return(
        <Main gap="xxl">
            <ProjectHero />
            <ProjectCard />
        </Main>
    )
}