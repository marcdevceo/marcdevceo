'use client'

import Link from 'next/link'

export default function MoviFindCaseStudy() {
  return (
    <section className="max-w-3xl mx-5 mt-20 px-4 space-y-6 text-gray-100">
      <h1 className="text-4xl font-funky text-neon text-center">🎬 MoviFind Case Study</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gold">Project Overview</h2>
        <p>
          MoviFind is a Netflix-inspired movie discovery app that allows users to explore currently
          playing and top-rated films, filter by genre, and watch trailers directly within the app. Built with
          <strong> Next.js, Tailwind CSS, and the TMDB API</strong>, it showcases full-stack thinking,
          polished UI/UX, and third-party API integration.
        </p>

        <h2 className="text-2xl font-bold text-gold">Goal</h2>
        <ul className="list-disc list-inside mx-5 space-y-1">
          <li>Demonstrate strong UI/UX principles</li>
          <li>Integrate external APIs for real-time data</li>
          <li>Use modern frameworks and tools</li>
          <li>Build a deployable, scalable product</li>
          <li>Reflect my growth and process as a developer</li>
        </ul>

        <h2 className="text-2xl font-bold text-gold">Tools & Stack</h2>
        <ul className="list-disc list-inside mx-5 space-y-1">
          <li><strong>Framework:</strong> Next.js 14 (App Router)</li>
          <li><strong>Styling:</strong> Tailwind CSS</li>
          <li><strong>Language:</strong> TypeScript</li>
          <li><strong>API:</strong> TMDB API</li>
          <li><strong>Deployment:</strong> Vercel</li>
          <li><strong>Logic:</strong> React hooks, conditional rendering</li>
        </ul>

        <h2 className="text-2xl font-bold text-gold">Project Phases</h2>
        <div>
          <h3 className="font-semibold">🧠 Ideation & Scoping</h3>
          <p>
            Replacing an older static app with something more dynamic and technically impressive. I
            focused on layout techniques, API normalization, and product polish.
          </p>

          <h3 className="font-semibold mt-4">🎯 MVP Planning</h3>
          <ul className="list-disc list-inside mx-5 space-y-1">
            <li>Home page with featured banner</li>
            <li>Now Playing and Top Rated rows</li>
            <li>Trailer modal</li>
            <li>Genre filtering</li>
            <li>Movie detail pages</li>
          </ul>

          <h3 className="font-semibold mt-4">🧱 Architecture & Design</h3>
          <p>
            Used a unified <code>UIMovie</code> type to normalize TMDB endpoints. Components like
            <code> MovieCard</code>, <code>TrailerModal</code>, and <code>MovieRow</code> were broken out
            for reusability.
          </p>

          <h3 className="font-semibold mt-4">🔧 Environment Setup</h3>
          <ul className="list-disc list-inside mx-5 space-y-1">
            <li>TMDB Bearer token via `.env.local`</li>
            <li>Tailwind config and layout structure</li>
            <li>Next.js `remotePatterns` for image domains</li>
          </ul>

          <h3 className="font-semibold mt-4">🧑🏾‍💻 Feature Development</h3>
          <p className="font-semibold">Highs:</p>
          <ul className="list-disc list-inside mx-5 space-y-1">
            <li>Trailer modal from TMDB’s video endpoint</li>
            <li>Randomized featured banner</li>
            <li>Clean genre filtering</li>
          </ul>
          <p className="font-semibold mt-2">Lows (and fixes):</p>
          <ul className="list-disc list-inside mx-5 space-y-1">
            <li><strong>TypeScript error on `searchParams`</strong> – removed custom PageProps</li>
            <li><strong>TMDB auth confusion</strong> – switched to Bearer token</li>
            <li><strong>Image layout issues</strong> – used `object-cover` vs `object-contain`</li>
          </ul>

          <h3 className="font-semibold mt-4">🧪 Testing & QA</h3>
          <p>
            Manual testing across devices, added fallback image logic. Automated testing scoped for a
            future iteration.
          </p>

          <h3 className="font-semibold mt-4">🧠 AI Integration</h3>
          <p>
            Used ChatGPT to clarify TMDB docs, generate components, debug TypeScript, and guide
            layout/design consistency.
          </p>

          <h3 className="font-semibold mt-4">🚀 Deployment & Hosting</h3>
          <p>
            Deployed on Vercel using optimized production build. Cleaned up types and props to silence
            Next.js warnings.
          </p>

          <h3 className="font-semibold mt-4">✨ Portfolio Polish</h3>
          <ul className="list-disc list-inside mx-5 space-y-1">
            <li>Fallback images for missing posters</li>
            <li>Responsive layout refinements</li>
            <li>TMDB attribution</li>
            <li>README with stack + contact info</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gold">Outcome</h2>
        <p>
          MoviFind is live at{' '}
          <Link
            href="https://movifind.vercel.app"
            className="underline text-sky-400 hover:text-neon"
            target="_blank"
          >
            https://movifind.vercel.app
          </Link>. This project reflects my growth into full-stack development and my ability to ship
          responsive, API-driven products with polish.
        </p>

        <h2 className="text-2xl font-bold text-gold">Next Steps</h2>
        <ul className="list-disc list-inside mx-5 space-y-1">
          <li>Add client-side search using `useSearchParams`</li>
          <li>Implement favorites/watchlist with localStorage</li>
          <li>Write unit tests for data fetchers and modal logic</li>
          <li>Add SEO metadata and social previews</li>
        </ul>

        <blockquote className="border-l-4 border-neon pl-4 italic text-yellow-200 mt-6">
          Marcus Kimber is a full-stack developer with a passion for building scalable tools and immersive
          user experiences. MoviFind reflects his commitment to growth, attention to detail, and ability to
          ship polished products using modern development workflows.
        </blockquote>
      </div>
    </section>
  )
}

