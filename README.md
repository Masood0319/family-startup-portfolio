# JanJa — Build. Automate. Grow.

A Next.js App Router website for JanJa, a technology and digital-transformation startup.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editable content

Most site content lives in `src/data/site.ts`:

- **Company name, tagline and contact details:** update the `company` object. Confirm the email, phone, and location before launch.
- **Logo:** replace the text mark in `src/components/site-shell.tsx` with the approved logo.
- **Team profiles:** update `team` entries and replace the remote portrait URLs with confirmed headshots. The current profiles and photos are placeholders.
- **Social links:** replace `socialLinks` and the team profile URLs with verified JanJa/team profiles.
- **Services and industries:** edit the `services` and `industries` arrays.
- **Portfolio:** replace `projects` with approved work. Current entries and visuals are demo concepts, not client projects.

The contact form currently validates in the browser only. It does not send or store submissions. Connect a server-side route or trusted form provider before launch; keep any email API credentials on the server in environment variables, never in client-side code.

## Routes

- `/` — Home
- `/who-we-are` — Company story and values
- `/team` — Sample founding-team profiles
- `/services` — Service catalog
- `/industries` — Industry perspectives
- `/work` — Filterable demo concepts
- `/contact` — Frontend contact form

The production domain in metadata, sitemap, and robots output is `https://janja.com`; update it if the confirmed domain differs.
