/* eslint-disable react/no-unescaped-entities */

import { BodyText, Button, FlexContainer, MainContainer, Subtitle, Title } from "@/ui-framework";

export default function MoviFindCase() {
  return (
    <MainContainer gap="md">
      <a href="/case-studies">
        <BodyText size="sm" color="secondary">
          ← Back to Case Studies
        </BodyText>
      </a>
      <br />

      <Title>📽️ MoviFind: Case Study</Title>
      <BodyText>
        Live Site:{" "}
        <span>
          <a href="https://movifind.vercel.app">https://movifind.vercel.app</a>
        </span>
      </BodyText>
      <BodyText>Stack: Next.js 14, TypeScript, Tailwind CSS, TMDB API, Vercel</BodyText>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 The Idea</Subtitle>
      <BodyText size="buttonText">
        MoviFind was inspired by a real request from a friend who loved watching
        movie trailers but didn’t want the hassle of searching YouTube or
        relying on word-of-mouth. She said,{" "}
        <span className="italic font-semibold">
          “I just want a simple site to go to and discover new movies. I don’t
          want it bulky, just something clean and easy to use.”
        </span>{" "}
        That became my north star.
      </BodyText>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🎯 The Goal</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Create a centralized platform to discover and preview new movies,
          especially trailers.
        </li>
        <li>Make it familiar and intuitive, like Netflix, but lighter.</li>
        <li>Stay focused on just the essentials for Version 1 (MVP).</li>
        <li>Leave room to grow based on real feedback.</li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🔨 The Build Journey</Subtitle>
      <BodyText>1. Version 1 Misstep</BodyText>
      <BodyText size="buttonText">
        I initially built a version that intentionally avoided Netflix's layout,
        trying to be overly unique. The result? A clunky, confusing app that
        didn’t meet the goal. I wasn’t listening — I was building what I thought
        she wanted.
      </BodyText>
      <BodyText>2. Pivot & Realignment</BodyText>
      <BodyText size="buttonText">
        I paused, reconnected with the original request, and decided to lean
        into familiarity. Netflix’s layout is effective for a reason. I
        redesigned the homepage to feel like a clean, tailored Netflix — but
        with my own flavor.
      </BodyText>
      <BodyText>3. Feature Focus</BodyText>
      <ul className="list-disc ml-10">
        <li className="italic">
          Featured Banner with trailer button in a modal
        </li>
        <li className="italic">
          Top Rated, Now Playing, and Upcoming sections
        </li>
        <li className="italic">Genre filtering for better discovery</li>
        <li className="italic">Movie details page for deeper exploration</li>
        <li className="italic">Fallback images to handle missing posters</li>
        <li className="italic">Modal design system for scalability</li>
        <li className="italic">
          TMDB API as the sole source of reliable, updated movie data
        </li>
      </ul>
      <BodyText>4. Refinement & Deployment</BodyText>
      <BodyText size="buttonText">
        As I built, I hit real-world issues: API key configs, layout
        inconsistencies, image scaling, and parameter errors. I worked through
        them with live debugging, console logs, and some help from AI. When all
        features were stable, I deployed to Vercel and did one final pass for
        polish.
      </BodyText>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🤖 AI as a Coding Partner</Subtitle>
      <BodyText size="buttonText">
        Throughout development, I used AI (ChatGPT) as a second brain:
      </BodyText>
      <ul className="list-disc ml-10">
        <li className="italic">
          For API strategy, error handling, and refactoring
        </li>
        <li className="italic">To debug issues in real time</li>
        <li className="italic">
          To think through architecture before I wrote code
        </li>
      </ul>
      <BodyText size="buttonText">
        It was like having a senior dev pair-program with me — guiding when I
        was stuck, but letting me drive.
      </BodyText>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>📈 Outcomes</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Delivered a clean, intuitive MVP that’s already getting real user
          feedback.
        </li>
        <li>
          Reaffirmed that listening to the user matters more than trying to
          impress with over-complexity.
        </li>
        <li>
          Proved my ability to build and deploy a full-stack app with real data,
          modern tech, and thoughtful UI.
        </li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🔄 Next Steps: Version 2</Subtitle>
      <BodyText size="buttonText">Planned updates based on feedback:</BodyText>
      <ul className="list-disc ml-10">
        <li>Search bar</li>
        <li>Better trailer discovery</li>
        <li>Watchlist</li>
        <li>Personalized recommendations</li>
      </ul>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧾 Lessons Learned</Subtitle>
      <ul className="list-disc ml-10">
        <li>Don't reinvent what already works. Familiarity is usability.</li>
        <li>Always go back to the core user need.</li>
        <li>
          Small wins (like fallback images or modals) add up to a polished UX.
        </li>
        <li>
          Using AI as a partner accelerates learning and delivery without
          replacing deep thinking.
        </li>
      </ul>
      <FlexContainer justify="center" width="full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </MainContainer>
  );
}
