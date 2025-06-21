import { caseStudiesList } from "@/data/casestudies";
import { Card, Subtitle } from "@/ui-framework";
import Link from "next/link";

export default function CaseStudiesList() {
    return (
        <>
            {caseStudiesList.map((caseStudy) => (
                <Link  key={caseStudy.slug} href={caseStudy.href}>
                    <Card className="flex flex-col gap-2">
                        <Subtitle align="center">{caseStudy.title}</Subtitle>
                        {caseStudy.summary}
                    </Card>
                </Link>
                ))}
                
        </>
    )
}