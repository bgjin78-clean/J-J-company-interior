import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    const frame = requestAnimationFrame(() => {
      if (!id) {
        window.scrollTo(0, 0)
        return
      }
      const target = document.getElementById(id)
      if (target) target.scrollIntoView({ block: 'start' })
      else window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
