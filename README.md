# Bidit Das — research portfolio

React + Vite source for the existing Vercel-hosted personal website.

## Development

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Updating content

- `src/App.jsx`: biography, research summaries, news, service, collaboration, LinkedIn CV request, and the fictional Asterism prompt illustration.
- `src/data/profile.js`: publication records and profile links.
- `src/profile.css`: responsive styling.
- `index.html`: production search/social metadata.

Keep acceptance, presentation, and publication statuses distinct. The illustration shows fictional prompt inputs, not generated or measured answers. No CV file, phone number, or unmasked email is served; CV requests go through LinkedIn. Do not restore internal employer details to public copy.

## Deployment

The repository has an existing Vercel integration. Use branches and pull requests; verify the deployment status associated with the merged commit and the production URL after release. Keep `vercel.json`, search verification, robots.txt, and the sitemap intact. Never commit credentials or local hosting state.
