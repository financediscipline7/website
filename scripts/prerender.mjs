import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createServer, loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const env = loadEnv('production', root, 'VITE_')
const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || 'https://website-orpin-mu-94.vercel.app').replace(/\/+$/, '')
const vite = await createServer({ configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom' })

try {
  const [{ default: App }, { articles }, { tools }, { HelmetProvider }] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    vite.ssrLoadModule('/src/data/articles.ts'),
    vite.ssrLoadModule('/src/data/tools.ts'),
    vite.ssrLoadModule('react-helmet-async'),
  ])
  const routes = [
    '/',
    '/blog',
    '/psychology',
    '/wealth-building',
    '/money-mistakes',
    '/experiments',
    '/tools',
    ...tools.map(({ id }) => `/tools/${id}`),
    '/about',
    '/contact',
    '/newsletter',
    '/privacy',
    '/terms',
    '/disclaimer',
    ...articles.map(({ slug }) => `/blog/${slug}`),
  ]
  const template = await readFile(path.join(root, 'dist/index.html'), 'utf8')
  const builtAssets = await readdir(path.join(root, 'dist/assets'))
  const logoAsset = builtAssets.find((asset) => /^Logo-[\w-]+\.png$/.test(asset))
  if (!logoAsset) throw new Error('The built Finance Discipline logo asset was not found in dist/assets.')

  for (const route of routes) {
    const app = React.createElement(
      HelmetProvider,
      null,
      React.createElement(StaticRouter, { location: route }, React.createElement(App)),
    )
    const rendered = renderToString(app)
    const metadataPattern = /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g
    const headTags = [...rendered.matchAll(metadataPattern)].map(([tag]) => tag).join('\n')
    const body = rendered.replace(metadataPattern, '')
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace(/<meta\b(?=[^>]*\bdata-rh="true")[^>]*>/g, '')
      .replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/g, '')
      .replace('</head>', `${headTags}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${body.replaceAll('/src/assets/Logo.png', `/assets/${logoAsset}`)}</div>`)
    const outputPath = route === '/'
      ? path.join(root, 'dist/index.html')
      : path.join(root, 'dist', route.slice(1), 'index.html')
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, html)
  }

  const notFoundRendered = renderToString(React.createElement(
    HelmetProvider,
    null,
    React.createElement(StaticRouter, { location: '/not-found' }, React.createElement(App)),
  ))
  const notFoundPattern = /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g
  const notFoundHead = [...notFoundRendered.matchAll(notFoundPattern)].map(([tag]) => tag).join('\n')
  const notFoundBody = notFoundRendered.replace(notFoundPattern, '')
  const notFoundHtml = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\b(?=[^>]*\bdata-rh="true")[^>]*>/g, '')
    .replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/g, '')
    .replace('</head>', `${notFoundHead}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${notFoundBody.replaceAll('/src/assets/Logo.png', `/assets/${logoAsset}`)}</div>`)
  await writeFile(path.join(root, 'dist/404.html'), notFoundHtml)

  const urls = [
    ...routes.map((route) => {
      const article = articles.find(({ slug }) => route === `/blog/${slug}`)
      const lastmod = article ? `<lastmod>${article.updatedAt || article.publishedAt}</lastmod>` : ''
      return `<url><loc>${siteUrl}${route}</loc>${lastmod}</url>`
    }),
  ].join('')
  await writeFile(path.join(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`)
  const crawlerAgents = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'GPTBot',
    'Claude-SearchBot',
    'Claude-User',
    'ClaudeBot',
    'PerplexityBot',
    'Perplexity-User',
    'Googlebot',
    'Google-Extended',
    'Bingbot',
  ]
  const crawlerRules = crawlerAgents.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n')
  await writeFile(path.join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\n${crawlerRules}\n\nSitemap: ${siteUrl}/sitemap.xml\n`)

  const articleMarkdown = (article) => {
    const body = typeof article.content === 'string'
      ? article.content
      : article.content.map((block) => {
          if (block.type === 'paragraph') return block.text
          if (block.type === 'heading') return `${'#'.repeat(block.level)} ${block.text}`
          if (block.type === 'quote') return `> ${block.text}`
          if (block.type === 'callout') return `### ${block.title}\n\n${block.text}`
          if (block.type === 'list') return block.items.map((item, index) => `${block.ordered ? `${index + 1}.` : '-'} ${item}`).join('\n')
          if (block.type === 'table') {
            const header = `| ${block.headers.join(' | ')} |`
            const divider = `| ${block.headers.map(() => '---').join(' | ')} |`
            const rows = block.rows.map((row) => `| ${row.join(' | ')} |`).join('\n')
            return [header, divider, rows].join('\n')
          }
        }).join('\n\n')
    return [
      `## ${article.title}`,
      '',
      `Canonical URL: ${siteUrl}/blog/${article.slug}`,
      `Category: ${article.category}`,
      `Published: ${article.publishedAt}`,
      `Summary: ${article.excerpt}`,
      `Key takeaway: ${article.keyTakeaway}`,
      '',
      body,
      '',
    ].join('\n')
  }
  const categoryLinks = [
    ['Psychology', '/psychology'],
    ['Wealth Building', '/wealth-building'],
    ['Money Mistakes', '/money-mistakes'],
    ['Experiments', '/experiments'],
  ].map(([name, route]) => `- [${name}](${siteUrl}${route})`).join('\n')
  const articleLinks = articles.map((article) => `- [${article.title}](${siteUrl}/blog/${article.slug}): ${article.excerpt}`).join('\n')
  const llmsIndex = [
    '# Finance Discipline',
    '',
    '> Original educational content about money habits, behavioral finance, budgeting, saving, investing psychology, and financial decision-making.',
    '',
    'Finance Discipline publishes general financial education. Content is not individualized financial, tax, legal, or investment advice. Investment examples are educational and do not promise results.',
    '',
    `Website: ${siteUrl}/`,
    `Blog index: ${siteUrl}/blog`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Full plain-text article collection: ${siteUrl}/llms-full.txt`,
    '',
    '## Topics',
    '',
    categoryLinks,
    '',
    '## Articles',
    '',
    articleLinks,
  ].join('\n')
  await writeFile(path.join(root, 'dist/llms.txt'), `${llmsIndex}\n`)
  await writeFile(path.join(root, 'dist/llms-full.txt'), `${llmsIndex}\n\n## Full article text\n\n${articles.map(articleMarkdown).join('\n')}`)
  console.log(`Pre-rendered ${routes.length} routes and generated sitemap.xml, robots.txt, llms.txt, and llms-full.txt`)
} finally {
  await vite.close()
}
