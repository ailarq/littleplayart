import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Saish's Games - Play My HTML Games",
  description: 'A collection of fun HTML games created by Saish. Play action games, puzzles, and educational games.',
  openGraph: {
    title: "Saish's Games",
    description: 'Play fun HTML games created by Saish',
    url: 'https://saish-games.netlify.app',
    images: [
      {
        url: 'https://saish-games.netlify.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
