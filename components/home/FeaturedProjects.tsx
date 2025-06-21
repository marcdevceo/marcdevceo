import Link from "next/link";
import Image from "next/image";
import { BodyText, Card, Subtitle } from "@/ui-framework";

export default function FeaturedProjects() {
  return (
      <Link
        href="https://movifind.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Card>
            <Subtitle align="center">Featured Project</Subtitle>
            <BodyText align="center" weight="bold">
              Click to Visit!
            </BodyText>
            <Image
              src="/movifind.png"
              alt="MoviFind Image"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
        </Card>
      </Link>
  );
}
