export type CategorySlug = 'psychology' | 'wealth-building' | 'money-mistakes' | 'experiments'

export interface Author {
  id: string
  name: string
  role: string
  avatar?: string
}

export interface SEO {
  title: string
  description: string
  image?: string
}

export type ArticleContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface Article {
  id: string
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: CategorySlug
  tags: string[]
  publishedAt: string
  updatedAt?: string
  author: Author
  featuredImage?: string
  youtubeVideoId?: string
  readingTime: number
  content: string | ArticleContentBlock[]
  keyTakeaway: string
  relatedArticles: string[]
  seo: SEO
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail?: string
  duration?: string
}
