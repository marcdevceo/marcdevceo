import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import { Main, SpacerY } from "@/components/ui/Spacer";


export default function Contact() {
    return (
        <Main>
            <ContactHero />
            <SpacerY size="xxl" />
            <ContactInfo />
            <SpacerY size="xxl" />
            <ContactForm />
        </Main>
    )
}