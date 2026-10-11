'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import gamesData from '../../../games.json'

const CATEGORIES = ['All', 'Creative', 'Music', 'Educational', 'Social', 'Adventure', 'Strategy']

export default function GamesPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { games } = gamesData

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const filteredGames = selectedCategory === 'All'
    ? games
    : games.filter(game => game.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4">
            🎮 Choose a Game to Play
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click on any game icon to start playing!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 hover:bg-pink-100 dark:hover:bg-pink-900'
              }`}
            >
              {category === 'All' ? '🎮 All Games' : `${category}`}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group text-center"
            >
              {/* Game Card */}
              <div className="h-full rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Icon Circle */}
                <div className="w-full h-40 bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 flex items-center justify-center rounded-t-lg border-b-4 border-pink-200 dark:border-pink-700 group-hover:border-pink-500 transition-colors">
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {game.icon}
                  </span>
                </div>

                {/* Game Info */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-b-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-semibold">
                      {game.difficulty}
                    </span>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-semibold">
                      ⏱️ {game.playTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Games Message */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No games found in {selectedCategory} category
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
