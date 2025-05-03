"use client"

'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.section
      className="text-center space-y-6 mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-funky text-neon"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hey, I’m MarcDevCEO.
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I build dope, user-focused web apps with modern stacks and clean vibes. Whether you’re a recruiter or a future client, take a look around—this is where engineering meets energy.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <a
          href="/projects"
          className="bg-neon text-black font-bold py-2 px-4 rounded hover:brightness-90 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="border border-neon text-neon py-2 px-4 rounded hover:bg-neon hover:text-black transition"
        >
          About Me
        </a>
        <a
          href="mailto:marcdevceo@gmail.com"
          className="text-sky underline hover:text-neon transition"
        >
          Email Me
        </a>
      </motion.div>
    </motion.section>
  )
}
