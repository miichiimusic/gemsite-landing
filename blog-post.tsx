import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import { MobileMenu } from "./components/mobile-menu"
import { getBlogPost, getRelatedPosts } from "./lib/blog-utils"
import { notFound } from "next/navigation"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(slug, 3)

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
        {/* Back Navigation */}
        <section className="w-full py-6 border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                  {post.category}
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Related Articles</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.slug}
                      className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                            {relatedPost.category}
                          </Badge>

                          <h3 className="text-xl font-semibold text-slate-900 line-clamp-2">{relatedPost.title}</h3>

                          <p className="text-slate-600 line-clamp-3">{relatedPost.excerpt}</p>

                          <Link href={`/blog/${relatedPost.slug}`}>
                            <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                              Read More →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
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
