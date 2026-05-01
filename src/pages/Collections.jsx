import {
  CakeSlice,
  Candy,
  Heart,
  HeartHandshake,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
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
    title: 'Événement privé',
    description:
      'Des box pensées pour un moment intime ou symbolique à partager à plusieurs. L’ambiance peut être douce, romantique ou festive selon votre événement.',
    image: collectionCouple,
    alt: 'Collection Dreambox pour cadeau de couple',
    icon: Heart,
  },
  {
    title: 'Groupe d’amies',
    description:
      'Des box cadeaux pour un groupe d’amies, des témoins ou des proches. Elles misent sur les souvenirs, les clins d’œil et les détails qui font sourire.',
    image: collectionBestFriend,
    alt: 'Collection Dreambox pour meilleure amie',
    icon: HeartHandshake,
  },
  {
    title: 'Mariage',
    description:
      'Des idées cadeaux personnalisées pour invités, témoins, EVJF ou souvenirs de mariage. L’univers peut être élégant, symbolique ou festif.',
    image: collectionMariage,
    alt: 'Collection Dreambox pour cadeau de mariage',
    icon: Sparkles,
  },
  {
    title: 'Gourmande',
    description:
      'Des box généreuses pour partager douceurs, pauses réconfortantes et petites attentions à savourer pendant un événement ou un remerciement.',
    image: collectionGourmande,
    alt: 'Box surprise Dreambox dans un univers gourmand',
    icon: Candy,
  },
  {
    title: 'Kawaii',
    description:
      'Des box tendres, colorées et joyeuses pour un groupe qui aime les objets mignons, les détails délicats et les univers visuels marqués.',
    image: collectionKawaii,
    alt: 'Collection Dreambox dans un univers kawaii',
    icon: CakeSlice,
  },
  {
    title: 'Sur-mesure',
    description:
      'Une option idéale si vous avez une idée très précise ou besoin d’être guidé. Dreambox compose une série de box à partir du groupe, de la quantité et de l’occasion.',
    image: collectionSurMesure,
    alt: 'Collection Dreambox pour box entièrement sur-mesure',
    icon: WandSparkles,
  },
]

const collectionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Collections Dreambox',
  url: 'https://dreambox-blindbox.com/collections',
  description:
    'Univers de box cadeaux personnalisées Dreambox pour groupes, événements et cadeaux en quantité.',
}

function Collections() {
  return (
    <main className="page-section collections-page">
      <Seo
        title="Collections Dreambox | Univers de box cadeaux pour groupes"
        description="Découvrez les collections Dreambox : des univers de box cadeaux personnalisées pour anniversaires, mariages, groupes, équipes et événements dès 5 personnes."
        path="/collections"
        schema={collectionsSchema}
      />

      <section className="container collections-hero page-visual-hero">
        <div className="page-hero-copy">
          <p className="section-kicker">Collections Dreambox</p>
          <h1>Des univers de box cadeaux pour groupes et événements</h1>
          <p>
            Choisissez un univers pour guider votre demande : mariage, groupe
            d’amies, événement privé, gourmandise, kawaii ou création
            sur-mesure. Chaque série de box reste personnalisée selon votre
            groupe, votre quantité et votre budget.
          </p>
        </div>

        <div className="page-hero-visual">
          <img
            src={collectionSurMesure}
            alt="Collection Dreambox sur-mesure pour imaginer une box cadeau"
            width="1448"
            height="1086"
            decoding="async"
            fetchPriority="high"
            className="page-hero-image"
          />
          <span className="page-hero-badge">Univers sur-mesure</span>
        </div>
      </section>

      <section className="container seo-content-section collections-intro">
        <div className="seo-text-block">
          <p>
            Les collections Dreambox servent de point de départ pour imaginer
            des box cadeaux plus personnelles. Elles donnent une direction, une
            ambiance et un premier univers, sans enfermer votre demande dans une
            formule toute faite.
          </p>
          <p>
            Chaque collection peut être adaptée selon le groupe, le nombre de
            box, le message à transmettre et le budget souhaité. Vous pouvez
            choisir un univers précis ou simplement vous en inspirer avant de
            créer une demande entièrement sur-mesure.
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
                <span className="card-icon compact" aria-hidden="true">
                  <collection.icon size={18} />
                </span>
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
          Vous pouvez aussi laisser Dreambox imaginer des box entièrement
          sur-mesure à partir du groupe, de l’occasion, de la quantité et du budget
          souhaité.
        </p>
        <Link to="/creer-ma-box" className="button-primary">
          Créer mes box personnalisées
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
