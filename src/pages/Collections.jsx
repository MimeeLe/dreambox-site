import { Link } from 'react-router-dom'
import collectionBestFriend from '../assets/collection-best-friend.png'
import collectionCouple from '../assets/collection-couple.png'
import collectionGourmande from '../assets/collection-gourmande.png'
import collectionKawaii from '../assets/collection-kawaii.png'
import collectionMariage from '../assets/collection-mariage.png'
import collectionSurMesure from '../assets/collection-sur-mesure.png'
import imageCatalogue from '../assets/image-catalogue.png'
import Seo from '../components/Seo'

const collections = [
  {
    title: 'Couple',
    description:
      'Une box surprise personnalisée pour un anniversaire de couple, la Saint-Valentin, une date importante ou une attention spontanée.',
    image: collectionCouple,
  },
  {
    title: 'Best Friend',
    description:
      'Une box cadeau pour une meilleure amie : souvenirs, clins d’œil, petites attentions et détails qui font sourire.',
    image: collectionBestFriend,
  },
  {
    title: 'Mariage',
    description:
      'Une idée cadeau personnalisée pour des mariés, une demande témoin, un EVJF ou une attention autour du grand jour.',
    image: collectionMariage,
  },
  {
    title: 'Gourmande',
    description:
      'Une box cadeau généreuse autour du plaisir, du réconfort et des petites douceurs à savourer.',
    image: collectionGourmande,
  },
  {
    title: 'Kawaii',
    description:
      'Une box surprise tendre et colorée, avec un univers mignon mais soigné, sans tomber dans l’enfantin.',
    image: collectionKawaii,
  },
  {
    title: 'Sur-mesure',
    description:
      'Vous avez une idée précise ou aucune idée du tout ? Dreambox compose une box sur-mesure à partir de votre demande.',
    image: collectionSurMesure,
  },
]

function Collections() {
  return (
    <main className="page-section collections-page">
      <Seo
        title="Collections de box cadeaux personnalisées"
        description="Explorez les collections Dreambox: box couple, meilleure amie, mariage, gourmande, kawaii ou sur-mesure. Chaque box cadeau est personnalisée selon votre demande."
        path="/collections"
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

      <section className="container collections-grid-section">
        <div className="collections-page-grid">
          {collections.map((collection) => (
            <article className="collection-preview-card" key={collection.title}>
              <div className="collection-preview-visual">
                <img
                  src={collection.image}
                  alt={`Collection Dreambox ${collection.title}`}
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
        <h2>Décrivez la personne à gâter, Dreambox vous aidera à choisir la bonne box cadeau.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer une box sur-mesure
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

        <div className="catalog-preview" aria-hidden="true">
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
