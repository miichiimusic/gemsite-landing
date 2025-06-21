import { getBlogPost, getRelatedPosts } from "@/lib/blog-utils"
import SiteLayout from "@/components/site-layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BlogPostPage(props: { params: { slug: string } }) {
  const { slug } = await props.params

  const post = await getBlogPost(slug)
  if (!post) return notFound()

  const relatedPosts = await getRelatedPosts(slug, 3)

  return (
    <SiteLayout>
      <article className="max-w-3xl mx-auto px-4 py-12">

        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 px-0">
              ← Back to Blog
            </Button>
          </Link>
        </div>

        {/* Post Header */}
        <div className="mb-6">
          <Badge variant="outline" className="text-indigo-600 border-indigo-200 mb-2">
            {post.category}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
            {post.title}
          </h1>

          <p className="text-sm text-slate-500">
            By {post.author} • {post.date}
          </p>
        </div>

        {/* Blog Content */}
        <div className="prose prose-neutral max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Card key={related.slug} className="bg-white border border-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-5 space-y-4">
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                    {related.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900">{related.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3">{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`}>
                    <Button variant="link" size="sm" className="text-indigo-600 px-0">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  )
}