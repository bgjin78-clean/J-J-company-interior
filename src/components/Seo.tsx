import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findSeo, jsonLdFor, normalizePath, ORIGIN } from '../data/seo'
import { pageTitle, SITE } from '../data/site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function Seo({ title, description }: { title?: string; description?: string }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = normalizePath(pathname)
    const entry = findSeo(path)
    const fullTitle = pageTitle(title ?? entry?.title)
    const desc = description ?? entry?.description ?? SITE.description
    const url = path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}`

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('name', 'geo.region', 'KR-48')
    upsertMeta('name', 'geo.placename', entry?.placename ?? '창원시')
    upsertLink('canonical', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'ko_KR')
    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)

    const id = 'seo-jsonld'
    let script = document.getElementById(id) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLdFor(path, fullTitle, desc)).replace(/</g, '\\u003c')
  }, [pathname, title, description])

  return null
}
