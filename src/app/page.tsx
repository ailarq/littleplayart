'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import gamesData from '../../games.json'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { daughter, games } = gamesData

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const featuredGames = games.slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-7xl border-4 border-white">
                👧
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi! I'm {daughter.name}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-95">
                Welcome to my game collection! 🎮
              </p>
              <p className="text-lg mb-6 opacity-90 max-w-2xl">
                {daughter.bio}
              </p>
              <p className="text-lg mb-6 opacity-90 max-w-2xl">
                {daughter.details}
              </p>

              {/* Interests */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                {daughter.interests.map((interest) => (
                  <span
                    key={interest}
                    className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm md:text-base border border-white border-opacity-40"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/games"
                className="inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all text-lg"
              >
                Play My Games → 🎮
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            What's Inside?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            I've created {games.length} fun games ranging from action-packed challenges to brain-teasing puzzles.
            Each game is made from scratch with HTML, CSS, and JavaScript. Click on any game to play!
          </p>

          {/* Featured Games */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredGames.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="group p-8 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {game.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {game.description}
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-medium">
                    {game.category}
                  </span>
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-medium">
                    {game.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                  {games.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">Games Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                  {daughter.skills.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">Skills</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                  {daughter.age}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">Years Old</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-50 dark:bg-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to play? 🎮
          </h2>
          <Link
            href="/games"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all hover:shadow-lg"
          >
            Browse All Games
          </Link>
        </div>
      </section>
    </div>
  )
}
