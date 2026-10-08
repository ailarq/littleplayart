'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              👾 Saish's Games
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A collection of fun and interactive games created by Saish using HTML, CSS, and JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-pink-600 dark:text-pink-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/games" className="text-pink-600 dark:text-pink-400 hover:underline">
                  Play Games
                </a>
              </li>
              <li>
                <a href="/about" className="text-pink-600 dark:text-pink-400 hover:underline">
                  About Saish
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Built With
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>✨ Next.js & React</li>
              <li>🎨 Tailwind CSS</li>
              <li>🚀 Deployed on Netlify</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              Made with ❤️ by Saish | © {currentYear}
            </p>
            <p>
              Created with HTML, CSS, and JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
