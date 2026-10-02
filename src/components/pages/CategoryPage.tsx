import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { articles } from '../../data/articles'
import { ArticleCard } from '../common/ArticleCard'

const categoryInfo: Record<string, { title: string; description: string; emoji: string }> = {
  psychology: {
    title: 'Psychology',
    description: 'Explore the hidden biases and mental traps that shape your money choices.',
    emoji: 'Ψ',
  },
  'wealth-building': {
    title: 'Wealth Building',
    description: 'Learn the strategies and systems that make long-term growth possible.',
    emoji: '↗',
  },
  'money-mistakes': {
    title: 'Money Mistakes',
    description: 'Real stories about costly decisions and the lessons that save you years.',
    emoji: '⚠',
  },
  experiments: {
    title: 'Experiments',
    description: 'Behavioral finance challenges and real-world tests for your habits.',
    emoji: '∆',
  },
}

export function CategoryPage() {
  const location = useLocation()
  const categoryKey = location.pathname.slice(1) as keyof typeof categoryInfo
  const info = categoryInfo[categoryKey]
  const categoryArticles = articles.filter((a) => a.category === categoryKey)

  if (!info) {
    return (
      <main className="placeholder-page">
        <p className="kicker">Finance Discipline</p>
        <h1>Category not found</h1>
        <p>This category doesn't exist. Check back soon for more content.</p>
        <Link className="button button--primary" to="/">
          Return home <ArrowRight size={16} />
        </Link>
      </main>
    )
  }

  return (
    <main>
      {/* Dark Hero Section */}
      <section className="category-hero">
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <p className="kicker">{categoryKey.toUpperCase()}</p>
          <h1>{info.title}</h1>
          <p className="hero-description" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {info.description}
          </p>
        </div>
      </section>

      {/* Light Content Discovery Section */}
      <section className="category-grid">
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <div className="section-heading">
            <div>
              <p className="kicker">The stories</p>
              <h2>Explore {info.title.toLowerCase()}</h2>
            </div>
          </div>
          <div className="story-grid">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Dark Newsletter CTA */}
      <section className="newsletter-band">
        <div className="site-header__inner">
          <div>
            <p className="kicker">Deepen your knowledge</p>
            <h2>
              Build discipline
              <br />
              <em>one decision at a time.</em>
            </h2>
          </div>
          <div>
            <p>One thoughtful note each week on the psychology, systems, and stories behind better money decisions.</p>
            <Link className="button button--primary" to="/newsletter">
              Join the newsletter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
