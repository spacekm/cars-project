import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Nav from '../../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wheel World',
  description: 'Find your perfect ride at Wheel World!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
