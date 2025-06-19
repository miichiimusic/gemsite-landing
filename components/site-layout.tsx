import { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header with softer, slightly larger shadow */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white/80 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.08)] sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="font-bold text-3xl">gemsite</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex gap-6">
            <Link href="/" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
              About
            </Link>
            <Link href="/partnership" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
              Partnership
            </Link>
            <Link href="/blog" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
              Blog
            </Link>
            <Link href="/contact" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
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

          <MobileMenu currentPage="home" />
        </div>
      </header>

      {/* Main content */}
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