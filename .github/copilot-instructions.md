# Finance Discipline --- Copilot CLI Project Instructions

## 1. Project identity

This repository contains **Finance Discipline**, a personal-finance
editorial website focused on:

> **Understand your mind. Master your money.**

Core positioning:

> **Behavioral finance + human stories + practical systems + interactive
> learning**

The site should feel like a **premium, calm, intelligent financial
publication**, not a generic finance blog, stock-trading portal, or
AI-generated content farm.

Primary brand idea:

> **Better decisions start with understanding the mind behind the
> money.**

Secondary brand promise:

> **Build discipline. Build wealth.**

When making changes, preserve this identity unless the user explicitly
asks for a rebrand.

------------------------------------------------------------------------

## 2. Tech stack and architecture

Current stack:

-   React 19
-   TypeScript
-   Vite 8
-   React Router
-   react-helmet-async
-   Vite build tooling
-   Vercel deployment
-   Static prerendering for known routes
-   CSS in:
    -   `website/src/App.css`
    -   `website/src/index.css`
-   Content data:
    -   `website/src/data/articles.ts`
    -   `website/src/data/tools.ts`
-   SEO:
    -   `website/src/components/common/SEOHead.tsx`
-   Prerendering:
    -   `website/scripts/prerender.mjs`
-   Deployment/routing:
    -   `website/vercel.json`

Do not introduce Next.js, a new framework, or a new state-management
library unless the user explicitly requests it.

Prefer the existing React/TypeScript architecture and reusable
components.

------------------------------------------------------------------------

## 3. Non-negotiable design language

### Visual personality

The website uses a restrained editorial aesthetic:

-   premium
-   minimal
-   calm
-   intelligent
-   financial
-   editorial
-   slightly experimental
-   high whitespace
-   strong typography
-   dark navy + off-white + cyan accent

Do NOT turn the website into:

-   a generic SaaS dashboard
-   a colorful fintech app
-   a crypto website
-   a trading terminal
-   a card-heavy dashboard
-   a generic WordPress blog
-   an overly animated landing page

### Primary colors

Use these as the starting design tokens:

``` css
--color-bg-dark: #071426;
--color-bg-dark-deep: #041018;
--color-bg-light: #F7F9FB;
--color-white: #FFFFFF;
--color-text-dark: #071426;
--color-text-light: #F7F9FB;
--color-text-muted: #687586;
--color-accent: #00D9D9;
--color-border: #DDE4EA;
```

The screenshots show the accent as a bright cyan close to `#00D9D9`.
Preserve the visual relationship even if the exact implementation uses a
nearby existing token.

### Color rules

-   Cyan is an accent, not a large background color.
-   Dark navy is used for strong editorial sections and navigation.
-   Off-white/light gray is the primary reading background.
-   Avoid gradients unless explicitly requested.
-   Avoid excessive shadows.
-   Avoid random new colors.
-   Avoid purple/pink/orange fintech palettes.
-   Maintain strong contrast.

------------------------------------------------------------------------

## 4. Typography rules

The visual system is typography-led.

Use:

-   a clean modern sans-serif for primary UI/body/headings
-   an elegant italic serif/display face for selected editorial emphasis

The homepage uses the distinctive treatment:

> Understand your mind.

followed by:

> Master your money.

The italic phrase should remain a deliberate brand accent.

Do not make every heading italic or decorative.

### Typography hierarchy

Use strong differences between:

-   eyebrow/section label
-   hero heading
-   section heading
-   article title
-   body copy
-   metadata
-   CTA labels

Do not make body text too small.

Finance articles must prioritize readability over visual density.

------------------------------------------------------------------------

## 5. Layout principles

The website uses generous horizontal spacing and large editorial
sections.

Preferred layout:

-   centered max-width container
-   generous section padding
-   clear vertical rhythm
-   strong whitespace
-   2--4 column layouts only where useful
-   article content should be narrower than marketing sections
-   cards should have clear borders and restrained styling

Avoid:

-   cramped grids
-   excessive rounded cards
-   excessive floating elements
-   unnecessary glassmorphism
-   huge shadows
-   dense dashboard layouts

------------------------------------------------------------------------

## 6. Header/navigation

Current navigation concept:

-   Psychology
-   Wealth Building
-   Money Mistakes
-   Experiments
-   Tools
-   Newsletter
-   Subscribe on YouTube
-   Search

Preserve the navigation's compact editorial character.

Important:

-   Do not make the header excessively tall.
-   Keep the logo prominent but not dominant.
-   Maintain cyan outlined CTA treatment.
-   Preserve keyboard accessibility.
-   Dropdowns must be keyboard usable.
-   Mobile navigation must remain simple.

------------------------------------------------------------------------

## 7. Homepage structure

The current homepage visual language includes:

1.  Header
2.  Hero
3.  Four philosophy pillars:
    -   Psychology
    -   Strategies
    -   Discipline
    -   Freedom
4.  Library/category exploration
5.  Featured article
6.  Latest articles
7.  Start-here content
8.  Newsletter CTA
9.  Footer

Future improvements should preserve this editorial flow.

Recommended strategic addition:

### Start Here

New visitors should have a clear learning path:

1.  Understand your money
2.  Control your spending
3.  Build financial safety
4.  Start investing
5.  Build long-term wealth

Do not add this mechanically if a better UX solution exists, but every
redesign should answer:

> "What should a completely new visitor do next?"

------------------------------------------------------------------------

## 8. Content categories

Current brand categories:

### Psychology

Hidden biases, mental traps, behavioral finance and the psychology
behind money decisions.

### Wealth Building

Strategies and systems for long-term financial growth.

### Money Mistakes

Real stories, costly decisions and lessons.

### Experiments

Behavioral finance experiments and real-world tests.

### Tools

Interactive financial and behavioral tools.

Do not create arbitrary categories just for SEO.

For scalability, conventional subtopics may be introduced underneath
these brand categories, for example:

-   Budgeting
-   Saving
-   Emergency funds
-   Debt
-   Credit
-   Investing
-   Retirement
-   ETFs/index funds
-   Spending psychology
-   Financial discipline

The brand-level categories should remain recognizable.

------------------------------------------------------------------------

## 9. Article design

Article pages should feel like a premium editorial publication.

Preferred structure:

-   category/eyebrow
-   article title
-   short description/deck
-   author
-   publication date
-   updated date where applicable
-   reading time
-   table of contents where useful
-   readable article column
-   subheadings
-   callout boxes
-   examples
-   calculations
-   source/references section
-   related stories
-   newsletter CTA
-   author/editorial information
-   disclaimer where appropriate

Article content width should remain comfortable for reading.

Avoid extremely wide article paragraphs.

------------------------------------------------------------------------

## 10. Finance-content trust rules

Finance Discipline is a personal-finance website. Treat financial
content as high-trust content.

When editing or creating financial content:

-   never invent statistics
-   never invent sources
-   never invent expert credentials
-   never promise investment returns
-   never use "guaranteed" financial outcomes
-   clearly label hypothetical calculations
-   distinguish examples from predictions
-   explain relevant assumptions
-   mention uncertainty where appropriate
-   use citations/references for factual claims that need support
-   avoid personalized financial advice
-   use educational framing

Avoid statements like:

-   "This is the best investment."
-   "You should definitely buy..."
-   "Guaranteed returns."
-   "Risk-free investment."
-   "This stock will go up."
-   "Everyone should..."

Prefer educational framing:

> "Here is how this strategy works, what assumptions it relies on, and
> where it can fail."

------------------------------------------------------------------------

## 11. Editorial voice

Tone:

-   intelligent
-   calm
-   practical
-   human
-   curious
-   evidence-aware
-   non-judgmental
-   concise
-   occasionally provocative, but never sensational

Avoid:

-   hype
-   fearmongering
-   clickbait
-   fake urgency
-   guru language
-   excessive emojis
-   "secret the banks don't want you to know"
-   "get rich quick"
-   unrealistic wealth claims

The writing should feel like a thoughtful financial publication speaking
to an intelligent person who wants clarity.

------------------------------------------------------------------------

## 12. Behavioral-finance positioning

This is a major differentiator.

Whenever relevant, connect money decisions to:

-   psychology
-   incentives
-   habits
-   cognitive biases
-   time horizon
-   emotional reactions
-   systems
-   environment
-   decision architecture

Do not turn every article into a psychology lecture.

The goal is:

> **Money isn't only math. It's behavior.**

A strong Finance Discipline article often follows:

**Behavior → Problem → Insight → Practical system → Action**

------------------------------------------------------------------------

## 13. Tools philosophy

Tools are part of the product identity, not decorative navigation.

Potential tools:

-   Compound Interest Calculator
-   Budget Calculator
-   Emergency Fund Calculator
-   Debt Payoff Calculator
-   Savings Goal Calculator
-   Investment Return Calculator
-   Behavioral Bias Detector
-   Panic Decision Tree

Do not expose a tool in the primary navigation if it only shows a
"coming soon" placeholder unless the user explicitly wants that
placeholder.

A smaller set of working tools is better than many unfinished tools.

------------------------------------------------------------------------

## 14. Current known product gap

The current site advertises tools including behavioral and financial
tools, but some routes currently present a "coming soon" experience.

When working on tools:

1.  Prefer implementing the highest-value tool first.
2.  Make it functional before adding another.
3.  Validate calculations carefully.
4.  Explain assumptions.
5.  Make tools accessible.
6.  Make them mobile-friendly.
7.  Add relevant contextual links from articles.
8.  Never display fabricated financial results.

Recommended implementation order:

1.  Compound Interest Calculator
2.  Budget Calculator
3.  Emergency Fund Calculator
4.  Debt Payoff Calculator
5.  Behavioral Bias Detector
6.  Panic Decision Tree

------------------------------------------------------------------------

## 15. SEO rules

SEO must support the editorial strategy, not replace it.

Every page should have appropriate:

-   title
-   meta description
-   canonical
-   Open Graph metadata
-   Twitter/social metadata where supported
-   semantic heading hierarchy
-   internal links
-   descriptive URLs
-   structured data where appropriate

Use the existing `SEOHead.tsx` system.

Do not create duplicate metadata logic in individual pages.

Do not invent SEO scores or keyword-volume claims.

Avoid keyword stuffing.

Prioritize topical depth and usefulness.

------------------------------------------------------------------------

## 16. Internal linking

Articles should link naturally to:

-   relevant pillar pages
-   related articles
-   calculators/tools
-   beginner resources
-   newsletter

Think in topic clusters:

``` text
Pillar
  ↓
Supporting article
  ↓
Related article
  ↓
Tool
  ↓
Newsletter
```

Do not add unrelated links simply to increase link count.

------------------------------------------------------------------------

## 17. Accessibility requirements

Treat accessibility as a first-class requirement.

Every UI change should consider:

-   semantic HTML
-   heading hierarchy
-   keyboard navigation
-   visible focus
-   accessible names
-   form labels
-   error messaging
-   sufficient contrast
-   meaningful alt text
-   decorative image handling
-   reduced motion
-   responsive text
-   touch target size
-   screen-reader behavior

Do not claim WCAG compliance without testing.

For interactive controls, prefer native semantic elements before ARIA.

------------------------------------------------------------------------

## 18. Responsive behavior

Desktop screenshots are reference material, not a reason to hard-code
desktop dimensions.

Every new section must work at:

-   mobile
-   tablet
-   desktop
-   large desktop

Avoid horizontal overflow.

Article typography must remain comfortable on mobile.

Cards should stack naturally.

Navigation must collapse cleanly.

------------------------------------------------------------------------

## 19. Performance

Preserve the static/prerendering strategy.

Avoid unnecessary:

-   JavaScript
-   third-party libraries
-   animation packages
-   large image assets
-   web fonts
-   client-side data fetching for static content

Optimize images.

Lazy-load below-the-fold media where appropriate.

Do not sacrifice readability or accessibility for tiny performance
gains.

------------------------------------------------------------------------

## 20. Architecture rules

Before creating a new component:

1.  Search for an existing reusable component.
2.  Extend it if appropriate.
3.  Keep page-specific logic in the page.
4.  Keep reusable UI in components.
5.  Keep article data in article data files.
6.  Keep tool definitions/calculations separate from presentation where
    practical.
7.  Avoid giant components.
8.  Avoid duplicating CSS tokens.
9.  Preserve TypeScript types.

Do not introduce unnecessary abstractions.

------------------------------------------------------------------------

## 21. Data/content separation

Content should remain data-driven where the existing architecture
supports it.

Articles belong in:

`website/src/data/articles.ts`

Tools belong in:

`website/src/data/tools.ts`

Do not hard-code large article bodies directly inside reusable UI
components.

------------------------------------------------------------------------

## 22. Design reference screenshots

Reference screenshots are stored under:

`docs/reference/`

They represent the current visual design and should be treated as visual
reference, not as exact pixel-perfect specifications.

Important references:

-   homepage
-   article page
-   Psychology category
-   Wealth Building category
-   Money Mistakes category

When a requested change is visual, compare the new result against these
references and preserve the brand's visual language unless the user
explicitly requests a redesign.

------------------------------------------------------------------------

## 23. Before modifying code

For every non-trivial change:

1.  Inspect the existing implementation.
2.  Identify the current component/data/route responsible.
3.  Reuse existing design tokens.
4.  Check desktop and mobile implications.
5.  Check accessibility.
6.  Check SEO implications.
7.  Check whether the change affects other routes.
8.  Keep the diff focused.

Do not rewrite unrelated files.

------------------------------------------------------------------------

## 24. After modifying code

Run the appropriate checks available in the repository, preferably:

``` bash
npm run lint
npm run typecheck
npm run build
```

If these scripts differ, inspect `package.json` first.

If a prerender/build step exists, verify it still succeeds.

Check generated routes when routing or SEO changes are made.

------------------------------------------------------------------------

## 25. Decision rule for visual changes

When choosing between two implementations:

Prefer the one that is:

1.  more readable
2.  more accessible
3.  more consistent with Finance Discipline
4.  simpler
5.  more reusable
6.  better on mobile
7.  better for editorial content
8.  easier to maintain

Do not choose a visually flashy implementation simply because it looks
impressive.

------------------------------------------------------------------------

## 26. Do not do these things without explicit instruction

Do not:

-   migrate frameworks
-   change the brand colors radically
-   replace the typography system
-   redesign the entire site
-   add dark-mode/light-mode switching
-   add excessive animations
-   add generic stock-market dashboards
-   add crypto features
-   add aggressive advertising
-   add affiliate widgets everywhere
-   add fake testimonials
-   invent authors
-   invent statistics
-   invent reviews
-   invent social proof
-   add placeholder content presented as real content

------------------------------------------------------------------------

## 27. Product direction

Long-term, Finance Discipline should evolve toward:

``` text
Editorial content
       ↓
Behavioral insight
       ↓
Practical system
       ↓
Interactive tool
       ↓
Newsletter
       ↓
Returning visitor
```

The goal is not merely "more blog posts."

The goal is to create a trusted personal-finance learning experience
around:

> **Understanding behavior → building discipline → building wealth.**

------------------------------------------------------------------------

## 28. Final instruction to Copilot

Before implementing a requested change, ask internally:

> "Does this make Finance Discipline more useful, more trustworthy, more
> readable, or more distinctive?"

If not, avoid unnecessary complexity.

When requirements are ambiguous, preserve the existing design system and
architecture rather than inventing a new visual or technical direction.
