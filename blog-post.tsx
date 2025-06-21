import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-utils"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()
  const relatedPosts = await getRelatedPosts(params.slug, 3)

  return (
    <SiteLayout>
      <main className="flex-1">

        {/* Back Navigation */}
        <section className="w-full py-4 border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto space-y-4">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                {post.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>By {post.author}</span></div>
                <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><span>{post.date}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-6 md:py-8">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-8 md:py-12 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Card key={rp.slug} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
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