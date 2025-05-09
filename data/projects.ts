export interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

export const projects: ProjectProps[] = [
  {
    name: "Code.Coach.Culture",
    description:
      "A content platform that blends software development, leadership growth, and operational strategy",
    tech: ["Next.js", "TailwindCSS", "MDX", "Framer-Motion", "Vercel"],
    live: "https://code-coach-culture.vercel.app",
    github: "https://github.com/marcdevceo/code-coach-culture",
  },
  {
    name: "MoviFind",
    description:
      "Search and discover movies with trailer previews and ratings.",
    tech: ["React", "TMDB API", "TailwindCSS"],
    live: "https://movifind.vercel.app",
    github: "https://github.com/marcdevceo/movifind",
  },
  {
    name: "MELLC – Managed Enterprises LLC",
    description:
      "A leadership and customer experience coaching site for my business, showcasing my ability to combine professional branding with backend functionality using FastAPI and Supabase.",
    tech: ["Next.js", "TailwindCSS", "FastAPI", "Supabase"],
    live: "https://mellc-site.vercel.app",
    github: "https://github.com/marcdevceo/mellc_site",
  },
];
