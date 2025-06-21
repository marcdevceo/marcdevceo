import { BlockContainer, BodyText, Title } from "@/ui-framework";

export default function ContactHero() {
  return (
    <>
      <BlockContainer>
        <Title>Contact Me</Title>
        <BodyText size="buttonText">
          <span className="italic font-bold">Clients & Recruiters welcome!</span> <br />
          Let’s build something meaningful together. Whether you’re hiring for
          your team or launching your next idea, I bring full-stack execution
          with a product mindset. Reach out — I’m ready when you are.
        </BodyText>
      </BlockContainer>
    </>
  );
}
