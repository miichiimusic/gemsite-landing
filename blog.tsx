import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MobileMenu } from "./components/mobile-menu"
import { getAllBlogPosts } from "./lib/blog-utils"

export default async function Blog() {
  const blogPosts = await getAllBlogPosts()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="font-bold text-2xl">gemsite</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex gap-6">
            <Link href="/" className="font-medium hover:text-indigo-600 transition-colors text-base text-slate-800">
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
            <Link href="/blog" className="font-medium text-indigo-600 text-base">
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

          <MobileMenu currentPage="blog" />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                  Insights & Expertise
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  Jewelry Industry Blog
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Expert insights, industry trends, and success stories from the world of luxury jewelry and creator
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-slate-500">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 line-clamp-2">{post.title}</h3>

                      <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">By {post.author}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-sm text-slate-500">{post.date}</span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                            Read More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

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
