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
    vite.ssrLoadModule('/src/components/pages/ToolsPage.tsx'),
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
  await writeFile(path.join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`)
  console.log(`Pre-rendered ${routes.length} routes and generated sitemap.xml and robots.txt`)
} finally {
  await vite.close()
}
