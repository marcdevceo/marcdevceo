import { contactlist } from "@/data/contactlist";
import { BodyText, Card, FlexContainer, Subtitle } from "@/ui-framework";

export default function ContactInfo() {
  return (
    <FlexContainer width="full" justify="center">
      <Card>
        <Subtitle align="center">Click to Explore!</Subtitle>
        {contactlist.map((contact) => {
          return (
            <BodyText weight="bold" key={contact.name}>
              {contact.name}:
              <BodyText italic weight="semibold" size="lg">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopner noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {contact.link}
                </a>
              </BodyText>
            </BodyText>
          );
        })}
      </Card>
    </FlexContainer>
  );
}
