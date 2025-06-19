import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-utils"
import { notFound } from "next/navigation"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) notFound()
  const relatedPosts = await getRelatedPosts(slug, 3)

  return (
    <SiteLayout>
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
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                {post.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>By {post.author}</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{post.date}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{post.readTime}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="w-full">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl shadow-lg">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-12 md:py-24 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((rp) => (
                  <Card key={rp.slug} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img src={rp.image || "/placeholder.svg"} alt={rp.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                        {rp.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-slate-900 line-clamp-2">{rp.title}</h3>
                      <p className="text-slate-600 line-clamp-3">{rp.excerpt}</p>
                      <Link href={`/blog/${rp.slug}`}>
                        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                          Read More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteLayout>
  )
}