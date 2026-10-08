'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import gamesData from '../../../../games.json'

export default function GamePage() {
  const params = useParams()
  const gameId = params.gameId as string
  const { games } = gamesData

  const game = games.find(g => g.id === gameId)
  const relatedGames = games.filter(g => g.category === game?.category && g.id !== gameId).slice(0, 3)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Game Not Found</h1>
          <Link href="/games" className="text-pink-600 hover:text-pink-700 font-semibold">
            ← Back to Games
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-5xl mr-3">{game.icon}</span>
            <span className="text-gray-900 dark:text-white">{game.title}</span>
          </h1>
        </div>

        {/* Game Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Game Player Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`/games/${gameId}/index.html`}
                title={game.title}
                className="w-full h-96 sm:h-[600px] border-none"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              Use keyboard, mouse, or touch to play the game
            </p>
          </div>

          {/* Game Details Sidebar */}
          <div className="space-y-6">
            {/* Details Card */}
            <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-pink-600">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Game Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-start pb-3 border-b border-pink-200 dark:border-pink-700">
                  <span className="font-semibold text-pink-600 dark:text-pink-400">Category</span>
                  <span className="text-gray-700 dark:text-gray-300">{game.category}</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-pink-200 dark:border-pink-700">
                  <span className="font-semibold text-pink-600 dark:text-pink-400">Difficulty</span>
                  <span className="text-gray-700 dark:text-gray-300">{game.difficulty}</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-pink-200 dark:border-pink-700">
                  <span className="font-semibold text-pink-600 dark:text-pink-400">Play Time</span>
                  <span className="text-gray-700 dark:text-gray-300">{game.playTime}</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-pink-200 dark:border-pink-700">
                  <span className="font-semibold text-pink-600 dark:text-pink-400">Created</span>
                  <span className="text-gray-700 dark:text-gray-300">{new Date(game.date).toLocaleDateString()}</span>
                </div>

                <div className="pt-2">
                  <p className="font-semibold text-pink-600 dark:text-pink-400 mb-2">About This Game</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              <Link
                href="/games"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-all"
              >
                ← Back to Games
              </Link>
              <Link
                href="/"
                className="block w-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-900 dark:text-white font-bold py-3 px-4 rounded-lg text-center transition-all"
              >
                🏠 Home
              </Link>
            </div>
          </div>
        </div>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              More {game.category} Games
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedGames.map((related) => (
                <Link
                  key={related.id}
                  href={`/games/${related.id}`}
                  className="group p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all"
                >
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                    {related.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {related.description.substring(0, 60)}...
                  </p>
                  <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {related.difficulty}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
