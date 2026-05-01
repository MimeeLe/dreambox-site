import { Feather, HeartHandshake, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import aproposImage from '../assets/apropos-image-optimized.jpg'
import Seo from '../components/Seo'

const values = [
  {
    title: 'Le soin du détail',
    text: 'Couleurs, ambiance, message, goûts, budget : les petits éléments changent la façon dont un cadeau est reçu.',
    icon: Sparkles,
  },
  {
    title: 'La personnalisation',
    text: 'Une box surprise personnalisée doit raconter quelque chose de la personne, pas seulement suivre une tendance.',
    icon: Feather,
  },
  {
    title: 'La simplicité',
    text: 'Vous partagez les informations importantes, Dreambox vous aide à transformer l’idée en cadeau prêt à offrir.',
    icon: HeartHandshake,
  },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos de Dreambox',
  url: 'https://dreambox-blindbox.com/a-propos',
  description: 'Présentation de Dreambox et de sa vision de la box cadeau personnalisée.',
}

function About() {
  return (
    <main className="page-section about-page">
      <Seo
        title="À propos de Dreambox | L’art de la box cadeau personnalisée"
        description="Découvrez l’histoire de Dreambox, une marque pensée pour transformer chaque cadeau en surprise personnalisée, émotionnelle et mémorable."
        path="/a-propos"
        schema={aboutSchema}
      />

      <section className="container about-hero page-visual-hero">
        <div className="page-hero-copy">
          <p className="section-kicker">À propos</p>
          <h1>Dreambox, la box cadeau pensée pour les attentions qui comptent</h1>
          <p>
            Dreambox crée des box surprises personnalisées pour celles et ceux qui
            veulent offrir un cadeau original, sans choisir quelque chose
            d’impersonnel.
          </p>
        </div>

        <div className="page-hero-visual">
          <img
            src={aproposImage}
            alt="Composition Dreambox illustrant une box cadeau attentionnée"
            width="1254"
            height="1254"
            decoding="async"
            fetchPriority="high"
            className="page-hero-image"
          />
          <span className="page-hero-badge">Une attention plus personnelle</span>
        </div>
      </section>

      <section className="container about-story">
        <div className="about-story-card">
          <p className="section-kicker">Notre histoire</p>
          <h2>Une marque née d’une idée simple : mieux offrir</h2>
          <p>
            Trouver le bon cadeau n’est pas toujours facile. On veut faire
            plaisir, marquer le moment, éviter le cadeau trop classique.
            Dreambox est née de cette envie : créer des box cadeaux
            personnalisées, préparées avec soin à partir d’une personne et d’une
            occasion.
          </p>
        </div>

        <div className="about-visual">
          <img
            src={aproposImage}
            alt="Composition de produits pour une box cadeau Dreambox"
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
            className="about-visual-image"
          />
        </div>
      </section>

      <section className="about-promise">
        <div className="container about-promise-content">
          <p className="section-kicker">La promesse Dreambox</p>
          <h2>Notre promesse : une box qui ne ressemble pas à toutes les autres</h2>
          <p>
            Chaque demande est différente. Dreambox ne remplit pas une box au
            hasard : nous cherchons l’univers, le format, les détails et le
            message qui correspondent le mieux à la personne qui va la recevoir.
          </p>
        </div>
      </section>

      <section className="container about-editorial-grid">
        <article>
          <p className="section-kicker">Notre vision</p>
          <h2>Notre vision du cadeau</h2>
          <p>
            Un cadeau réussi ne dépend pas seulement de sa valeur. Il tient
            surtout à l’attention portée à la personne, au contexte et au petit
            détail qui montre que l’on a vraiment pensé à elle.
          </p>
        </article>

        <article>
          <p className="section-kicker">Pourquoi Dreambox existe</p>
          <h2>Rendre le cadeau plus simple, mais plus personnel</h2>
          <p>
            Dreambox existe pour aider celles et ceux qui veulent offrir mieux,
            même lorsqu’ils n’ont pas encore une idée précise. La marque
            transforme quelques informations en une surprise cohérente, prête à
            offrir et adaptée au moment.
          </p>
        </article>

        <article>
          <p className="section-kicker">Plus qu’un coffret</p>
          <h2>Une attention plus personnelle qu’un coffret classique</h2>
          <p>
            Un coffret standard peut être pratique, mais il raconte rarement une
            histoire. Une Dreambox cherche à créer une attention plus sensible,
            pensée autour de la personne qui va la découvrir.
          </p>
        </article>
      </section>

      <section className="container about-values">
        <div className="section-heading">
          <p className="section-kicker">Nos attentions</p>
          <h2>Ce qui guide chaque création</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="info-card" key={value.title}>
              <span className="card-icon compact" aria-hidden="true">
                <value.icon size={18} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-cta">
        <p className="section-kicker">Vous avez quelqu’un en tête ?</p>
        <h2>Créons une box cadeau personnalisée à partir de votre histoire.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box
        </Link>
      </section>
    </main>
  )
}

export default About
