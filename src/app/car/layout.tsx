import type { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import Nav from '../../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wheel World',
  description: 'Find your perfect ride at Wheel World!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <Nav />
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
