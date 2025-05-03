export default function CTA() {
  return (
    <section className="mt-20 bg-gold text-black py-12 px-6 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Check Out My Developer/Leadership Blog</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        <strong>Code. Coach. Culture.</strong> is where I break down what it
        really means to grow in tech—not just in code, but as a leader and human
        too. If you care about clean builds, real strategy, and mindset shifts,
        this is for you.
      </p>
      <a
        href="https://code-coach-culture.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-gold px-6 py-3 rounded hover:brightness-90 transition"
      >
        🚀 Visit Code.Coach.Culture
      </a>
    </section>
  );
}
