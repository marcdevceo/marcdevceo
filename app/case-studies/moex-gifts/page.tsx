/* eslint-disable react/no-unescaped-entities */

import { BodyText, Button, FlexContainer, MainContainer, Subtitle, Title } from "@/ui-framework";

export default function MoExGiftsCase() {
  return (
    <MainContainer gap="md">
      <a href="/case-studies">
        <BodyText size="sm" color="secondary">
          ← Back to Case Studies
        </BodyText>
      </a>
      <br />

      <Title>🎁 MoEx Gifts: Case Study</Title>
      <BodyText>
        Live Site:{" "}
        <span className="italic font-semibold">
          <a href="https://moexgifts.vercel.app" target="_blank">
            moexgifts.vercel.app
          </a>
        </span>
      </BodyText>
      <BodyText>
        Stack: Next.js 14 | TypeScript | Tailwind CSS | Stripe | Vercel | Custom UI Framework
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>❤️ The Backstory</Subtitle>
      <BodyText size="buttonText">
        MoEx Gifts started as more than just a dev project—it was born from a dream I had years ago.
        I once wanted to build an e-commerce business centered around meaningful gift giving.
        In a world overwhelmed with negativity, I wanted to create an outlet for people to express
        joy, love, and appreciation through intentional moments—moments expressed.
      </BodyText>
      <BodyText size="buttonText">
        This project gave that vision new life through code. And along the way, I leveled up in a
        big way as a developer.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🧱 What I Built</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          <span className="font-semibold">Product Carousel:</span> Auto-advancing Stripe-powered carousel
          with styled overlay and blurred background for featured items.
        </li>
        <li>
          <span className="font-semibold">Custom Checkout:</span> Secure Stripe Checkout flow, test-mode
          enabled for demo use.
        </li>
        <li>
          <span className="font-semibold">UI Framework:</span> Built reusable UI components for layout,
          typography, and theming.
        </li>
        <li>
          <span className="font-semibold">Mobile-Responsive Design:</span> Carefully tailored layout for
          both desktop and mobile shoppers.
        </li>
        <li>
          <span className="font-semibold">Seasonal Themes:</span> Font families, banners, and
          homepage blurbs that can reflect holidays like the 4th of July.
        </li>
      </ul>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>💥 Breakthroughs</Subtitle>
      <ul className="list-disc ml-10">
        <li>Learned how to create smooth UI interactions and transitions</li>
        <li>Practiced Stripe integration from scratch, both frontend and backend</li>
        <li>Developed a custom font and color system across the entire app</li>
        <li>Abstracted common UI into reusable design system components</li>
        <li>Debugged production deployment errors using Vercel env logs</li>
      </ul>

      <BodyText size="buttonText">
        Most importantly, I built confidence in shipping something that works, that looks great,
        and that truly means something to me.
      </BodyText>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🚀 The Results</Subtitle>
      <ul className="list-disc ml-10">
        <li>
          Fully responsive, live e-commerce demo with functioning Stripe Checkout
        </li>
        <li>
          Fast-loading, themed shopping experience that reflects emotion and care
        </li>
        <li>
          Real-world experience working with API routes, secure keys, and deployment flow
        </li>
        <li>
          A personal win—turning an old business idea into a working product
        </li>
      </ul>

      <hr className="w-full border-t border-gray-600 my-6" />

      <Subtitle>🌟 Why This Project Matters</Subtitle>
      <BodyText size="buttonText">
        This wasn’t just another portfolio piece. MoEx Gifts was deeply personal.
        It reminded me of the power of combining purpose with creativity. It also
        showed me how far I’ve come—from an idea on paper to a deployed, dynamic
        e-commerce app.
      </BodyText>
      <BodyText size="buttonText">
        For any developer, the turning point is when your code starts reflecting who you are.
        This app is that moment for me. And I'm proud of it.
      </BodyText>

      <FlexContainer justify="center" width="full">
        <Button href="/case-studies">Back to Case Studies</Button>
      </FlexContainer>
    </MainContainer>
  );
}
