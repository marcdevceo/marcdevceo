import React from 'react'
import Tagline from './Tagline'

export default function Footer() {
  return (
    <footer className="bg-graphite text-gray-300 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <p className="text-lg font-semibold text-neon">MarcDevCEO</p>
          <Tagline />
        </div>

        <div className="flex sm:flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="mailto:marcdevceo@gmail.com" className="hover:text-neon transition">
            📧 Email Me
          </a>
          <a
            href="/marcus_kimber_tech_resume.pdf"
            download
            className="hover:text-neon transition"
          >
            📄 Resume
          </a>
          <a
            href="https://github.com/marcdevceo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon transition"
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
