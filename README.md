# Finance Discipline

Finance Discipline is a behavioral-finance media platform about the psychology behind money decisions. Phase 1 establishes the React foundation, editorial visual language, route structure, and typed content model.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Lucide React
- Oxlint

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/components`: reusable layout and content components
- `src/data`: sample editorial content
- `src/types`: explicit content contracts
- `src/App.tsx`: route shell and Phase 1 homepage structure
- `src/App.css`: centralized visual tokens and responsive system
- `src/index.css`: global reset, font imports, and Tailwind entrypoint

## Content architecture

Articles are typed in `src/types/content.ts` and demonstrated in `src/data/articles.ts`. The model leaves room for video, interactive tools, SEO metadata, related stories, and future service integrations without adding backend behavior prematurely.

## Design system

Brand colors, typography, spacing, responsive containers, editorial cards, navigation, and reduced-motion behavior live in `src/App.css`. The visual direction uses deep navy, restrained cyan, monospace labels, and a serif accent for a premium editorial feel.

## Environment

No environment variables are required in Phase 1. `.env.example` documents the intentional empty starting point. Future server-side integrations must keep secrets out of the client bundle.

## Future phases

Blog detail experiences, video integrations, newsletter capture, interactive tools, analytics, authentication, community, and monetization are intentionally not implemented yet. The route and content foundations are ready for those phases.
