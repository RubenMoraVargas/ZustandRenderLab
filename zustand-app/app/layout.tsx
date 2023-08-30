import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zustand + Next App',
  description: 'Small sample of use Zustand with Next.js and fetching data',
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark bg-slate-900" lang="en">
      <body className={`${inter.className} bg-slate-900`}>{children}</body>
    </html>
  )
}
