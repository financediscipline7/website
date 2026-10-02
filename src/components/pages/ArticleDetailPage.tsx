import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../../data/articles'
import type { ArticleContentBlock } from '../../types/content'
import { ArticleCard } from '../common/ArticleCard'

function getHeadingId(text: string, index: number) {
  const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')
  return `section-${slug}-${index}`
}

function renderContentBlock(block: ArticleContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={index}>{block.text}</p>
    case 'heading': {
      const Heading = `h${block.level}` as const
      return <Heading id={getHeadingId(block.text, index)} key={index}>{block.text}</Heading>
    }
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <List key={index}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </List>
      )
    }
    case 'quote':
      return <blockquote key={index}>{block.text}</blockquote>
    case 'callout':
      return (
        <aside className="insight-block" key={index}>
          <h4>{block.title}</h4>
          <p>{block.text}</p>
        </aside>
      )
    case 'table':
      return (
        <div className="article-table-wrap" key={index} role="region" aria-label="Example budget allocation" tabIndex={0}>
          <table className="article-table">
            <thead>
              <tr>{block.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, cellIndex) => cellIndex === 0
                    ? <th scope="row" key={cellIndex}>{cell}</th>
                    : <td key={cellIndex}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)
  const [readingProgress, setReadingProgress] = useState(0)
  const [copyStatus, setCopyStatus] = useState('')

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setReadingProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [slug])

  if (!article) {
    return (
      <main className="placeholder-page">
        <p className="kicker">Finance Discipline</p>
        <h1>Article not found</h1>
        <p>This story doesn't exist yet. Check back soon for more content.</p>
        <Link className="button button--primary" to="/">
          Return home <ArrowRight size={16} />
        </Link>
      </main>
    )
  }

  const relatedArticles = article.relatedArticles
    .map((id) => articles.find((candidate) => candidate.id === id))
    .filter((candidate) => candidate !== undefined)
    .slice(0, 3)
  const nextArticle = articles.find((candidate) => candidate.id !== article.id && !article.relatedArticles.includes(candidate.id))
  const categoryName = article.category === 'wealth-building'
    ? 'Wealth building'
    : article.category.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' ')
  const contentBlocks = Array.isArray(article.content) ? article.content : []
  const contents = contentBlocks.flatMap((block, index) => block.type === 'heading'
    ? [{ id: getHeadingId(block.text, index), text: block.text }]
    : [])
  const hasVideo = article.youtubeVideoId && /^[\w-]{11}$/.test(article.youtubeVideoId)
  const videoUrl = hasVideo
    ? `https://www.youtube.com/watch?v=${article.youtubeVideoId}`
    : (import.meta.env.VITE_YOUTUBE_CHANNEL_URL || 'https://www.youtube.com/@REPLACE_WITH_CHANNEL')
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://website-orpin-mu-94.vercel.app').replace(/\/+$/, '')
  const shareUrl = encodeURIComponent(`${siteUrl}/blog/${article.slug}`)

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(`${siteUrl}/blog/${article.slug}`)
      setCopyStatus('Link copied')
    } catch {
      setCopyStatus('Could not copy link; use your browser address bar.')
    }
  }

  return (
    <main className="article-page">
      <div className="article-progress" role="progressbar" aria-label="Article reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(readingProgress)}>
        <span style={{ width: `${readingProgress}%` }} />
      </div>
      {/* Dark Hero Section */}
      <section className="article-hero">
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <div className="article-meta">
            {categoryName} / {article.readingTime} min read
          </div>
          <h1>{article.title}</h1>
          <p className="hero-description">{article.excerpt}</p>
        </div>
      </section>

      {/* Light Reading Area */}
      <article className="article-content">
        {contents.length > 0 && (
          <nav className="article-toc" aria-label="Table of contents">
            <h2>In this article</h2>
            <ol>{contents.map(({ id, text }) => <li key={id}><a href={`#${id}`}>{text}</a></li>)}</ol>
          </nav>
        )}
        {typeof article.content === 'string'
          ? <p>{article.content}</p>
          : article.content.map(renderContentBlock)}
        <div className="article-share" aria-label="Share this article">
          <span>Share this story</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer">Facebook</a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">X</a>
          <button type="button" onClick={copyArticleLink}>Copy link</button>
          {copyStatus && <span role="status">{copyStatus}</span>}
        </div>
        <aside className="insight-block article-takeaway">
          <h4>Key takeaway</h4>
          <p>{article.keyTakeaway}</p>
        </aside>
      </article>

      <section className="article-video">
        <div className="site-header__inner" style={{ maxWidth: 'var(--article-width)' }}>
          <p className="kicker">Watch on YouTube</p>
          <h2>Take the ideas further</h2>
          {hasVideo
            ? <div className="article-video__frame"><iframe src={`https://www.youtube-nocookie.com/embed/${article.youtubeVideoId}`} title={`Related video: ${article.title}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            : <p className="video-placeholder">Add this article’s YouTube video ID in <code>src/data/articles.ts</code> to enable its embed.</p>}
          <a className="button button--primary" href={videoUrl} target="_blank" rel="noreferrer">Watch on YouTube <ArrowRight size={16} /></a>
        </div>
      </section>

      {/* Dark Final CTA / Insight Section */}
      <section className="newsletter-band" style={{ marginTop: '80px' }}>
        <div className="site-header__inner">
          <div>
            <p className="kicker">Ready for more insights?</p>
            <h2>
              Deepen your
              <em>financial wisdom</em>
            </h2>
          </div>
          <div>
            <p>Join hundreds of people learning to make better money decisions every week.</p>
            <Link className="button button--primary" to="/newsletter">
              Join the newsletter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-light">
          <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
            <div className="section-heading">
              <div>
                <p className="kicker">Continue reading</p>
                <h2>Related stories</h2>
              </div>
              <Link className="text-link" to="/blog">
                View all stories <ArrowRight size={15} />
              </Link>
            </div>
            <div className="story-grid">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.id} article={a} variant="light" />
              ))}
            </div>
          </div>
        </section>
      )}
      {nextArticle && (
        <section className="section-light read-next">
          <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
            <p className="kicker">Read next</p>
            <ArticleCard article={nextArticle} variant="light" />
          </div>
        </section>
      )}
    </main>
  )
}
