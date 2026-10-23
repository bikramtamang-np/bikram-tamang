import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { SITE, PAGES, COVER, NOT_FOUND } from './src/content/site.js';

const root = fileURLToPath(new URL('.', import.meta.url));

// Runs before first paint, so a dark-mode visitor never sees a white flash.
const THEME_SCRIPT = `
      (function () {
        try {
          var saved = localStorage.getItem('theme');
          var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.dataset.theme = saved || (dark ? 'dark' : 'light');
        } catch (e) {}
      })();`;

const escape = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

function page(page) {
    const url = `${SITE.url}${page.path}`;
    const tags = [
        `<title>${escape(page.title)}</title>`,
        `<meta name="description" content="${escape(page.description)}" />`,
        `<meta name="author" content="${escape(SITE.name)}" />`,
        `<meta name="theme-color" content="#f5f3ed" media="(prefers-color-scheme: light)" />`,
        `<meta name="theme-color" content="#0e0f0d" media="(prefers-color-scheme: dark)" />`,
        page.key === '404' ? `<meta name="robots" content="noindex" />` : null,
        page.key === '404' ? null : `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="${escape(SITE.name)}" />`,
        `<meta property="og:title" content="${escape(page.title)}" />`,
        `<meta property="og:description" content="${escape(page.description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${SITE.url}/og-image.png" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escape(page.title)}" />`,
        `<meta name="twitter:description" content="${escape(page.description)}" />`,
        `<meta name="twitter:image" content="${SITE.url}/og-image.png" />`,
    ];
    return tags.filter(Boolean).join('\n    ');
}

// Each HTML shell carries only data-page; everything page-specific is written
// into the <head> here from src/content/site.js, so a title cannot drift from
// the nav.
function pageHead() {
    return {
        name: 'page-head',
        transformIndexHtml(html) {
            const key = html.match(/data-page="([^"]+)"/)?.[1] || 'cover';
            const current =
                key === 'cover'
                    ? COVER
                    : key === '404'
                      ? NOT_FOUND
                      : PAGES.find((p) => p.key === key) || NOT_FOUND;

            return html
                .replace(
                    '<meta charset="UTF-8" />',
                    `<meta charset="UTF-8" /><script>${THEME_SCRIPT}\n    </script>`
                )
                .replace('</head>', `  ${page(current)}\n  </head>`);
        },
    };
}

export default defineConfig({
    plugins: [react(), pageHead()],
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: `${root}index.html`,
                about: `${root}about/index.html`,
                experience: `${root}experience/index.html`,
                skills: `${root}skills/index.html`,
                certifications: `${root}certifications/index.html`,
                contact: `${root}contact/index.html`,
                notfound: `${root}404.html`,
            },
        },
    },
});
