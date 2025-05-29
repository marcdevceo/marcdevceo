import Card from "@/components/ui/Card";
import { Subtitle } from "../ui/Typography";
import { caseStudiesList } from "@/data/casestudies";
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