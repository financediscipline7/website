# Finance Discipline --- Website Architecture & Change Map

## Current technology

-   React 19
-   TypeScript
-   Vite 8
-   React Router
-   react-helmet-async
-   Vercel
-   Static prerendering

## Main files

### Routing

`website/src/App.tsx`

Responsible for route definitions and application-level composition.

### Styling

`website/src/App.css`

Main application/component styling.

`website/src/index.css`

Global styles and base rules.

### Articles

`website/src/data/articles.ts`

Article metadata/content source.

Do not put article content directly into visual components unless the
architecture explicitly requires it.

### Tools

`website/src/data/tools.ts`

Tool definitions and related data.

### SEO

`website/src/components/common/SEOHead.tsx`

Central SEO metadata implementation.

Use this instead of creating one-off metadata systems.

### Prerendering

`website/scripts/prerender.mjs`

Responsible for generating static HTML for known routes and related SEO
files such as sitemap/robots output.

When adding a new public route, check whether the prerender route list
also needs updating.

### Vercel

`website/vercel.json`

Contains deployment/client-routing behavior.

------------------------------------------------------------------------

# Route/content map

Expected site areas include:

``` text
/
├── blog
├── blog/:slug
├── psychology
├── wealth-building
├── money-mistakes
├── experiments
├── tools
├── tools/:slug
├── about
├── newsletter
├── privacy
├── terms
└── disclaimer
```

Verify the actual route names in `App.tsx` before changing them.

------------------------------------------------------------------------

# Component strategy

Before creating a new component:

1.  Search `website/src/components/`.
2.  Identify existing card, CTA, layout, navigation, article and footer
    components.
3.  Reuse or extend existing components.
4.  Avoid duplicating equivalent components.

Likewise, before creating a CSS token, search existing CSS.

------------------------------------------------------------------------

# Content strategy

The current site has a small set of articles.

Do not make category pages look populated by duplicating articles.

If a category has insufficient content, either:

-   improve the category landing experience
-   create genuinely relevant content
-   or reconsider exposing the category prominently

Do not create fake article counts.

------------------------------------------------------------------------

# Future information architecture

The brand categories should remain:

-   Psychology
-   Wealth Building
-   Money Mistakes
-   Experiments
-   Tools

Under them, content can use conventional personal-finance topics such
as:

-   budgeting
-   saving
-   emergency funds
-   debt
-   credit
-   investing
-   retirement
-   spending psychology
-   financial discipline

This allows the site to preserve its unique identity while becoming
easier to search and navigate.

------------------------------------------------------------------------

# Internal linking architecture

Preferred model:

``` text
Pillar page
    ↓
Supporting article
    ↓
Related article
    ↓
Relevant tool
    ↓
Newsletter
```

Links must be contextually relevant.

------------------------------------------------------------------------

# Tool architecture

A tool should ideally contain:

``` text
Tool page
├── explanation
├── inputs
├── calculation
├── result
├── assumptions
├── educational interpretation
├── related articles
└── newsletter CTA
```

For financial calculations:

-   use explicit formulas
-   keep calculations testable
-   validate edge cases
-   handle invalid inputs
-   do not silently produce misleading outputs
-   label assumptions clearly

------------------------------------------------------------------------

# SEO architecture

For every public page:

-   unique title
-   useful meta description
-   canonical
-   Open Graph metadata
-   appropriate JSON-LD
-   semantic headings
-   crawlable content
-   internal links

Do not create duplicate metadata.

------------------------------------------------------------------------

# Change safety checklist

Before a change:

-   inspect route
-   inspect component
-   inspect data
-   inspect CSS
-   inspect responsive behavior
-   inspect SEO
-   inspect accessibility

After a change:

``` bash
npm run lint
npm run typecheck
npm run build
```

Use actual repository script names if they differ.

If routes changed, verify prerendering.

If article metadata changed, verify generated SEO output.

------------------------------------------------------------------------

# Current known issues / opportunities

1.  Tools need real implementations rather than only placeholders.
2.  Content footprint is still small.
3.  Category pages may feel sparse until more content exists.
4.  Author/editorial trust signals should be strengthened.
5.  Publication/update metadata should be explicit.
6.  Article sourcing/reference presentation should be strengthened.
7.  A stronger Start Here learning journey would help new visitors.
8.  Internal topic clusters should be developed.
9.  Behavioral-finance positioning should remain the core
    differentiator.
10. Avoid broadening into generic financial-news coverage without a
    deliberate product decision.
