'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Me' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="m-5">
      <div className="grid grid-cols-3 text-sm sm:text-lg gap-6 justify-center max-w-4xl mx-auto">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'border rounded-lg bg-primetime text-gray-800 text-center flex items-center justify-center p-4 font-bold transition-colors',
              'hover:brightness-90',
              pathname === href && 'underline text-gray-500'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}  
