// app/blog/page.tsx

import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getAllBlogPosts } from "@/lib/blog-utils"

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()

  return (
    <SiteLayout>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
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
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 line-clamp-2">{post.title}</h3>
                      <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">By {post.author}</span>
                          <span className="text-slate-300">•</span>
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
    </SiteLayout>
  )
}