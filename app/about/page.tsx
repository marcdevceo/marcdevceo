import Tagline from "@/components/Tagline";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto mt-20 px-4">
      <h1 className="text-4xl font-funky text-neon mb-6 text-center">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side: personal brand or photo */}
        <div className="flex justify-center">
          {/* Optional: replace with real image later */}
          <Image
            src="/me3.jpeg"
            alt="MarcDevCEO"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>

        {/* Right side: bio */}
        <div className="text-gray-200 space-y-4">
          <p>
            I am Marcus, but I go by <strong>MarcDevCEO</strong> when I’m
            building software. With 20+ years in customer service and over a
            decade in leadership, I bring people-first thinking into every line
            of code.
          </p>
          <p>
            I’m currently focused on full-stack development using{" "}
            <strong>Next.js, Tailwind CSS, and Django</strong>. I love building
            tools that feel intuitive and solving problems that actually matter.
          </p>
          <p>
            I’m a firm believer in God, a diehard football fan {" "} 
            <span className="font-semibold">FlyEaglesFly</span> & {" "}
            <span className="font-semibold">War Eagle</span>, and someone who
            believes music—especially the right playlist—can calm even the most
            savage coding beast.
          </p>
        </div>
      </div>
      <Tagline />
    </section>
  );
}
