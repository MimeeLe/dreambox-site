import { Helmet } from 'react-helmet-async'

const siteName = 'Dreambox'
const siteUrl = 'https://dreambox-blindbox.com'
const defaultImage = '/og-dreambox.jpg'

function Seo({ title, description, path = '/', image = defaultImage, schema }) {
  const url = new URL(path, siteUrl).href
  const imageUrl = new URL(image, siteUrl).href
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const structuredData = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
          description,
          inLanguage: 'fr-FR',
        },
      ]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((data, index) => (
        <script type="application/ld+json" key={`${data['@type']}-${index}`}>
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo
