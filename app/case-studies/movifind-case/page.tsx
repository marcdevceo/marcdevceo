/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import { FlexContainer, Main } from "@/components/ui/Spacer";
import Title, { Subtitle, Text } from "@/components/ui/Typography";

export default function MoviFindCase() {
  return (
    <Main gap="md">
      <a href="/case-studies">
        <Text size="sm" color="secondary">
          ← Back to Case Studies
        </Text>
      </a>
      <br />

      <Title>📽️ MoviFind: Case Study</Title>
      <Text>
        Live Site:{" "}
        <span>
          <a href="https://movifind.vercel.app">https://movifind.vercel.app</a>
        </span>
      </Text>
      <Text>Stack: Next.js 14, TypeScript, Tailwind CSS, TMDB API, Vercel</Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 The Idea</Subtitle>
      <Text size="buttonText">
        MoviFind was inspired by a real request from a friend who loved watching
        movie trailers but didn’t want the hassle of searching YouTube or
        relying on word-of-mouth. She said,{" "}
        <span className="italic font-semibold">
          “I just want a simple site to go to and discover new movies. I don’t
          want it bulky, just something clean and easy to use.”
        </span>{" "}
        That became my north star.
      </Text>
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
      <Text>1. Version 1 Misstep</Text>
      <Text size="buttonText">
        I initially built a version that intentionally avoided Netflix's layout,
        trying to be overly unique. The result? A clunky, confusing app that
        didn’t meet the goal. I wasn’t listening — I was building what I thought
        she wanted.
      </Text>
      <Text>2. Pivot & Realignment</Text>
      <Text size="buttonText">
        I paused, reconnected with the original request, and decided to lean
        into familiarity. Netflix’s layout is effective for a reason. I
        redesigned the homepage to feel like a clean, tailored Netflix — but
        with my own flavor.
      </Text>
      <Text>3. Feature Focus</Text>
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
      <Text>4. Refinement & Deployment</Text>
      <Text size="buttonText">
        As I built, I hit real-world issues: API key configs, layout
        inconsistencies, image scaling, and parameter errors. I worked through
        them with live debugging, console logs, and some help from AI. When all
        features were stable, I deployed to Vercel and did one final pass for
        polish.
      </Text>
      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🤖 AI as a Coding Partner</Subtitle>
      <Text size="buttonText">
        Throughout development, I used AI (ChatGPT) as a second brain:
      </Text>
      <ul className="list-disc ml-10">
        <li className="italic">
          For API strategy, error handling, and refactoring
        </li>
        <li className="italic">To debug issues in real time</li>
        <li className="italic">
          To think through architecture before I wrote code
        </li>
      </ul>
      <Text size="buttonText">
        It was like having a senior dev pair-program with me — guiding when I
        was stuck, but letting me drive.
      </Text>
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
      <Text size="buttonText">Planned updates based on feedback:</Text>
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
      <FlexContainer justifyContent="center" width="w-full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </Main>
  );
}
