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
              Where I learn and create
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li> AILARQ Free Coding Camp for Kids</li>
              <li> Ballart , VIC -3350 </li>
              <li>
                <a href="https://ailarq.com/" className="text-pink-600 dark:text-pink-400 hover:underline">
                  www.ailarq.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              Made by Saish | © {currentYear} | Maintained by AILARQ
            </p>
            <p>
              <a href="https://ailarq.com/" className="text-pink-600 dark:text-pink-400 hover:underline">
                  www.ailarq.com
                </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
