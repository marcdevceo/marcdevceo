// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h1 className="text-4xl font-funky font-bold text-neon mb-16 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tech={project.tech}
            live={project.live}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
