import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import NavBar from '@/components/NavBar'
import Copyright from '@/components/Copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `sid12g's blog`,
  description: `sid12g's blog`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
      <NavBar />
        {children}
        <Copyright />
      </body>
    </html>
  )
}
