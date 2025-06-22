"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  currentPage?: string
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Animated Hamburger/X Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-slate-100 rounded-md transition-colors relative w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={closeMenu} />

          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bg-slate-50 border-b border-slate-200 shadow-lg z-50 md:hidden">
            <div className="px-6 py-6">
              <nav className="space-y-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`block text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors ${
                    currentPage === "home" ? "text-indigo-600" : ""
                  }`}
                >
                  HOME
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className={`block text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors ${
                    currentPage === "about" ? "text-indigo-600" : ""
                  }`}
                >
                  ABOUT
                </Link>

                <Link
                  href="/partnership"
                  onClick={closeMenu}
                  className={`block text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors ${
                    currentPage === "partnership" ? "text-indigo-600" : ""
                  }`}
                >
                  PARTNERSHIP
                </Link>

                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className={`block text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors ${
                    currentPage === "blog" ? "text-indigo-600" : ""
                  }`}
                >
                  BLOG
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`block text-xl font-semibold text-slate-800 hover:text-indigo-600 transition-colors ${
                    currentPage === "contact" ? "text-indigo-600" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </nav>

              {/* Get Started Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link href="/get-started" onClick={closeMenu}>
                  <Button
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3 rounded-xl font-semibold"
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
