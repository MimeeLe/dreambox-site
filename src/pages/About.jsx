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
    text: 'Une série de box surprises doit raconter quelque chose du groupe et de l’événement, pas seulement suivre une tendance.',
    icon: Feather,
  },
  {
    title: 'La simplicité',
    text: 'Vous partagez les informations importantes, Dreambox vous aide à transformer l’idée en cadeaux prêts à offrir.',
    icon: HeartHandshake,
  },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos de Dreambox',
  url: 'https://dreambox-blindbox.com/a-propos',
  description: 'Présentation de Dreambox et de sa vision des box cadeaux personnalisées pour groupes.',
}

function About() {
  return (
    <main className="page-section about-page">
      <Seo
        title="À propos de Dreambox | Box cadeaux personnalisées pour événements"
        description="Découvrez l’histoire de Dreambox, une marque pensée pour transformer les cadeaux de groupe en surprises personnalisées, émotionnelles et mémorables."
        path="/a-propos"
        schema={aboutSchema}
      />

      <section className="container about-hero page-visual-hero">
        <div className="page-hero-copy">
          <p className="section-kicker">À propos</p>
          <h1>Dreambox, les box cadeaux pensées pour les attentions de groupe</h1>
          <p>
            Dreambox crée des box surprises personnalisées pour les groupes,
            les invités et les événements, dès 5 personnes, sans tomber dans le
            cadeau impersonnel.
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
          <span className="page-hero-badge">Dès 5 personnes</span>
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
            personnalisées, préparées avec soin à partir d’un groupe, d’une
            quantité et d’une occasion.
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
          <h2>Notre promesse : des box qui ne ressemblent pas à toutes les autres</h2>
          <p>
            Chaque demande est différente. Dreambox ne remplit pas des box au
            hasard : nous cherchons l’univers, le format, les détails et le
            message qui correspondent le mieux au groupe qui va les recevoir.
          </p>
        </div>
      </section>

      <section className="container about-editorial-grid">
        <article>
          <p className="section-kicker">Notre vision</p>
          <h2>Notre vision du cadeau</h2>
          <p>
            Un cadeau réussi ne dépend pas seulement de sa valeur. Il tient
            surtout à l’attention portée au groupe, au contexte et au petit
            détail qui montre que l’on a vraiment pensé à l’événement.
          </p>
        </article>

        <article>
          <p className="section-kicker">Pourquoi Dreambox existe</p>
          <h2>Rendre le cadeau plus simple, mais plus personnel</h2>
          <p>
            Dreambox existe pour aider celles et ceux qui veulent offrir mieux,
            même lorsqu’ils n’ont pas encore une idée précise. La marque
            transforme quelques informations en surprises cohérentes, prêtes à
            offrir et adaptées au moment.
          </p>
        </article>

        <article>
          <p className="section-kicker">Plus qu’un coffret</p>
          <h2>Une attention plus personnelle qu’un coffret classique</h2>
          <p>
            Un coffret standard peut être pratique, mais il raconte rarement une
            histoire. Une Dreambox cherche à créer une attention plus sensible,
            pensée autour du groupe qui va la découvrir.
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
        <p className="section-kicker">Vous avez un événement en tête ?</p>
        <h2>Créons des box cadeaux personnalisées à partir de votre groupe.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer mes box
        </Link>
      </section>
    </main>
  )
}

export default About
