export type Projects = {
  title: string;
  description: string;
  img: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
};

export const projectslist = [
  {
    title: "Code.Coach.Culture",
    description: `Code.Coach.Culture is a personal blog that blends 
        leadership insights, software development, and operational strategy. 
        Designed for scalability and clarity, it reflects my journey as both 
        a people developer and full-stack engineer.`,
    img: "/code-coach-culture.png",
    techStack:
      "Next.js | TypeScript | Tailwind CSS | Framer Motion | MDX | Vercel",
    liveUrl: "https://code-coach-culture.vercel.app",
    githubUrl: "https://github.com/marcdevceo/code-coach-culture",
    caseStudyUrl: "",
  },
  {
    title: "MoviFind",
    description: `MoviFind is a sleek, Netflix-inspired movie discovery app 
        powered by the TMDB API, allowing users to browse trending films, 
        filter by genre, and watch trailers in an immersive interface. It 
        showcases clean API integration, responsive design, and modal-based 
        interaction.`,
    img: "/movifind.png",
    techStack:
      "Next.js | TypeScript | Tailwind CSS | TMDB REST API | React Server Components | Vercel",
    liveUrl: "https://movifind.vercel.app",
    githubUrl: "https://github.com/marcdevceo/movifind",
    caseStudyUrl: "",
  },
  {
    title: "MoEx Gifts",
    description: `MoEx Gifts is a custom e-commerce site designed for joyful gift giving, featuring 
      a Stripe-powered checkout flow, themed product carousels, and a vibrant brand aesthetic. 
      Built with a reusable UI framework and custom fonts, it blends frontend creativity with 
      clean backend integration.`,
    img: "/moexgifts.png",
    techStack:
      "Next.js | TypeScript | Tailwind CSS | Stripe API | Custom UI Framework | Vercel",
    liveUrl: "https://moexgifts.vercel.app",
    githubUrl: "https://github.com/marcdevceo/moexgifts",
    caseStudyUrl: "",
  },
];
