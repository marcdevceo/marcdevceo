import { Main } from "@/components/ui/Spacer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudesList";

export default function CaseStudies() {
    return (
        <Main gap="xxl">
            <CaseStudiesHero />
            <CaseStudiesList />
        </Main>
    )
}