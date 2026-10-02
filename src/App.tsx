import { ArrowRight, Brain, ChartNoAxesCombined, CircleDollarSign, FlaskConical, Play, Target } from 'lucide-react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ArticleCard } from './components/common/ArticleCard'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AboutPage } from './components/pages/AboutPage'
import { ArticleDetailPage } from './components/pages/ArticleDetailPage'
import { CategoryPage } from './components/pages/CategoryPage'
import { LegalPage } from './components/pages/LegalPage'
import { NewsletterPage } from './components/pages/NewsletterPage'
import { ToolsPage } from './components/pages/ToolsPage'
import { articles } from './data/articles'
import './App.css'

function HomePage() {
  const pillars = [{ icon: Brain, label: 'Psychology', text: 'Understand the forces behind your choices.' }, { icon: ChartNoAxesCombined, label: 'Strategies', text: 'Build systems that work when motivation fades.' }, { icon: Target, label: 'Discipline', text: 'Create habits that compound over time.' }, { icon: CircleDollarSign, label: 'Freedom', text: 'Design a life on your own terms.' }]
  const topics = [{ icon: Brain, title: 'Psychology', copy: 'Explore the hidden biases and mental traps that shape your money choices.', href: '/psychology' }, { icon: ChartNoAxesCombined, title: 'Wealth building', copy: 'Learn the strategies and systems that make long-term growth possible.', href: '/wealth-building' }, { icon: CircleDollarSign, title: 'Money mistakes', copy: 'Real stories about costly decisions and the lessons that save you years.', href: '/money-mistakes' }, { icon: FlaskConical, title: 'Experiments', copy: 'Behavioral finance challenges and real-world tests for your habits.', href: '/experiments' }]
  const featuredArticle = articles[0]
  
  return <>
    <section className="hero-section"><div className="hero-copy"><p className="kicker">Behavioral finance / Human stories / Better decisions</p><h1>Understand your mind.<br /><em>Master your money.</em></h1><p className="hero-description">We blend behavioral finance, storytelling, and interactive learning to help you make better money decisions, consistently.</p><div className="hero-actions"><Link className="button button--primary" to="/blog"><Play size={16} fill="currentColor" /> Latest Video</Link><Link className="button button--ghost" to="/blog">Browse Articles <ArrowRight size={16} /></Link></div><div className="pillars">{pillars.map(({ icon: Icon, label, text }) => <div className="pillar" key={label}><Icon size={25} /><div><strong>{label}</strong><span>{text}</span></div></div>)}</div></div><div className="hero-visual" aria-label="Abstract illustration of a growing market"><div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-bars"><i /><i /><i /><i /><i /><i /></div><div className="visual-arrow">↗</div><div className="visual-label">THE LONG<br />GAME</div></div></section>
    <section className="explore-section"><div className="site-header__inner" style={{maxWidth: 'var(--max-width)'}}><div className="section-heading"><div><p className="kicker">The library</p><h2>Explore what matters.</h2></div><Link className="text-link" to="/blog">View all stories <ArrowRight size={15} /></Link></div><div className="topic-grid">{topics.map(({ icon: Icon, title, copy, href }) => <Link className="topic-card" to={href} key={title}><Icon size={32} /><div><h3>{title}</h3><p>{copy}</p><span>Explore <ArrowRight size={14} /></span></div></Link>)}</div></div></section>
    
    <section className="featured-story"><div className="site-header__inner" style={{maxWidth: 'var(--max-width)'}}><div className="featured-story__content"><p className="kicker">Featured</p><h2>{featuredArticle.title}</h2><p>{featuredArticle.excerpt}</p><Link className="button button--primary" to={`/blog/${featuredArticle.slug}`}>Read the story <ArrowRight size={16} /></Link></div></div></section>
    
    <section className="stories-section"><div className="site-header__inner" style={{maxWidth: 'var(--max-width)'}}><div className="section-heading"><div><p className="kicker">From the journal</p><h2>Latest articles</h2></div><Link className="text-link" to="/blog">Read the journal <ArrowRight size={15} /></Link></div><div className="story-grid">{articles.slice(0, 3).map((article) => <ArticleCard key={article.id} article={article} variant="light" />)}</div></div></section>
    
    <section className="newsletter-band"><div className="site-header__inner" style={{maxWidth: 'var(--max-width)', gridColumn: '1 / -1'}}><div><p className="kicker">A better relationship with money</p><h2>Build discipline<br /><em>one decision at a time.</em></h2></div><div><p>One thoughtful note each week on the psychology, systems, and stories behind better money decisions.</p><Link className="button button--primary" to="/newsletter">Join the newsletter <ArrowRight size={16} /></Link></div></div></section>
  </>
}

function PlaceholderPage({ title }: { title: string }) { return <main className="placeholder-page"><p className="kicker">Finance Discipline</p><h1>{title}</h1><p>This part of the journal is taking shape. Check back soon for stories, tools, and experiments.</p><Link className="button button--primary" to="/">Return home <ArrowRight size={16} /></Link></main> }
function BlogPage() { return <main className="content-page"><p className="kicker">The journal</p><h1>Stories for the<br /><em>long game.</em></h1><div className="story-grid">{articles.map((article) => <ArticleCard key={article.id} article={article} />)}</div></main> }

function App() { return <BrowserRouter><SiteHeader /><Routes><Route path="/" element={<main><HomePage /></main>} /><Route path="/blog" element={<BlogPage />} /><Route path="/blog/:slug" element={<ArticleDetailPage />} /><Route path="/psychology" element={<CategoryPage />} /><Route path="/wealth-building" element={<CategoryPage />} /><Route path="/money-mistakes" element={<CategoryPage />} /><Route path="/experiments" element={<CategoryPage />} /><Route path="/tools" element={<ToolsPage />} /><Route path="/tools/:id" element={<PlaceholderPage title="Tool experience coming soon." />} /><Route path="/about" element={<AboutPage />} /><Route path="/newsletter" element={<NewsletterPage />} /><Route path="/privacy" element={<LegalPage type="privacy" />} /><Route path="/terms" element={<LegalPage type="terms" />} /><Route path="/disclaimer" element={<LegalPage type="disclaimer" />} /><Route path="*" element={<PlaceholderPage title="Page not found." />} /></Routes><SiteFooter /></BrowserRouter> }

export default App
