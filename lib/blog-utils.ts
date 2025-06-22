// Blog post type definition
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  author: string
}

// Get all blog posts sorted by date (newest first)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogPosts: BlogPost[] = []

  try {
    // Webpack-compatible dynamic import
    const context = require.context("../blog-posts", false, /\.ts$/)

    context.keys().forEach((key) => {
      const module = context(key)
      const blogPost = module.default as BlogPost
      if (blogPost && blogPost.slug) {
        blogPosts.push(blogPost)
      }
    })

    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

// Get related blog posts (excluding current post)
export async function getRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}