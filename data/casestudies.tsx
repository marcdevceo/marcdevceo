import { BodyText } from "@/ui-framework";
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
    title: "MoEx Gifts E-Commerce Site",
    slug: "moex-gifts",
    href: "/case-studies/moex-gifts",
    summary: (
      <>
        <BodyText size="caption">
          MoEx Gifts is a playful e-commerce experience centered on expressive
          gift giving. Built with Next.js and a custom UI framework, it features
          a dynamic Stripe Checkout flow, styled product carousel, and seasonal
          branding to bring joy to the shopping journey.
        </BodyText>
      </>
    ),
    img: [],
  },
  {
    title: "UI Framework",
    slug: "ui-framework-case ",
    href: "/case-studies/ui-framework-case",
    summary: (
      <>
        <BodyText size="caption">
          MELLC UI Framework is a custom-built design system crafted to bring
          React Native–style structure and consistency into my web development
          workflow. By combining Tailwind CSS with reusable components and
          semantic design tokens, I created a system that’s flexible,
          brand-ready, and responsive by default.{" "}
        </BodyText>
      </>
    ),
    img: [],
  },
  {
    title: "MarcDevCEO Portfolio",
    slug: "marcdevceo-portfolio",
    href: "/case-studies/marcdevceo-portfolio-case",
    summary: (
      <>
        <BodyText size="caption">
          The MarcDevCEO Portfolio is a bold, fully custom developer showcase
          built with a reusable UI framework tailored for personal branding. It
          highlights clean design, consistent theming, and scalable components —
          all while reflecting Marc’s technical range and creative personality.{" "}
        </BodyText>
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
        <BodyText size="caption">
          Code.Coach.Culture is my personal brand where I blend 20+ years of
          leadership with full-stack development. It highlights my work, growth,
          and values—focusing on clean code, user-first design, and building
          culture through tech.{" "}
        </BodyText>
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
        <BodyText size="caption">
          MoviFind is a Netflix-inspired movie discovery app built with Next.js,
          Tailwind CSS, and the TMDB API. The app allows users to explore
          trending and top-rated movies in a sleek, mobile-friendly UI.
        </BodyText>
      </>
    ),
    img: [],
  },
];
