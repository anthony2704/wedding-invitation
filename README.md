# Anthony & BRIDE NAME · Wedding Invitation

An editorial, mobile-first wedding invitation built with Next.js, TypeScript, Tailwind CSS, and local optimized image assets.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run build
```

## Where to edit the invitation

- Wedding copy, dates, venues, timeline, calendar data, and gallery references: `src/data/wedding.ts`
- Mock personalized guests: `src/data/guests.ts`
- Replace placeholder photographs in `public/images`
- Mock personalized route: `/i/8FK2P`

The root route is `/`. Invitation codes are separate from query-string guest names so the future URL shape stays `/i/{code}`.

## RSVP and Supabase

The form is fully interactive and uses a safe mock adapter when Supabase variables are absent. Add values from `.env.example` when ready, then replace the Supabase branch in `src/lib/rsvp.ts` with the project client and insert into an `rsvp` table.

Suggested columns: `id`, `guest_id`, `guest_name`, `attending`, `guest_count`, `dietary_note`, `message`, and `created_at`.

## Design notes

The experience uses warm ivory paper, dark navy type, restrained burgundy accents, Cormorant Garamond for display type, and Manrope for utility text. The opening cover is intentionally a single quiet interaction; music is scaffolded but disabled until a real audio file is supplied in the config.
