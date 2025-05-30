import { Text } from "@/components/ui/Typography";
import { ReactNode } from "react";

export type CaseStudiesType = {
  title: string;
  slug: string;
  href: string;
  summary: ReactNode;
  img?: string[];
};

export const caseStudiesList: CaseStudiesType[] = [
  {
    title: "MarcDevCEO Portfolio",
    slug: "marcdevceo-portfolio",
    href: "/case-studies/marcdevceo-portfolio",
    summary: (
      <>
        <Text size="caption">
          The MarcDevCEO Portfolio is a bold, fully custom developer showcase
          built with a reusable UI framework tailored for personal branding. It
          highlights clean design, consistent theming, and scalable components —
          all while reflecting Marc’s technical range and creative personality.{" "}
        </Text>
      </>
    ),
    img: [],
  },
  {
    title: "Code.Coach.Culture",
    slug: "code-coach-culture",
    href: "/case-studies/code-coach-culture-case",
    summary: (
      <>
        <Text size="caption">
          Code.Coach.Culture is my personal brand where I blend 20+ years of
          leadership with full-stack development. It highlights my work, growth,
          and values—focusing on clean code, user-first design, and building
          culture through tech.{" "}
        </Text>
      </>
    ),
    img: [],
  },
  {
    title: "MoviFind Web App",
    slug: "movifind-web-app",
    href: "/case-studies/movifind-case",
    summary: (
      <>
        <Text size="caption">
          MoviFind is a Netflix-inspired movie discovery app built with Next.js,
          Tailwind CSS, and the TMDB API. The app allows users to explore
          trending and top-rated movies in a sleek, mobile-friendly UI.
        </Text>
      </>
    ),
    img: [],
  },
];
