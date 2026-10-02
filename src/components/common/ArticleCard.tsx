import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../../types/content'

const categoryNames: Record<Article['category'], string> = {
  psychology: 'Psychology',
  'wealth-building': 'Wealth building',
  'money-mistakes': 'Money mistakes',
  experiments: 'Experiments',
}

export function ArticleCard({ article, featured = false, variant = 'dark' }: { article: Article; featured?: boolean; variant?: 'dark' | 'light' }) {
  return (
    <article className={`article-card ${featured ? 'article-card--featured' : ''} ${variant === 'light' ? 'light-variant' : ''}`}>
      {article.featuredImage ? (
        <img className="article-card__thumbnail" src={article.featuredImage} alt={`Thumbnail for ${article.title}`} width="1200" height="630" loading="lazy" />
      ) : (
        <img className="article-card__thumbnail" src="/og-default.svg" alt="" width="1200" height="630" loading="lazy" />
      )}
      <div className="article-card__body">
        <p className="eyebrow">{categoryNames[article.category]} <span>/</span> {article.readingTime} min read</p>
        <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" to={`/blog/${article.slug}`}>Read story <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  )
}
