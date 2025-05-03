// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h1 className="text-4xl font-funky font-bold text-neon mb-6 text-center">
        Projects
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
        My work blends clean design with practical functionality—built for
        users, not just features. These projects represent how I think, how I
        code, and how I solve real problems through software. From social apps
        to internal tools, I build with purpose and personality.
      </p>

      <div className="flex jusitfy-center gap-8 justify-center max-w-6xl mx-auto">
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
