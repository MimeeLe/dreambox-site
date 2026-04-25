import { Link } from 'react-router-dom'
import aproposImage from '../assets/apropos-image.png'
import Seo from '../components/Seo'

const values = [
  {
    title: 'Le soin du détail',
    text: 'Couleurs, ambiance, message, goûts, budget : les petits éléments changent la façon dont un cadeau est reçu.',
  },
  {
    title: 'La personnalisation',
    text: 'Une box surprise personnalisée doit raconter quelque chose de la personne, pas seulement suivre une tendance.',
  },
  {
    title: 'La simplicité',
    text: 'Vous partagez les informations importantes, Dreambox vous aide à transformer l’idée en cadeau prêt à offrir.',
  },
]

function About() {
  return (
    <main className="page-section about-page">
      <Seo
        title="À propos de Dreambox"
        description="Dreambox imagine des box surprises personnalisées pour offrir un cadeau original, attentif et prêt à offrir selon chaque occasion."
        path="/a-propos"
      />

      <section className="container about-hero">
        <p className="section-kicker">À propos</p>
        <h1>Dreambox, la box cadeau pensée pour les attentions qui comptent</h1>
        <p>
          Dreambox crée des box surprises personnalisées pour celles et ceux qui
          veulent offrir un cadeau original, sans choisir quelque chose
          d’impersonnel.
        </p>
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

      <section className="container about-values">
        <div className="section-heading">
          <p className="section-kicker">Nos attentions</p>
          <h2>Ce qui guide chaque création</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="info-card" key={value.title}>
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
