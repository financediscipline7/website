import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { articles } from '../../data/articles'

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://website-orpin-mu-94.vercel.app').replace(/\/+$/, '')
const defaultImage = `${siteUrl}/og-default.svg`

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Finance Discipline | Money Habits & Psychology',
    description: 'Build better money habits with behavioral finance, practical budgeting ideas, and psychology-backed strategies for saving, investing, and making intentional financial decisions.',
  },
  '/blog': {
    title: 'Personal Finance & Money Psychology Articles | Finance Discipline',
    description: 'Explore practical articles on money habits, budgeting, investing psychology, lifestyle inflation, and building stronger financial routines.',
  },
  '/psychology': {
    title: 'Money Psychology & Behavioral Finance | Finance Discipline',
    description: 'Explore how behavioral biases, emotions, and habits shape everyday money decisions—and learn practical ways to make more intentional choices.',
  },
  '/wealth-building': {
    title: 'Wealth-Building Strategies & Habits | Finance Discipline',
    description: 'Discover practical saving, investing, budgeting, and long-term wealth-building ideas grounded in better financial habits.',
  },
  '/money-mistakes': {
    title: 'Common Money Mistakes and How to Avoid Them | Finance Discipline',
    description: 'Understand common money mistakes, lifestyle inflation, and behavioral traps—and find practical ways to make more deliberate financial decisions.',
  },
  '/experiments': {
    title: 'Money Habit Experiments | Finance Discipline',
    description: 'Try behavioral finance experiments and practical challenges designed to help you understand and improve your money habits.',
  },
  '/tools': {
    title: 'Financial Behavior Tools & Resources | Finance Discipline',
    description: 'Explore interactive tools for understanding money biases, making considered decisions, and learning about long-term financial habits.',
  },
  '/tools/bias-detector': {
    title: 'Behavioral Bias Detector | Finance Discipline',
    description: 'Reflect on the psychological patterns that may influence your financial decisions with the Finance Discipline behavioral bias detector.',
  },
  '/tools/investment-tool': {
    title: 'Investment Decision Tool | Finance Discipline',
    description: 'Use a structured behavioral finance framework to reflect on investment decisions, goals, and common decision-making biases.',
  },
  '/tools/panic-tree': {
    title: 'Panic Decision Tree | Finance Discipline',
    description: 'Use a practical question framework to slow down and review money decisions during stressful market conditions.',
  },
  '/tools/compound-viz': {
    title: 'Compound Interest Visualizer | Finance Discipline',
    description: 'Explore hypothetical compound-growth scenarios and see how time and regular contributions can affect long-term savings.',
  },
  '/about': {
    title: 'About Finance Discipline | Better Money Decisions',
    description: 'Learn about Finance Discipline, a behavioral finance resource focused on the psychology, systems, and habits behind better money decisions.',
  },
  '/contact': {
    title: 'Contact Finance Discipline',
    description: 'Contact Finance Discipline with questions, feedback, or partnership inquiries about behavioral finance and money habits.',
  },
  '/newsletter': {
    title: 'Finance Discipline Newsletter | Better Money Habits',
    description: 'Get thoughtful weekly notes on behavioral finance, practical money systems, and habits for making more intentional financial decisions.',
  },
  '/privacy': {
    title: 'Privacy Policy | Finance Discipline',
    description: 'Read the Finance Discipline privacy policy and learn how information may be handled when you use this website.',
  },
  '/terms': {
    title: 'Terms of Service | Finance Discipline',
    description: 'Review the terms and conditions for using the Finance Discipline website and its educational content.',
  },
  '/disclaimer': {
    title: 'Financial Education Disclaimer | Finance Discipline',
    description: 'Read the Finance Discipline educational content disclaimer. Articles are general information, not personal financial or investment advice.',
  },
}

function jsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function SEOHead() {
  const { pathname } = useLocation()
  const article = pathname.startsWith('/blog/')
    ? articles.find((item) => item.slug === pathname.slice('/blog/'.length).replace(/\/$/, ''))
    : undefined
  const page = article
    ? {
        title: article.seo.title,
        description: article.seo.description,
      }
    : pageMetadata[pathname]
  const title = page?.title ?? 'Page not found | Finance Discipline'
  const description = page?.description ?? 'The page you requested could not be found on Finance Discipline.'
  const canonicalUrl = `${siteUrl}${pathname}`
  const image = article?.featuredImage
    ? new URL(article.featuredImage, `${siteUrl}/`).href
    : defaultImage
  const structuredData = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.seo.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        author: { '@type': 'Organization', name: article.author.name },
        publisher: {
          '@type': 'Organization',
          name: 'Finance Discipline',
          url: siteUrl,
          logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        image,
      }
    : pathname === '/'
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': `${siteUrl}/#organization`,
              name: 'Finance Discipline',
              url: siteUrl,
              logo: `${siteUrl}/favicon.svg`,
              sameAs: ['https://www.youtube.com/@REPLACE_WITH_CHANNEL'],
            },
            {
              '@type': 'WebSite',
              '@id': `${siteUrl}/#website`,
              name: 'Finance Discipline',
              url: siteUrl,
              publisher: { '@id': `${siteUrl}/#organization` },
              inLanguage: 'en',
            },
          ],
        }
      : undefined

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#020817" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Finance Discipline" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {article && <meta property="article:published_time" content={article.publishedAt} />}
      {!page && !article && <meta name="robots" content="noindex,follow" />}
      {structuredData && <script type="application/ld+json">{jsonLd(structuredData)}</script>}
    </Helmet>
  )
}
