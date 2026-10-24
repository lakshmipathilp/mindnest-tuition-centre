import { useEffect } from 'react'

// Sets the page <title> and meta description for each route (SEO + tab titles).
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — MindNest` : 'MindNest — Changing the way students learn'
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
