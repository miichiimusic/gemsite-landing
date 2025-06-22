"use client"

import { ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const headerClasses = `
    sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300
    ${scrolled ? "bg-white/80 shadow-lg" : "bg-transparent"}
  `

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className={headerClasses}>
        <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-3xl">gemsite</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex gap-6">
              <Link
                href="/"
                className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800"
              >
                About
              </Link>
              <Link
                href="/partnership"
                className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800"
              >
                Partnership
              </Link>
              <Link
                href="/blog"
                className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/get-started" className="hidden md:block">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Get Started
              </Button>
            </Link>
            <MobileMenu currentPage="" />
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Gemsite. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}