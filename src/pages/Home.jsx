import { Link } from 'react-router-dom'
import collectionCelebrer from '../assets/collection-celebrer-optimized.jpg'
import collectionFairePlaisir from '../assets/collection-faire-plaisir-optimized.jpg'
import collectionRemercier from '../assets/collection-remercier-optimized.jpg'
import dreamboxHero from '../assets/dreambox-hero-optimized.jpg'
import Seo from '../components/Seo'

const steps = [
  {
    title: 'Vous nous racontez le cadeau',
    text: 'Indiquez l’occasion, la personne à gâter, votre budget et les détails importants : goûts, couleurs, message, ambiance.',
  },
  {
    title: 'Dreambox prépare une sélection sur-mesure',
    text: 'Nous imaginons une box cadeau cohérente avec votre demande, sans formule toute faite ni cadeau choisi au hasard.',
  },
  {
    title: 'Vous offrez une vraie surprise',
    text: 'La box est pensée pour créer un moment personnel, que ce soit pour un anniversaire, un mariage, une amie ou une attention de couple.',
  },
]

const collections = [
  {
    title: 'Pour célébrer',
    text: 'Une box cadeau pour marquer un anniversaire, un mariage, une réussite ou une date importante.',
    image: collectionCelebrer,
    alt: 'Box Dreambox pour célébrer un anniversaire ou un moment important',
  },
  {
    title: 'Pour remercier',
    text: 'Un cadeau personnalisé pour dire merci avec plus de chaleur qu’un message classique.',
    image: collectionRemercier,
    alt: 'Box Dreambox pour offrir un remerciement attentionné',
  },
  {
    title: 'Pour faire plaisir',
    text: 'Une box surprise pour une amie, un proche ou une personne qui mérite une attention particulière.',
    image: collectionFairePlaisir,
    alt: 'Box surprise Dreambox pour faire plaisir à un proche',
  },
]

const reasons = [
  {
    title: 'Un cadeau plus personnel',
    text: 'Dreambox imagine une box surprise personnalisée à partir de la personne, de l’occasion et de l’attention que vous souhaitez offrir.',
  },
  {
    title: 'Une box adaptée à votre budget',
    text: 'Vous indiquez une fourchette, et nous créons une sélection cohérente, soignée et adaptée à votre demande.',
  },
  {
    title: 'Une attention pensée pour être offerte',
    text: 'Chaque box cadeau est conçue pour être belle à découvrir, agréable à recevoir et facile à offrir.',
  },
]

const occasions = [
  'Anniversaire',
  'Mariage',
  'Couple',
  'Meilleure amie',
  'Remerciement',
  'Surprise romantique',
]

const internalLinks = [
  {
    title: 'Explorer les collections',
    text: 'Trouvez un univers pour guider votre demande.',
    path: '/collections',
  },
  {
    title: 'Comprendre la personnalisation',
    text: 'Découvrez les détails que vous pouvez préciser.',
    path: '/personnalisation',
  },
  {
    title: 'Lire le guide cadeau',
    text: 'Voir pourquoi une box personnalisée est une bonne idée.',
    path: '/box-cadeau-personnalisee',
  },
  {
    title: 'Créer votre box',
    text: 'Passez à l’action avec le formulaire Dreambox.',
    path: '/creer-ma-box',
  },
]

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dreambox',
    url: 'https://dreambox-blindbox.com/',
    description: 'Dreambox crée des box cadeaux personnalisées et des surprises sur-mesure.',
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
        title="Dreambox | Box cadeau personnalisée et surprise sur-mesure"
        description="Créez une box cadeau personnalisée avec Dreambox : une surprise sur-mesure, pensée selon la personnalité, l’occasion et l’univers de la personne à gâter."
        path="/"
        schema={homeSchema}
      />

      <section className="container hero-section home-hero">
        <div className="hero-copy">
          <p className="section-kicker">Box surprises personnalisées</p>
          <h1>La box surprise personnalisée pour offrir un cadeau vraiment unique</h1>
          <p>
            Dreambox crée des box cadeaux personnalisées pour célébrer un
            anniversaire, un mariage, une amitié, un couple ou toute occasion
            spéciale.
          </p>
          <Link to="/creer-ma-box" className="button-primary">
            Créer ma box
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

      <section className="container home-section">
        <div className="section-heading">
          <p className="section-kicker">Comment ça marche</p>
          <h2>Comment créer votre box cadeau personnalisée ?</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="info-card" key={step.title}>
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
              Couple, mariage, amitié, gourmandise ou box sur-mesure : les
              collections Dreambox vous aident à choisir une direction, puis
              chaque box est personnalisée selon votre demande.
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
            <h2>Une box cadeau personnalisée, pensée pour faire vraiment plaisir</h2>
            <p>
              Avec Dreambox, chaque box est imaginée autour d’une personne,
              d’une occasion et d’un univers. Contrairement à un coffret cadeau
              classique, l’idée n’est pas seulement d’offrir un objet, mais de
              créer une surprise qui ressemble à la personne qui la reçoit.
            </p>
          </div>
          <Link to="/box-cadeau-personnalisee" className="text-link">
            En savoir plus sur la box cadeau personnalisée
          </Link>
        </div>
      </section>

      <section className="container home-section why-section">
        <div className="section-heading">
          <p className="section-kicker">Pourquoi Dreambox</p>
          <h2>Pourquoi choisir une box surprise personnalisée ?</h2>
          <p>
            Dreambox imagine des box cadeaux personnalisées pour transformer une
            attention en véritable moment de surprise. Chaque box est pensée
            selon la personne, l’occasion, l’univers souhaité et le message à
            transmettre.
          </p>
        </div>

        <div className="why-list">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section occasions-home-section">
        <div className="container seo-split">
          <div>
            <p className="section-kicker">Occasions</p>
            <h2>Pour quelles occasions offrir une Dreambox ?</h2>
            <p>
              Une Dreambox accompagne les moments importants comme les petites
              attentions du quotidien, dès que vous voulez offrir une surprise
              plus personnelle qu’un cadeau classique.
            </p>
          </div>

          <ul className="seo-pill-list" aria-label="Occasions pour offrir une Dreambox">
            {occasions.map((occasion) => (
              <li key={occasion}>{occasion}</li>
            ))}
          </ul>
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
              <h3>{link.title}</h3>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container final-cta">
        <p className="section-kicker">Vous avez une occasion en tête ?</p>
        <h2>Créons une box sur-mesure pour la personne que vous voulez gâter.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box personnalisée
        </Link>
      </section>
    </main>
  )
}

export default Home
