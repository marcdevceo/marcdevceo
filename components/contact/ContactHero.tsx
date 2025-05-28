import Title, { Text } from "@/components/ui/Typography";
import { Container, SpacerY } from "../ui/Spacer";

export default function ContactHero() {
  return (
    <>
      <Container>
        <Title>Contact Me</Title>
        <SpacerY size="md" />
        <Text>
          <span className="italic font-bold">Clients & Recruiters welcome!</span> <br />
          Let’s build something meaningful together. Whether you’re hiring for
          your team or launching your next idea, I bring full-stack execution
          with a product mindset. Reach out — I’m ready when you are.
        </Text>
      </Container>
    </>
  );
}
