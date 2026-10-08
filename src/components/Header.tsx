'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white dark:bg-gray-800 border-b-4 border-pink-500 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">👾</span>
            <span className="hidden sm:inline text-xl font-bold text-pink-600 dark:text-pink-400">
              Saish's Games
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-semibold transition-all ${
                isActive('/')
                  ? 'text-pink-600 dark:text-pink-400'
                  : 'text-gray-900 dark:text-gray-50 hover:text-pink-600 dark:hover:text-pink-400'
              }`}
            >
              🏠 HOME
            </Link>
            <Link
              href="/games"
              className={`font-semibold transition-all ${
                isActive('/games')
                  ? 'text-pink-600 dark:text-pink-400'
                  : 'text-gray-900 dark:text-gray-50 hover:text-pink-600 dark:hover:text-pink-400'
              }`}
            >
              🎮 PLAY GAMES
            </Link>
            <Link
              href="/about"
              className={`font-semibold transition-all ${
                isActive('/about')
                  ? 'text-pink-600 dark:text-pink-400'
                  : 'text-gray-900 dark:text-gray-50 hover:text-pink-600 dark:hover:text-pink-400'
              }`}
            >
              👧 ABOUT SAISH
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-gray-50 hover:text-pink-600 dark:hover:text-pink-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-900 dark:text-gray-50 hover:bg-pink-100 dark:hover:bg-pink-900 rounded font-semibold"
              onClick={() => setIsOpen(false)}
            >
              🏠 HOME
            </Link>
            <Link
              href="/games"
              className="block px-4 py-2 text-gray-900 dark:text-gray-50 hover:bg-pink-100 dark:hover:bg-pink-900 rounded font-semibold"
              onClick={() => setIsOpen(false)}
            >
              🎮 PLAY GAMES
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-900 dark:text-gray-50 hover:bg-pink-100 dark:hover:bg-pink-900 rounded font-semibold"
              onClick={() => setIsOpen(false)}
            >
              👧 ABOUT SAISH
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
