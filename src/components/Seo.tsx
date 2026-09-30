import { useEffect } from 'react'
import { pageTitle } from '../data/site'

export function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = pageTitle(title)
    if (!description) return
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  }, [title, description])

  return null
}
