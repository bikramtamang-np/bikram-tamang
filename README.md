# bikram-tamang.com.np

Personal site of **Bikram Tamang** — cloud, Linux and Python. Kathmandu, Nepal.

Live: **[bikram-tamang.com.np](https://bikram-tamang.com.np)**

---

## Stack

- React 19 + Vite 7
- No UI framework, no CSS framework, no animation library — the layout is plain
  CSS with custom properties and two themes
- GitHub Actions builds and publishes to GitHub Pages on every push to `main`

The whole site is about 200 KB of JavaScript (64 KB gzipped), one portrait image
and an Open Graph card.

## Structure

```
index.html              document head: metadata, Open Graph, theme bootstrap
src/
  index.css             design tokens (light/dark), typography, primitives
  App.jsx               nav, section registry, theme state, scroll observers
  components/
    Hero.jsx            name, role, actions, at-a-glance facts
    About.jsx           portrait and the short version
    Experience.jsx      work and education, side by side
    Skills.jsx          grouped by area
    Certifications.jsx  with the AWS Credly verification link
    Contact.jsx         email, GitHub, location
public/
  og-image.png          1200x630 link preview
  favicon.svg           B monogram
```

Section content (jobs, dates, skills, certification links) lives in a small array
at the top of each component. Editing that array is the whole content workflow.

## Development

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # serve the build locally
npm run lint
```

## Deployment

Pushing to `main` is the deploy. `.github/workflows/deploy.yml` builds with Node
20 and publishes `dist/` to Pages; the custom domain is set in the repository's
Pages settings and mirrored in `CNAME`.

## Themes

Light and dark are driven by `data-theme` on `<html>`. A small inline script in
`index.html` sets it before first paint from `localStorage`, falling back to
`prefers-color-scheme`, so there is no flash when the page loads.
