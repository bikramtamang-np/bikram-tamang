# bikram-tamang.com.np

Personal site of **Bikram Tamang** — cloud, Linux and Python. Kathmandu, Nepal.

Live: **[bikram-tamang.com.np](https://bikram-tamang.com.np)**

---

## Stack

- React 19 + Vite 7, built as a multi-page app
- No router, no UI framework, no CSS framework, no animation library
- GitHub Actions builds and publishes to GitHub Pages on every push to `main`

The whole site is about 205 KB of JavaScript (65 KB gzipped), one portrait and
an Open Graph card.

## Structure

A cover and five pages. Each is a real HTML document, so every URL is served as
a 200, opens cold, and can be shared — there is no client-side router and no
`404` fallback trick.

```
index.html                    the cover: name, role, and the contents
about/index.html              01  About
experience/index.html         02  Experience & education
skills/index.html             03  Skills
certifications/index.html     04  Certifications
contact/index.html            05  Contact
404.html                      what GitHub Pages serves for anything else

src/
  content/site.js             page registry — paths, labels, summaries and
                              meta descriptions; nav, contents and <head> all
                              read from it
  main.jsx                    reads data-page off the shell and mounts it
  App.jsx                     chrome: nav, theme toggle, footer, page turn
  index.css                   tokens (light/dark), type scale, primitives
  components/
    Cover.jsx                 the cover and the contents list
    PageHead.jsx              the numbered heading every page shares
    Pager.jsx                 previous / next at the foot of a page
    About.jsx                 portrait and the short version
    Experience.jsx            work and education, side by side
    Skills.jsx                grouped by area
    Certifications.jsx        with the AWS Credly verification link
    Contact.jsx               email, GitHub, location
    NotFound.jsx              served as 404.html
```

An HTML shell carries only `data-page`. `vite.config.js` writes the title,
description, canonical, Open Graph and Twitter tags for that page into the
`<head>` from `src/content/site.js` at build time, and the theme script that
runs before first paint, so a page's title cannot drift from the nav.

## Why pages instead of one long scroll

The first version was a single document 4,280px tall. The hero ended 84px short
of the fold, leaving the next section's heading hanging under it, and reaching
Contact meant five screens of scrolling. Each page now fits the window it is
opened in, the cover lists all five, and the next page is one click away at the
foot of every leaf page.

## Content

Dates, roles, skills, links and the portrait live in a small array at the top of
each component. Page titles, summaries and descriptions live in
`src/content/site.js`.

## Development

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # serve the build locally
npm run lint
```

`npm run dev` serves the same pages at `/`, `/about/`, `/experience/` and so on.

## Deployment

Pushing to `main` is the deploy. `.github/workflows/deploy.yml` builds with Node
20 and publishes `dist/` to Pages. The custom domain is set in the repository's
Pages settings and mirrored in `public/CNAME`, which the build copies into
`dist/`.

Before the move to a multi-page build, `base` was `./`; it is now `/`, because a
page two directories deep (`/experience/`) cannot resolve relative asset paths.
This assumes the site is served from its own domain, which it is.

## Themes

Light and dark are driven by `data-theme` on `<html>`. The inline script in the
`<head>` of every page sets it before first paint from `localStorage`, falling
back to `prefers-color-scheme`, so there is no flash when a page loads.
