/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const caseStudies = [
  // {
  //   name: 'MELLC – Managed Enterprises LLC',
  //   slug: 'mellc',
  // },
  {
    name: 'MoviFind',
    slug: 'movifind',
  },
  // {
  //   name: 'Code.Coach.Culture Blog',
  //   slug: 'code-coach-culture',
  // },
  // {
  //   name: 'VibeSync (in progress)',
  //   slug: 'vibesync',
  // },
]

export default function CaseStudiesPage() {
  return (
    <section className="max-w-4xl mx-auto mt-20 px-4">
      <h1 className="text-4xl font-funky text-neon mb-6 text-center">Case Studies</h1>
      <p className="text-gray-300 mb-10 text-center">
        Here's a deeper look into my projects—why I built them, how I approached the problems, and what I learned.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {caseStudies.map(({ name, slug }) => (
          <Link
            key={slug}
            href={`/case-studies/${slug}`}
            className="bg-gold text-black px-6 py-4 rounded-lg shadow hover:brightness-95 transition block text-center font-semibold"
          >
            {name}
          </Link>
        ))}
      </div>
    </section>
  )
}

