import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'M-ta\'lim — Mustaqil ta\'lim platformasi',
    template: '%s | M-ta\'lim',
  },
  description:
    "Mustaqil ta'lim platformasi. Raqamli texnologiyalar va innovatsiyalar bo'yicha 15 mavzu, video darslar, ma'ruzalar va testlar.",
  keywords: ['M-ta\'lim', 'mustaqil ta\'lim', 'raqamli texnologiyalar', 'online kurs', "ta'lim", "o'zbek"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-text-primary min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
