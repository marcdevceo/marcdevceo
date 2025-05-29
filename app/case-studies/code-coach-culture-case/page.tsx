/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components/ui/Spacer";
import Title, { Subtitle, Text } from "@/components/ui/Typography";

export default function CodeCoachCultureCase() {
  return (
    <Main gap="md">
        <a href="/case-studies"> 
            <Text size="sm" color="secondary">← Back to Case Studies</Text>
        </a><br/>
      <Title>Code.Coach.Culture: Case Study</Title>
      <Text>
        Project: Code.Coach.Culture — A Blog Platform for Developers and Leaders
      </Text>
      <Text>
        Live Site:{" "}
        <span className="italic font-semibold">
          <a href="https://code-coach-culture.vercel.app">
            code-coach-culture.vercel.app
          </a>
        </span>
      </Text>
      <Text>Stack: Next.js 14, MDX, Tailwind CSS, Framer Motion, Vercel</Text>
      <hr className="w-full border-t border-gray-600 my-6" />
      <Subtitle>🎯 The Concept</Subtitle>
      <Text size="buttonText">
        For years, I dreamed of starting a blog—but I didn’t just want to write
        posts. I wanted to create a platform that reflected my identity: part
        software developer, part leadership coach, and fully committed to
        excellence in people and systems.
      </Text>
      <Text size="buttonText">
        As someone with over 20 years of customer service experience and more
        than a decade in leadership, I’ve spent my career developing people,
        managing operations, and driving performance. When I transitioned into
        software development, I initially felt like I had to leave that part of
        myself behind. But the deeper I got into coding, the more I realized
        those experiences gave me a powerful edge in design thinking, system
        planning, and intentional problem-solving.
      </Text>
      <Text size="buttonText">
        <span className="font-bold">Code.Coach.Culture</span> was born to bring
        those worlds together. It’s a personal blog—but also a technical case
        study in how to design with clarity, scale, and heart.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧱 Planning & Structure</Subtitle>
      <Text size="buttonText">
        I broke the project down like a real product:
      </Text>
      <ul className="list-disc ml-10">
        <li>
          <span className="font-semibold">Categories:</span> I created 4 main
          content pillars:Dev Diaries, Leadership Logs, Ops & Strategy, and Mind
          & Motivation
        </li>
        <li>
          <span className="font-semibold">Content System:</span> I chose MDX for
          blog post storage—keeping it lightweight and future-proof while
          allowing rich content formatting and custom components
        </li>
        <li>
          <span className="font-semibold">Routing:</span> Leveraged Next.js App
          Router for clean URL structures like /dev-diaries/[slug]
        </li>
        <li>
          <span className="font-semibold">Reusability:</span>Reusability:
          Componentized layouts and utilities like Hero, CategoryLinks, and
          PostCard
        </li>
        <li>
          <span className="font-semibold">Style:</span> Used TailwindCSS for
          consistent, expressive design with mobile responsiveness baked in
        </li>
        <li>
          <span className="font-semibold">Hosting:</span> Deployed to Vercel
          with static site generation using generateStaticParams
        </li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 Learning & Challenges</Subtitle>
      <Text size="buttonText">
        This wasn’t just a project—it was a journey. I had to:
      </Text>
      <ul className="list-disc ml-10">
        <li>Learn how to use MDX inside a modern Next.js setup</li>
        <li>Debug hydration errors and route mismatches</li>
        <li>Structure my content for growth, not just MVP</li>
        <li>
          Think like a frontend engineer while moving with the mindset of an
          operator
        </li>
        <li>
          Use AI (ChatGPT) to help me solve problems faster and understand best
          practices
        </li>
      </ul>
      <Text size="buttonText">
        With every obstacle, I built new skills: understanding how to map files
        to routes, pre-render with static generation, use semantic HTML, and
        write clean, responsive design.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🚀 Deployment & Results</Subtitle>
      <Text size="buttonText">Once the site was built, I:</Text>
      <ul className="list-disc ml-10">
        <li>Ran local builds with npm run build to confirm stability</li>
        <li>Deployed to Vercel with GitHub integration</li>
        <li>Validated every route, post, and component</li>
        <li>Created a polished README.md and opened the repo to the public</li>
      </ul>
      <Text size="buttonText">
        What I launched wasn’t just a blog. It was a portfolio piece, a
        conversation starter, and a digital home for my unique blend of skills.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🌟 Why It Matters</Subtitle>
      <Text>
        <span className="font-bold">Code.Coach.Culture</span> is more than code.
        It’s my blueprint.
      </Text>
      <Text size="buttonText">
        I’ve stopped separating who I was from who I’m becoming. This platform
        is proof that technical growth and people development can coexist—and
        even strengthen each other.
      </Text>
      <Text size="buttonText">
        For recruiters and potential clients, it’s a window into my mind: how I
        build, how I lead, and how I think.
      </Text>
      <Text size="buttonText">
        If you're looking for someone who can connect dots between customer
        experience, team leadership, and scalable software—this is the case
        study you were meant to see.
      </Text>
    </Main>
  );
}
