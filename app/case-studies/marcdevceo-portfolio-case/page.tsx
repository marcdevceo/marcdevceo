import { BodyText, Button, FlexContainer, MainContainer, Subtitle, Title } from "@/ui-framework";

export default function MarcDevCEOPortfolioCase() {
  return (
    <MainContainer gap="md">
      <a href="/case-studies">
        <BodyText size="sm" color="secondary">
          ← Back to Case Studies
        </BodyText>
      </a>
      <br />

      <Title>🧑🏾‍💻 MarcDevCEO Portfolio: Case Study</Title>
      <BodyText>
        Live Site:{" "}
        <span className="italic font-semibold">
          <a href="https://marcdevceo.vercel.app">marcdevceo.vercel.app</a>
        </span>
      </BodyText>
      <BodyText>Stack: Next.js 14, Tailwind CSS, Custom UI Framework, Vercel</BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 The Journey</Subtitle>
      <BodyText size="buttonText">
        This is version three of my developer portfolio—and easily the most
        intentional. The first two attempts either lacked polish or didn’t feel
        like “me.” Something was always missing: consistent design, visual
        identity, or structure.
      </BodyText>
      <BodyText size="buttonText">
        When I started the UI/UX Product Design Bootcamp from ZeroToMastery, I
        knew it was time to scrap everything and rebuild from scratch. Not just
        a portfolio—an experience.
      </BodyText>
      <BodyText size="buttonText">
        The biggest breakthrough? Creating my own custom UI framework with
        design tokens. It gave me the consistency I had always struggled to
        maintain across pages and projects.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧱 Build Highlights</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          <span className="font-semibold">Custom UI Framework:</span> Built
          reusable, styled components (<code>Title</code>, <code>Card</code>,{" "}
          <code>SpacerY</code>) with Tailwind and design tokens.
        </li>
        <li>
          <span className="font-semibold">Responsive Routes:</span> Clean App
          Router structure: <code>/projects</code>, <code>/about-me</code>,{" "}
          <code>/case-studies</code>.
        </li>
        <li>
          <span className="font-semibold">Color Strategy:</span> Spent days
          iterating on color palettes. Settled on a bold, masculine combo that
          reflects my style and vibes.
        </li>
        <li>
          <span className="font-semibold">AI Collaboration:</span> Used AI for
          naming help, layout suggestions, and color theory guidance.
        </li>
        <li>
          <span className="font-semibold">Deployment:</span> CI/CD on Vercel
          with GitHub integration for seamless updates.
        </li>
      </ul>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>⚙️ Challenges & Breakthroughs</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Breaking away from pre-made UI kits and learning to trust my design
          sense
        </li>
        <li>
          Abstracting layout and spacing logic to make global changes simple
        </li>
        <li>Balancing design creativity with clean developer ergonomics</li>
        <li>
          Getting obsessive over details—then learning when to stop tweaking
        </li>
      </ul>
      <BodyText size="buttonText">
        Every hard lesson helped me grow as both a designer and developer. And
        now, future projects will be easier to spin up thanks to this framework.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🚀 Results</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Score improvement: Lighthouse SEO/accessibility jumped from 94 → 98
        </li>
        <li>
          Created a strong, visual first impression for recruiters and clients
        </li>
        <li>Built a scalable base for future pages and side projects</li>
        <li>Gained confidence in my design taste and system-building skills</li>
      </ul>
      <BodyText size="buttonText">
        It’s fast, responsive, bold, and clean. Most importantly—it’s mine. From
        the typography to the color palette, it feels like a true reflection of
        who I am as a developer.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🌟 Why This Portfolio Matters</Subtitle>
      <BodyText size="buttonText">
        This site isn’t just a portfolio. It’s a milestone. It proves I can
        think like a product designer, build like an engineer, and ship like a
        professional.
      </BodyText>
      <BodyText size="buttonText">
        It’s also a playground for my future ideas—an evolving showcase that’ll
        grow as I do.
      </BodyText>
      <BodyText size="buttonText">
        For recruiters and collaborators, this is my signal: I build clean. I
        build real. And I’m just getting started.
      </BodyText>
      <FlexContainer justify="center" width="full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </MainContainer>
  );
}
