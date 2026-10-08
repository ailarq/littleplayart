'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import gamesData from '../../../games.json'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const { daughter, games } = gamesData

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Photo */}
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 flex items-center justify-center text-9xl border-4 border-pink-500">
              👧
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 dark:text-pink-400 mb-4">
            {daughter.name}
          </h1>

          {/* Age */}
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Age: <span className="font-bold text-pink-600 dark:text-pink-400">{daughter.age}</span> years old
          </p>

          {/* Bio */}
          <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-8 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {daughter.bio}
            </p>
          </div>
        </div>

        {/* Interests Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
            🎮 My Interests
          </h2>
          <div className="flex flex-wrap gap-4">
            {daughter.interests.map((interest) => (
              <div
                key={interest}
                className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-6 py-3 rounded-full font-semibold text-lg"
              >
                {interest}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
            💻 My Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {daughter.skills.map((skill) => (
              <div
                key={skill}
                className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-6 py-3 rounded-full font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
            🏆 My Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-3">
                {games.length}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                Games Created
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-3">
                {daughter.skills.length}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                Programming Skills
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-3">
                ✨
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                Passion for Learning
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
            📖 My Story
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I started learning to code when I was 10 years old and fell in love with web development.
            What started as a simple curiosity has turned into a passionate hobby!
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I believe that creating games is the best way to learn programming because it combines
            creativity, logic, and problem-solving. Every game I create teaches me something new
            and pushes my skills further. I hope my games bring joy and inspiration to everyone who plays them!
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-pink-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to play my games?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Check out all the games I've created and have some fun!
          </p>
          <Link
            href="/games"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all hover:shadow-lg"
          >
            🎮 Browse All My Games
          </Link>
        </section>

        {/* Games List */}
        <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            🎮 Games I've Made
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-pink-500"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{game.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {game.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {game.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded text-xs font-semibold">
                        {game.category}
                      </span>
                      <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded text-xs font-semibold">
                        {game.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Games */}
        <div className="text-center mt-12">
          <Link
            href="/games"
            className="inline-block text-pink-600 dark:text-pink-400 font-semibold text-lg hover:underline"
          >
            ← Go back to play games
          </Link>
        </div>
      </div>
    </div>
  )
}
