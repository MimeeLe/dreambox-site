import { Link } from 'react-router-dom'
import collectionBestFriend from '../assets/collection-best-friend-optimized.jpg'
import collectionCouple from '../assets/collection-couple-optimized.jpg'
import collectionGourmande from '../assets/collection-gourmande-optimized.jpg'
import collectionKawaii from '../assets/collection-kawaii-optimized.jpg'
import collectionMariage from '../assets/collection-mariage-optimized.jpg'
import collectionSurMesure from '../assets/collection-sur-mesure-optimized.jpg'
import imageCatalogue from '../assets/image-catalogue-optimized.jpg'
import Seo from '../components/Seo'

const collections = [
  {
    title: 'Couple',
    description:
      'Une box pensée pour un conjoint, une relation naissante ou une date symbolique. Elle crée une ambiance douce, intime ou romantique, idéale pour un anniversaire de couple, la Saint-Valentin ou une attention spontanée.',
    image: collectionCouple,
    alt: 'Collection Dreambox pour cadeau de couple',
  },
  {
    title: 'Best Friend',
    description:
      'Une box cadeau pour une meilleure amie, une sœur de cœur ou une personne très proche. Elle mise sur les souvenirs, les clins d’œil et les détails qui font sourire, parfaite pour un anniversaire ou un remerciement.',
    image: collectionBestFriend,
    alt: 'Collection Dreambox pour meilleure amie',
  },
  {
    title: 'Mariage',
    description:
      'Une idée cadeau personnalisée pour des mariés, une demande témoin ou un EVJF. L’univers peut être élégant, symbolique ou festif pour accompagner un moment important sans tomber dans le cadeau attendu.',
    image: collectionMariage,
    alt: 'Collection Dreambox pour cadeau de mariage',
  },
  {
    title: 'Gourmande',
    description:
      'Une box généreuse pour une personne qui aime les douceurs, les pauses réconfortantes et les petites attentions à savourer. Elle fonctionne très bien pour faire plaisir, remercier ou offrir un moment cocooning.',
    image: collectionGourmande,
    alt: 'Box surprise Dreambox dans un univers gourmand',
  },
  {
    title: 'Kawaii',
    description:
      'Une box tendre, colorée et joyeuse pour une personne qui aime les objets mignons, les détails délicats et les univers visuels marqués. Elle apporte une surprise légère, douce et pleine de bonne humeur.',
    image: collectionKawaii,
    alt: 'Collection Dreambox dans un univers kawaii',
  },
  {
    title: 'Sur-mesure',
    description:
      'Une option idéale si vous avez une idée très précise ou, au contraire, besoin d’être guidé. Dreambox compose une box à partir de la personne, de l’occasion, de votre budget et de l’effet recherché.',
    image: collectionSurMesure,
    alt: 'Collection Dreambox pour box entièrement sur-mesure',
  },
]

const collectionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Collections Dreambox',
  url: 'https://dreambox-blindbox.com/collections',
  description:
    'Univers de box cadeaux personnalisées Dreambox pour différentes occasions et personnalités.',
}

function Collections() {
  return (
    <main className="page-section collections-page">
      <Seo
        title="Collections Dreambox | Univers de box cadeaux personnalisées"
        description="Découvrez les collections Dreambox : des univers de box cadeaux personnalisées pour un anniversaire, un couple, un mariage, une meilleure amie ou une surprise sur-mesure."
        path="/collections"
        schema={collectionsSchema}
      />

      <section className="container collections-hero">
        <p className="section-kicker">Collections Dreambox</p>
        <h1>Des univers de box cadeaux pour chaque occasion</h1>
        <p>
          Choisissez un univers pour guider votre demande : couple, meilleure
          amie, mariage, gourmandise, kawaii ou création sur-mesure. Chaque box
          reste personnalisée selon la personne, l’occasion et votre budget.
        </p>
      </section>

      <section className="container seo-content-section collections-intro">
        <div className="seo-text-block">
          <p>
            Les collections Dreambox servent de point de départ pour imaginer
            une box cadeau plus personnelle. Elles donnent une direction, une
            ambiance et un premier univers, sans enfermer votre demande dans une
            formule toute faite.
          </p>
          <p>
            Chaque collection peut être adaptée selon la personne à gâter, le
            message à transmettre et le budget souhaité. Vous pouvez choisir un
            univers précis ou simplement vous en inspirer avant de créer une box
            entièrement sur-mesure.
          </p>
          <Link to="/personnalisation" className="text-link">
            Voir ce que vous pouvez personnaliser
          </Link>
        </div>
      </section>

      <section className="container collections-grid-section">
        <div className="collections-page-grid">
          {collections.map((collection) => (
            <article className="collection-preview-card" key={collection.title}>
              <div className="collection-preview-visual">
                <img
                  src={collection.image}
                  alt={collection.alt}
                  width="1448"
                  height="1086"
                  loading="lazy"
                  decoding="async"
                  className="collection-preview-image"
                />
              </div>
              <div>
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container collections-cta">
        <p className="section-kicker">Vous hésitez entre plusieurs univers ?</p>
        <h2>Vous ne savez pas quel univers choisir ?</h2>
        <p>
          Vous pouvez aussi laisser Dreambox imaginer une box entièrement
          sur-mesure à partir de la personne, de l’occasion et du budget
          souhaité.
        </p>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box personnalisée
        </Link>
      </section>

      <section className="container collections-catalog">
        <div className="catalog-copy">
          <p className="section-kicker">Catalogue Dreambox</p>
          <h2>Retrouvez l’univers Dreambox dans notre catalogue PDF.</h2>
          <p>
            Feuilletez le catalogue pour découvrir les inspirations, les univers
            et l’esprit des box cadeaux Dreambox en un seul document.
          </p>

          <div className="catalog-actions">
            <a
              href="/catalogue-dreambox.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Consulter le catalogue
            </a>
            <a href="/catalogue-dreambox.pdf" download className="catalog-link">
              Télécharger le PDF
            </a>
          </div>
        </div>

        <div className="catalog-preview">
          <div className="catalog-preview-back" />
          <a
            href="/catalogue-dreambox.pdf"
            target="_blank"
            rel="noreferrer"
            className="catalog-cover"
          >
            <img
              src={imageCatalogue}
              alt="Aperçu du catalogue Dreambox"
              width="635"
              height="921"
              loading="lazy"
              decoding="async"
              className="catalog-cover-image"
            />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Collections
