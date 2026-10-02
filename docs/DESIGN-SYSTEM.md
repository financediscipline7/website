# Finance Discipline --- Design System

## 1. Design intent

Finance Discipline uses a **premium editorial finance aesthetic**.

The design should communicate:

-   intelligence
-   restraint
-   trust
-   clarity
-   discipline
-   long-term thinking

It should not resemble a trading terminal or colorful fintech dashboard.

------------------------------------------------------------------------

## 2. Color tokens

Recommended starting tokens:

``` css
:root {
  --fd-bg-dark: #071426;
  --fd-bg-dark-deep: #041018;
  --fd-bg-light: #F7F9FB;
  --fd-white: #FFFFFF;

  --fd-text-dark: #071426;
  --fd-text-light: #F7F9FB;
  --fd-text-muted: #687586;

  --fd-accent: #00D9D9;
  --fd-border: #DDE4EA;
}
```

### Usage

Dark navy:

-   header
-   hero/article headers
-   featured sections
-   newsletter CTA
-   footer

Light/off-white:

-   article reading area
-   category listing
-   card sections
-   general page backgrounds

Cyan:

-   primary CTA
-   eyebrow labels
-   links
-   small icons
-   selected emphasis
-   borders/outlines

Never use cyan for large blocks of body copy.

------------------------------------------------------------------------

## 3. Typography

### Primary type

Use the existing project typography if already established.

The primary font should be:

-   clean
-   modern
-   highly legible

### Display type

A serif italic/display style can be used for:

-   selected hero phrase
-   major editorial emphasis
-   short brand statements

Do not use the display style for:

-   paragraphs
-   navigation
-   forms
-   long headings
-   technical information

------------------------------------------------------------------------

## 4. Editorial hierarchy

Typical hierarchy:

``` text
Eyebrow
↓
Large heading
↓
Supporting description
↓
Primary CTA
↓
Secondary CTA
```

Article hierarchy:

``` text
Category
↓
Article title
↓
Deck
↓
Metadata
↓
TOC
↓
H2
↓
Body
↓
H3
↓
Body
```

------------------------------------------------------------------------

## 5. Cards

Cards should be:

-   rectangular/editorial
-   lightly bordered
-   restrained
-   readable
-   consistent

Avoid:

-   giant shadows
-   excessive rounded corners
-   gradients
-   neon effects
-   excessive icon decoration

Card hierarchy:

1.  image/visual
2.  category + reading time
3.  title
4.  short description
5.  action

------------------------------------------------------------------------

## 6. Buttons

Primary CTA:

-   cyan background
-   dark text
-   compact
-   clear action verb

Secondary CTA:

-   white/light background or transparent
-   border
-   dark text

Text links:

-   cyan
-   understated
-   arrow treatment is acceptable

Examples:

-   READ STORY →
-   EXPLORE →
-   JOIN THE NEWSLETTER →
-   START HERE →

Avoid vague CTAs such as:

-   Click here
-   Learn more
-   Submit

when a more specific action is possible.

------------------------------------------------------------------------

## 7. Dark sections

Dark sections should create editorial contrast.

Good uses:

-   hero
-   featured story
-   newsletter CTA
-   footer

Do not put every section on dark backgrounds.

The contrast between light and dark sections is part of the visual
identity.

------------------------------------------------------------------------

## 8. Spacing

Prefer generous spacing.

Approximate design rhythm:

-   small gap: 8px
-   standard gap: 16px
-   medium: 24px
-   large: 40px
-   section: 64--120px depending on viewport

Use the existing project spacing tokens if present rather than
introducing duplicates.

------------------------------------------------------------------------

## 9. Content width

Marketing sections can use a broad max-width.

Articles should use a significantly narrower reading column.

Do not make paragraphs span the full desktop viewport.

------------------------------------------------------------------------

## 10. Responsive design

At mobile:

-   stack cards
-   simplify navigation
-   reduce hero scale
-   maintain generous vertical spacing
-   preserve readable body text
-   prevent horizontal overflow
-   keep buttons easy to tap

Do not simply shrink the desktop layout.

Recompose it.

------------------------------------------------------------------------

## 11. Motion

Animation should be subtle.

Good:

-   short hover transitions
-   menu transitions
-   small opacity/transform changes
-   gentle entrance animation if already established

Avoid:

-   parallax everywhere
-   continuous motion
-   bouncing buttons
-   distracting counters
-   excessive scroll animations

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

## 12. Accessibility

Visual elegance must never override accessibility.

Check:

-   contrast
-   focus state
-   keyboard operation
-   semantic headings
-   accessible names
-   text size
-   form labels
-   reduced motion

------------------------------------------------------------------------

## 13. Screenshot references

See:

`docs/reference/homepage.png`

`docs/reference/article-compound-interest.png`

`docs/reference/money-mistakes.png`

`docs/reference/wealth-building.png`

`docs/reference/psychology.png`

These are references for the current design, not instructions to
reproduce every pixel.

------------------------------------------------------------------------

## 14. Design decision rule

When uncertain:

> Prefer editorial simplicity over visual novelty.

The website should look like a trusted financial publication that
happens to have excellent interactive tools --- not like a tool
dashboard that happens to publish articles.
