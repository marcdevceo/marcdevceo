import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudesList";
import { MainContainer } from "@/ui-framework";

export default function CaseStudies() {
    return (
        <MainContainer gap="2xl">
            <CaseStudiesHero />
            <CaseStudiesList />
        </MainContainer>
    )
}