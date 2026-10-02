# Finance Discipline --- AI / Copilot Context

This file provides high-level context for AI coding agents working on
the repository.

## Product

**Name:** Finance Discipline

**Tagline:** Build discipline. Build wealth.

**Core message:** Understand your mind. Master your money.

**Positioning:** Behavioral personal finance.

Finance Discipline is not intended to be a generic financial-news site.
It combines personal finance education with behavioral finance,
practical systems, stories, experiments, and interactive tools.

## Brand philosophy

The site's conceptual progression is:

**Psychology → Strategies → Discipline → Freedom**

A second useful mental model is:

**Understand → Control → Protect → Invest → Build**

The website should help visitors understand not only what to do with
money, but why people often struggle to do it.

## Target experience

The visitor should feel:

-   calm
-   informed
-   respected
-   curious
-   capable
-   not pressured

The website should not feel:

-   salesy
-   sensational
-   casino-like
-   crypto-like
-   overly corporate
-   like an AI content farm

## Current visual system

Primary background:

`#F7F9FB`

Dark navy:

`#071426`

Deep dark:

`#041018`

Primary accent:

`#00D9D9`

White:

`#FFFFFF`

Muted text:

`#687586`

Borders:

`#DDE4EA`

The interface uses large editorial typography, generous whitespace, dark
navy feature sections, light article/card sections, and bright cyan for
selected accents and actions.

## Important visual pattern

The homepage hero uses a strong two-line hierarchy:

**Understand your mind.**

**Master your money.**

The second line is an editorial italic/display treatment and should
remain visually special.

## Main content areas

### Psychology

Behavioral finance, biases, mental traps, emotional reactions, investing
psychology, spending psychology.

### Wealth Building

Long-term financial growth, systems, investing, saving, financial
planning.

### Money Mistakes

Stories about costly decisions and lessons.

### Experiments

Behavioral finance experiments and real-world tests.

### Tools

Interactive financial and behavioral utilities.

## Current article examples

Existing topics include:

-   The 70-10-10-10 Money Rule: A Simple Budgeting System to Manage Your
    Salary
-   Why Your Brain Thinks Compound Interest Is Fake
-   Why Smart People Panic When Markets Crash
-   Why Your Raise Disappears

These are examples of the desired editorial direction.

## Article voice

Articles should be:

-   useful
-   human
-   evidence-aware
-   practical
-   easy to understand
-   psychologically interesting
-   careful with financial claims

Avoid filler such as:

"Personal finance is an important aspect of everyone's life..."

Prefer a concrete problem, observation, story, question, or tension.

## Finance safety

Do not present hypothetical returns as guaranteed.

Do not make personalized investment recommendations.

Do not invent financial facts.

Do not fabricate sources.

Clearly label examples and assumptions.

## UX principle

A new visitor should always know:

1.  what Finance Discipline is
2.  why it is different
3.  where to start
4.  what to read next
5.  what useful action/tool they can take

## Current strategic opportunity

The website currently has a strong brand concept but a relatively small
content/product footprint.

The next phase should focus on:

-   trust signals
-   author/editorial transparency
-   topic clusters
-   working tools
-   stronger Start Here experience
-   deeper internal linking
-   behavioral-finance differentiation

Do not solve this by blindly adding hundreds of articles.

## Tool direction

Recommended tools:

1.  Compound Interest Calculator
2.  Budget Calculator
3.  Emergency Fund Calculator
4.  Debt Payoff Calculator
5.  Behavioral Bias Detector
6.  Panic Decision Tree

The first four provide broadly useful financial utility. The last two
reinforce the Finance Discipline behavioral-finance identity.

## Architecture

React 19 + TypeScript + Vite 8 + React Router.

Important locations:

-   `website/src/App.tsx`
-   `website/src/App.css`
-   `website/src/index.css`
-   `website/src/components/`
-   `website/src/data/articles.ts`
-   `website/src/data/tools.ts`
-   `website/src/components/common/SEOHead.tsx`
-   `website/scripts/prerender.mjs`
-   `website/vercel.json`

Use existing architecture before introducing new patterns.

## Reference images

Visual references are in:

`docs/reference/`

They include:

-   homepage
-   article page
-   Money Mistakes category
-   Wealth Building category
-   Psychology category

Use them to understand spacing, typography, colors, cards, navigation,
and editorial composition.

## Golden rule

Do not optimize for "more features."

Optimize for:

**clarity + trust + usefulness + distinctiveness + maintainability**
