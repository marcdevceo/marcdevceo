import Link from "next/link";
import React from "react";
import { ProjectProps } from "@/data/projects";

export default function ProjectCard({name, description, tech, live, github}: ProjectProps ) {
  return (
    <div className="flex flex-col justify-between bg-gold text-graphite rounded-lg p-6 shadow-xl hover:shadow-gold transition">
      <div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-zinc-700 mb-4">{description}</p>

        <div className="mb-4 p-2 text-sm bg-zinc-700 text-white">
            {tech.join(' • ')}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Link
          href={live}
          target="_blank"
          className="bg-neon text-black px-4 py-2 rounded hover:brightness-90"
        >
          Live Site
        </Link>
        <Link
          href={github}
          target="_blank"
          className="border border-neon px-4 py-2 rounded hover:bg-neon hover:text-black transition"
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}
