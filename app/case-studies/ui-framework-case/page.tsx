import { BodyText, Button, FlexContainer, MainContainer, Subtitle, Title } from "@/ui-framework";

export default function UIFrameworkCaseStudy() {
  return (
    <MainContainer gap="md">
      <a href="/case-studies">
        <BodyText size="sm" color="secondary">
          ← Back to Case Studies
        </BodyText>
      </a>
      <br />

      <Title>🧩 UI Framework: Case Study</Title>
      <BodyText>
        First Used In:{" "}
        <span className="italic font-semibold">
          <a
            href="https://marcdevceo.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            marcdevceo.vercel.app
          </a>
        </span>
      </BodyText>
      <BodyText>Stack: Next.js 14, Tailwind CSS, Custom UI Framework, Vercel</BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧠 The Thinking Behind It</Subtitle>
      <BodyText size="buttonText">
        Like most devs, I started with raw CSS. But once I discovered
        TailwindCSS, that became my go-to for every web app. Clean, fast,
        utility-first—exactly what I needed.
      </BodyText>
      <BodyText size="buttonText">
        Then I started learning React Native. And that shifted everything.
      </BodyText>
      <BodyText size="buttonText">
        StyleSheet in React Native showed me the power of controlling layout and
        tokens at a system level. Suddenly, I wasn’t just styling elements—I was
        thinking in terms of consistency, scalability, and reusability.
      </BodyText>
      <BodyText size="buttonText">
        I asked myself: “What if I could bring that structure and discipline to
        my web apps too?”
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🚧 The Pivot Point</Subtitle>
      <BodyText size="buttonText">
        My first attempt at building a UI framework felt like reinventing the
        wheel. I was overcomplicating it. But then it clicked—I didn’t need to
        replace Tailwind, I just needed to **wrap it with my own naming
        conventions and components**.
      </BodyText>
      <BodyText size="buttonText">
        I started crafting components like <code>&lt;Title /&gt;</code>,{" "}
        <code>&lt;Main /&gt;</code>, and <code>&lt;Text /&gt;</code>, taking
        cues from React Native’s simplicity. I created{" "}
        <code>theme/color.ts</code>, <code>theme/spacing.ts</code>, and defined
        my own <code>types</code> to bring consistent structure to everything.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🔁 Real-World Application</Subtitle>
      <BodyText size="buttonText">
        The first project to fully use this new framework was my portfolio
        redesign. And that experience shaped the future of the entire system.
      </BodyText>
      <BodyText size="buttonText">
        I realized I hadn’t accounted for **responsiveness**. So I rewrote{" "}
        <code>fontSize.ts</code> to include breakpoints: <code>sm:</code>,{" "}
        <code>md:</code>, <code>lg:</code>. Now, my <code>title</code> text
        doesn’t just look good—it adapts across screen sizes.
      </BodyText>
      <BodyText size="buttonText">
        I also reduced overuse of things like <code>&lt;SpacerY /&gt;</code> by
        baking spacing into components directly. That alone cleaned up my JSX
        significantly.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧱 System Features</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          <span className="font-semibold">Responsive Typography:</span> Built
          with semantic keys like <code>title</code>, <code>caption</code>,{" "}
          <code>body</code>, all using Tailwind breakpoints.
        </li>
        <li>
          <span className="font-semibold">Component Tokens:</span> Spacing,
          color, flex logic abstracted with tokens like <code>gapClass</code>{" "}
          and <code>marginClass</code>.
        </li>
        <li>
          <span className="font-semibold">Design Consistency:</span> Every{" "}
          <code>&lt;Text /&gt;</code>, <code>&lt;Subtitle /&gt;</code>, and{" "}
          <code>&lt;Button /&gt;</code> looks and feels consistent without
          repetition.
        </li>
        <li>
          <span className="font-semibold">Brand Ready:</span> Projects can swap
          out <code>theme/color.ts</code> to match their own palette without
          changing the rest of the system.
        </li>
      </ul>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🌟 What I Learned</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Build real projects *while* building your system — don’t design in a
          vacuum.
        </li>
        <li>Tailwind is powerful, but structure and naming give it soul.</li>
        <li>
          Break things up: themes, types, and components deserve their own
          folders.
        </li>
        <li>
          A good system doesn’t do everything—it makes the right things easier.
        </li>
      </ul>

      <BodyText size="buttonText">
        This framework now powers all my new projects—starting with my portfolio
        and soon, client work. I’m proud of it not just because it works—but
        because I built it *for me*.
      </BodyText>

      <FlexContainer justify="center" width="full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </MainContainer>
  );
}
