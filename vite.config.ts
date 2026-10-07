import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { jsonLdFor, ORIGIN, seoEntries } from './src/data/seo'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceMeta(html: string, attr: 'name' | 'property', key: string, content: string) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`)
  return html.replace(pattern, `$1${escapeHtml(content)}$2`)
}

function seoPrerender(): Plugin {
  return {
    name: 'seo-prerender',
    apply: 'build',
    closeBundle() {
      const distDir = join(process.cwd(), 'dist')
      const indexPath = join(distDir, 'index.html')
      const template = readFileSync(indexPath, 'utf8')

      for (const entry of seoEntries()) {
        const url = entry.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${entry.path}`
        const json = JSON.stringify(jsonLdFor(entry.path, entry.title, entry.description)).replace(
          /</g,
          '\\u003c',
        )
        let html = template
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(entry.title)}</title>`)
        html = replaceMeta(html, 'name', 'description', entry.description)
        html = replaceMeta(html, 'name', 'geo.placename', entry.placename)
        html = replaceMeta(html, 'property', 'og:title', entry.title)
        html = replaceMeta(html, 'property', 'og:description', entry.description)
        html = replaceMeta(html, 'property', 'og:url', url)
        html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
        html = html.replace(
          /<script type="application\/ld\+json" id="seo-jsonld">[\s\S]*?<\/script>/,
          `<script type="application/ld+json" id="seo-jsonld">${json}</script>`,
        )
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root"><main><h1>${escapeHtml(entry.h1)}</h1><p>${escapeHtml(entry.description)}</p></main></div>`,
        )

        const target =
          entry.path === '/' ? indexPath : join(distDir, entry.path.replace(/^\//, ''), 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPrerender()],
  server: {
    port: 5174,
    strictPort: true,
  },
})
