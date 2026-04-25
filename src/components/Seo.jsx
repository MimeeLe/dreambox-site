import { useEffect } from 'react'

const siteName = 'Dreambox'
const defaultImage = '/og-dreambox.jpg'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function Seo({ title, description, path = '/', image = defaultImage, schema }) {
  useEffect(() => {
    const origin = window.location.origin
    const url = new URL(path, origin).href
    const imageUrl = new URL(image, origin).href
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`

    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'fr_FR' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: url })

    const schemaNodeId = 'dreambox-structured-data'
    let schemaNode = document.getElementById(schemaNodeId)

    if (!schemaNode) {
      schemaNode = document.createElement('script')
      schemaNode.id = schemaNodeId
      schemaNode.type = 'application/ld+json'
      document.head.appendChild(schemaNode)
    }

    schemaNode.textContent = JSON.stringify(
      schema ?? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: origin,
        description,
        inLanguage: 'fr-FR',
      },
    )
  }, [description, image, path, schema, title])

  return null
}

export default Seo
