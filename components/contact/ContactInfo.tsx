import Card from "@/components/ui/Card";
import { Subtitle, Text } from "@/components/ui/Typography";
import { contactlist } from "@/data/contactlist";
import { FlexContainer, SpacerY } from "../ui/Spacer";

export default function ContactInfo() {
  return (
    <FlexContainer width="w-full" justifyContent="center">
      <Card>
        <Subtitle align="center">Click to Explore!</Subtitle>
        <SpacerY size="md" />
        {contactlist.map((contact) => {
            return (
                <Text weight="bold" key={contact.name}>
                {contact.name}:
                <span className="italic font-semibold mx-2 text-lg">
                    <a
                        href={contact.href}
                        target="_blank"
                        rel="noopner noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        {contact.link}
                    </a>
                </span>
                </Text>
            )
        })
        }
      </Card>
    </FlexContainer>
  );
}
