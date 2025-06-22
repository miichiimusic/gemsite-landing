// app/layout.tsx
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'

// 1. Load the Google font and map it to a CSS variable
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Gemsite',
  description: 'Launch your own luxury, made-to-order jewelry brand',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      {/* 2. Apply font-sans globally via Tailwind */}
      <body className="font-sans">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}