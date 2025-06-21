import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import { MainContainer } from "@/ui-framework";


export default function Contact() {
    return (
        <MainContainer gap="2xl">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </MainContainer>
    )
}