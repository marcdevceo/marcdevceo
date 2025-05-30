import Button from "@/components/ui/Button";
import { FlexContainer, Main } from "@/components/ui/Spacer";
import Title, { Subtitle, Text } from "@/components/ui/Typography";

export default function CodeCoachCultureCase() {
  return (
    <Main gap="md">
      <a href="/case-studies">
        <Text size="sm" color="secondary">
          ← Back to Case Studies
        </Text>
      </a>
      <br />

      <Title>📚 Code.Coach.Culture: Case Study</Title>
      <Text>
        Live Site:{" "}
        <span>
          <a href="https://code-coach-culture.vercel.app">
            https://code-coach-culture.vercel.app
          </a>
        </span>
      </Text>
      <Text>
        Stack: Next.js 14, TypeScript, Tailwind CSS, MDX, Framer Motion, Vercel
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 The Concept</Subtitle>
      <Text size="buttonText">
        I’ve always wanted to blog, but I didn’t want to separate who I was—
        a software developer and a seasoned leader. With 20+ years in customer
        service and 10+ in leadership, I knew how to coach people, manage
        complexity, and build high-performing teams. When I began coding,
        I realized those same skills helped me design systems, think
        intentionally, and build scalable products.
      </Text>
      <Text size="buttonText">
        <span className="font-bold">Code.Coach.Culture</span> is my blueprint.
        It’s where my past meets my potential. I wanted to share what I know,
        what I’m learning, and how I lead—through code, coaching, and culture.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🎯 The Goal</Subtitle>
      <ul className="list-disc ml-10">
        <li>Create a modern personal blog with clean structure and custom styling</li>
        <li>Showcase both leadership and engineering ability in one product</li>
        <li>Practice reusable UI patterns and structured thinking with MDX</li>
        <li>Ship a project I could proudly show to recruiters and clients</li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🔨 The Build Journey</Subtitle>
      <Text>1. Foundation & Structure</Text>
      <Text size="buttonText">
        I started with Next.js 14 and decided to store posts in MDX while
        prepping the system for a future backend. I designed four categories—
        Dev Diaries, Leadership Logs, Ops & Strategy, and Mind & Motivation—
        to house content that reflected my full identity.
      </Text>
      <Text>2. Layout & Components</Text>
      <Text size="buttonText">
        I built reusable components for routing, layout, and post rendering.
        Styled everything with Tailwind and added motion to the hero with
        Framer Motion. Each post is statically generated using
        `generateStaticParams`.
      </Text>
      <Text>3. Real Challenges</Text>
      <Text size="buttonText">
        I ran into hydration issues, file-routing errors, and MDX syntax quirks.
        I used AI to help debug and improve my system structure—learning how to
        pre-render content, fix hydration mismatches, and style MDX posts
        semantically.
      </Text>
      <Text>4. Deploy & Polish</Text>
      <Text size="buttonText">
        Once stable, I deployed to Vercel, confirmed all routes, optimized
        metadata, and wrote a professional README to publish the repo.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🤖 How I Used AI</Subtitle>
      <ul className="list-disc ml-10">
        <li>Debugged MDX rendering and dynamic routing in the App Router</li>
        <li>Improved file structure, accessibility, and mobile responsiveness</li>
        <li>Learned how to approach projects like a product engineer, not just a coder</li>
        <li>Got step-by-step help when stuck but kept ownership of the build</li>
      </ul>
      <Text size="buttonText">
        AI wasn’t just a tool—it was my thought partner. It helped me move from confusion to clarity without skipping the learning process.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>📈 Outcomes</Subtitle>
      <ul className="list-disc ml-10">
        <li>Launched a live blog that reflects my story, skills, and identity</li>
        <li>Mastered MDX integration in a modern Next.js App Router setup</li>
        <li>Built a scalable foundation for future content and backend upgrades</li>
        <li>Published a new Dev Diaries post documenting the journey itself</li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🔄 Next Steps</Subtitle>
      <ul className="list-disc ml-10">
        <li>Eventually migrate content to a database-powered backend</li>
        <li>Add search and filter by category or tags</li>
        <li>Consider adding a contact form integration and analytics</li>
        <li>Continue publishing posts that bridge tech and leadership</li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧾 Final Thoughts</Subtitle>
      <Text size="buttonText">
        <span className="font-bold">Code.Coach.Culture</span> is more than a blog—
        it’s a reflection of how I build, how I lead, and how I learn.  
        It’s proof that the soft skills I gained from decades in customer service
        are an asset in tech—not a separate identity.
      </Text>
      <Text size="buttonText">
        I’m not just trying to code. I’m learning to build—with purpose,
        intention, and clarity.
      </Text>
      <FlexContainer justifyContent="center" width="w-full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </Main>
  );
}
