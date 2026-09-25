<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wedding website rules

## Product character

- Keep the experience understated, editorial, warm, timeless, and quietly luxurious—like a printed European wedding invitation translated to the web.
- Prefer typography, whitespace, image composition, and rhythm over decoration or feature density.
- Avoid template-like, SaaS-like, childish, flashy, or overly romantic treatments.
- Do not add floating hearts, sparkles, heavy gradients, glassmorphism, aggressive parallax, bouncing animation, oversized countdowns, complex carousels, or embedded maps.

## Design system

- Use the established palette as a restrained system: ivory `#F4F0E8`, warm white `#FAF8F3`, dark navy `#17202A`, muted olive `#6E7258`, burgundy `#6B2634`, and warm taupe `#A89F91`.
- Keep dark navy and warm neutrals dominant; use burgundy sparingly for emphasis and interaction states.
- Use Cormorant Garamond for names, display headings, and editorial moments; use one restrained sans-serif for body and UI text. Do not introduce additional font families without a strong reason.
- Favor hairline rules, small uppercase labels, italic serif details, generous vertical rhythm, and minimal border radius.
- Buttons and links should feel editorial and lightweight rather than pill-shaped or application-like.

## Layout and interaction

- Design mobile-first around a roughly 390px viewport, with intentional responsive behavior on larger screens.
- Keep the opening cover calm and physical-invitation-like; transitions should use opacity and transform, respect `prefers-reduced-motion`, and require user interaction before any optional audio.
- Keep navigation simple and content directly on the page; do not turn wedding details into dashboard cards.
- Use curated asymmetric editorial image layouts instead of generic carousels or automated galleries.
- Prefer external Google Maps links over embedded maps, and keep calendar actions lightweight.

## Content and architecture

- Keep wedding names, dates, locations, schedule, story copy, gallery references, calendar data, and RSVP settings in the central wedding data module. Components should consume that configuration rather than duplicate content.
- Keep components understandable and section-oriented; avoid both monolithic pages and unnecessary wrappers for trivial markup.
- Use Next.js App Router and TypeScript conventions, server components by default, and client components only where interaction requires them.
- Preserve invitation-code routing in the `/i/[code]` shape. Do not expose private database IDs or put guest names in query strings.
- Keep guest personalization and RSVP persistence behind clear data/service boundaries so Supabase can be connected without redesigning the UI.

## Quality bar

- Use semantic HTML, accessible labels, keyboard focus states, useful image alt text, sufficient contrast, and reduced-motion support.
- Use `next/image` for local photography, prioritize only critical imagery, lazy-load non-critical images, and avoid unnecessary client-side JavaScript or third-party scripts.
- Keep the site fast, Vercel-ready, and free of committed secrets. Environment variables belong in `.env.example` and actual credentials stay local or in deployment settings.
- Preserve the visual hierarchy of hero, typography, and spacing when adding features; new functionality must feel like part of the invitation rather than an app bolted onto it.
