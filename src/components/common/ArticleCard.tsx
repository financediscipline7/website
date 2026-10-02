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
      <div className="article-art" aria-hidden="true"><span>{featured ? '01' : article.category === 'psychology' ? 'Ψ' : '↗'}</span></div>
      <div className="article-card__body">
        <p className="eyebrow">{categoryNames[article.category]} <span>/</span> {article.readingTime} min read</p>
        <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" to={`/blog/${article.slug}`}>Read story <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  )
}
