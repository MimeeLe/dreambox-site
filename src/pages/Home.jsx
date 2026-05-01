import {
  BookOpen,
  CalendarHeart,
  Compass,
  Gift,
  HeartHandshake,
  LockKeyhole,
  PackageCheck,
  Send,
  SlidersHorizontal,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import collectionCelebrer from '../assets/collection-celebrer-optimized.jpg'
import collectionFairePlaisir from '../assets/collection-faire-plaisir-optimized.jpg'
import collectionRemercier from '../assets/collection-remercier-optimized.jpg'
import dreamboxHero from '../assets/dreambox-hero-optimized.jpg'
import Seo from '../components/Seo'

const steps = [
  {
    title: 'Vous nous racontez l’événement',
    text: 'Indiquez l’occasion, le nombre de personnes, votre budget et l’ambiance souhaitée pour vos box.',
    icon: Gift,
  },
  {
    title: 'Dreambox prépare des box en quantité',
    text: 'Nous imaginons une sélection cohérente pour votre groupe, avec une même ambiance et des variations à découvrir.',
    icon: WandSparkles,
  },
  {
    title: 'Vous offrez une surprise à partager',
    text: 'Chaque invité ou participant reçoit une box pensée pour l’événement, à partir de 5 personnes.',
    icon: PackageCheck,
  },
]

const collections = [
  {
    title: 'Pour célébrer en groupe',
    text: 'Des box cadeaux pour marquer un anniversaire, un mariage, une réussite ou une date importante avec plusieurs invités.',
    image: collectionCelebrer,
    alt: 'Box Dreambox pour célébrer un anniversaire ou un moment important en groupe',
    icon: CalendarHeart,
  },
  {
    title: 'Pour remercier une équipe',
    text: 'Des attentions personnalisées pour remercier plusieurs personnes avec plus de chaleur qu’un message classique.',
    image: collectionRemercier,
    alt: 'Box Dreambox pour offrir un remerciement attentionné à un groupe',
    icon: HeartHandshake,
  },
  {
    title: 'Pour faire plaisir à plusieurs',
    text: 'Des box surprises pour un groupe d’amies, une famille, une équipe ou les invités d’un événement.',
    image: collectionFairePlaisir,
    alt: 'Box surprise Dreambox pour faire plaisir à plusieurs personnes',
    icon: Sparkles,
  },
]

const reasons = [
  {
    title: 'Des cadeaux de groupe plus personnels',
    text: 'Dreambox imagine des box surprises à partir de votre événement, du nombre de personnes et de l’attention que vous souhaitez offrir.',
    icon: HeartHandshake,
  },
  {
    title: 'Une quantité adaptée à votre budget',
    text: 'Vous indiquez une fourchette et le nombre de box souhaitées, puis nous créons une sélection cohérente pour le groupe.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Une attention pensée pour l’événement',
    text: 'Chaque box est conçue pour être belle à découvrir, facile à distribuer et agréable à recevoir.',
    icon: Gift,
  },
]

const occasions = [
  {
    title: 'Anniversaire',
    text: 'Des box pour les invités, les proches ou un groupe réuni autour du moment à célébrer.',
    icon: CalendarHeart,
  },
  {
    title: 'Mariage',
    text: 'Des attentions élégantes pour invités, témoins, EVJF ou souvenirs du grand jour.',
    icon: Sparkles,
  },
  {
    title: 'Événement privé',
    text: 'Un univers doux, festif ou symbolique pour un moment partagé à plusieurs.',
    icon: HeartHandshake,
  },
  {
    title: 'Groupe d’amies',
    text: 'Des clins d’œil, des souvenirs et une ambiance commune pour un groupe soudé.',
    icon: Gift,
  },
  {
    title: 'Remerciement',
    text: 'Une façon plus chaleureuse de remercier une équipe, des invités ou des proches.',
    icon: PackageCheck,
  },
  {
    title: 'Entreprise ou association',
    text: 'Des box pour collaborateurs, partenaires, membres ou participants à un événement.',
    icon: WandSparkles,
  },
]

const internalLinks = [
  {
    title: 'Explorer les collections',
    text: 'Trouvez un univers pour guider votre demande.',
    path: '/collections',
    icon: Compass,
  },
  {
    title: 'Comprendre la personnalisation',
    text: 'Découvrez les détails que vous pouvez préciser.',
    path: '/personnalisation',
    icon: SlidersHorizontal,
  },
  {
    title: 'Lire le guide cadeau',
    text: 'Voir pourquoi une box personnalisée est une bonne idée.',
    path: '/box-cadeau-personnalisee',
    icon: BookOpen,
  },
  {
    title: 'Créer vos box',
    text: 'Passez à l’action avec le formulaire groupe Dreambox.',
    path: '/creer-ma-box',
    icon: Send,
  },
]

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dreambox',
    url: 'https://dreambox-blindbox.com/',
    description: 'Dreambox crée des box cadeaux personnalisées en quantité pour groupes et événements.',
    sameAs: ['https://www.instagram.com/dreambox_fr/'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dreambox',
    url: 'https://dreambox-blindbox.com/',
  },
]

function Home() {
  return (
    <main className="home-page">
      <Seo
        title="Dreambox | Box cadeaux personnalisées pour groupes et événements"
        description="Créez des box cadeaux personnalisées en quantité avec Dreambox : anniversaires, mariages, équipes, invités et événements à partir de 5 personnes."
        path="/"
        schema={homeSchema}
      />

      <section className="container hero-section home-hero">
        <div className="hero-copy">
          <p className="section-kicker">Box surprises personnalisées dès 5 personnes</p>
          <h1>Des box cadeaux personnalisées pour groupes et événements</h1>
          <p>
            Dreambox crée des box cadeaux personnalisées en quantité pour les
            anniversaires, mariages, équipes, invités et événements privés ou
            professionnels.
          </p>
          <Link to="/creer-ma-box" className="button-primary">
            Créer mes box
          </Link>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={dreamboxHero}
              alt="Box surprise personnalisée Dreambox"
              width="1254"
              height="1254"
              decoding="async"
              fetchPriority="high"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="container blindbox-concept-section">
        <div className="blindbox-concept-card">
          <span className="card-icon" aria-hidden="true">
            <LockKeyhole size={20} />
          </span>
          <div>
            <p className="section-kicker">Le concept blindbox</p>
            <h2>Une même ambiance, plusieurs surprises à découvrir</h2>
            <p>
              Dreambox reprend le principe de la blindbox pour les événements :
              vous choisissez un univers, une occasion, une quantité et un
              budget, mais le contenu exact de chaque box reste secret jusqu’à
              l’ouverture.
            </p>
            <p>
              L’idée est simple : plusieurs box peuvent être créées autour d’un
              même thème, tout en contenant des variations différentes. Chaque
              personne reçoit ainsi un cadeau cohérent avec l’ambiance de votre
              événement, mais avec sa propre surprise à découvrir.
            </p>
            <p>
              Ce n’est pas un cadeau totalement au hasard : c’est une surprise
              pensée, préparée et guidée par vos envies.
            </p>
          </div>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-heading">
          <p className="section-kicker">Comment ça marche</p>
          <h2>Comment créer vos box cadeaux personnalisées ?</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="info-card" key={step.title}>
              <span className="card-icon" aria-hidden="true">
                <step.icon size={20} />
              </span>
              <span className="card-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section collections-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-kicker">Collections</p>
            <h2>Des idées de box pour trouver le bon univers</h2>
            <p>
              Mariage, anniversaire, groupe d’amies, équipe ou événement
              sur-mesure : les collections Dreambox vous aident à choisir une
              direction, puis les box sont adaptées à votre quantité.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((collection) => (
              <article className="collection-card" key={collection.title}>
                <div className="collection-visual">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    decoding="async"
                    className="collection-image"
                  />
                </div>
                <div className="collection-card-copy">
                  <span className="card-icon compact" aria-hidden="true">
                    <collection.icon size={18} />
                  </span>
                  <h3>{collection.title}</h3>
                  <p>{collection.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container seo-link-card-section">
        <div className="seo-link-card">
          <div>
            <p className="section-kicker">Guide cadeau</p>
            <h2>Des box cadeaux personnalisées, pensées pour faire plaisir à plusieurs</h2>
            <p>
              Avec Dreambox, vos box sont imaginées autour d’un événement,
              d’un groupe et d’un univers. Contrairement à un coffret cadeau
              classique, l’idée n’est pas seulement d’offrir un objet, mais de
              créer une surprise cohérente pour chaque participant.
            </p>
          </div>
          <Link to="/box-cadeau-personnalisee" className="text-link">
            En savoir plus sur les box cadeaux personnalisées
          </Link>
        </div>
      </section>

      <section className="container home-section why-section">
        <div className="section-heading">
          <p className="section-kicker">Pourquoi Dreambox</p>
          <h2>Pourquoi choisir des box surprises personnalisées ?</h2>
          <p>
            Dreambox imagine des box cadeaux personnalisées pour transformer un
            événement en véritable moment de surprise. Chaque série est pensée
            selon le nombre de personnes, l’occasion, l’univers souhaité et le
            message à transmettre.
          </p>
        </div>

        <div className="why-list">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <h3>
                <span className="inline-icon" aria-hidden="true">
                  <reason.icon size={18} />
                </span>
                {reason.title}
              </h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section occasions-home-section">
        <div className="container occasions-home-layout">
          <div className="occasions-home-copy">
            <p className="section-kicker">Occasions</p>
            <h2>Pour quels événements offrir des Dreambox ?</h2>
            <p>
              Dreambox accompagne les moments où vous voulez offrir plusieurs
              attentions cohérentes : au minimum 5 personnes, avec une ambiance
              commune et une part de surprise pour chacune.
            </p>
            <Link to="/creer-ma-box" className="text-link">
              Créer des box pour votre événement
            </Link>
          </div>

          <div className="occasion-card-grid" aria-label="Occasions pour offrir une Dreambox">
            {occasions.map((occasion) => (
              <article className="occasion-card" key={occasion.title}>
                <span className="card-icon compact" aria-hidden="true">
                  <occasion.icon size={18} />
                </span>
                <h3>{occasion.title}</h3>
                <p>{occasion.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-section internal-links-section">
        <div className="section-heading">
          <p className="section-kicker">Votre parcours</p>
          <h2>Avancer selon votre besoin</h2>
        </div>

        <div className="internal-link-grid">
          {internalLinks.map((link) => (
            <Link to={link.path} className="internal-link-card" key={link.path}>
              <span className="card-icon compact" aria-hidden="true">
                <link.icon size={18} />
              </span>
              <h3>{link.title}</h3>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container final-cta">
        <p className="section-kicker">Vous avez un événement en tête ?</p>
        <h2>Créons des box sur-mesure pour votre groupe, dès 5 personnes.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer mes box personnalisées
        </Link>
      </section>
    </main>
  )
}

export default Home
