import {
  CalendarHeart,
  Gift,
  MessageCircleHeart,
  Palette,
  SlidersHorizontal,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import personalisationHero from '../assets/collection-sur-mesure-optimized.jpg'
import Seo from '../components/Seo'

const customDetails = [
  {
    title: 'Le groupe à gâter',
    text: 'Précisez le nombre de personnes, le profil du groupe, les goûts communs et ce qu’il vaut mieux éviter.',
    icon: UsersRound,
  },
  {
    title: 'L’occasion',
    text: 'Anniversaire, mariage, EVJF, équipe, invités, association ou événement privé : le contexte guide la création.',
    icon: CalendarHeart,
  },
  {
    title: 'L’univers souhaité',
    text: 'Doux, gourmand, kawaii, élégant, drôle, festif, symbolique ou sur-mesure : vous choisissez la direction du groupe.',
    icon: Palette,
  },
  {
    title: 'Le budget',
    text: 'Indiquez une enveloppe par box ou globale pour aider Dreambox à composer une série cohérente.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Le message personnel',
    text: 'Un mot, une attention ou un détail symbolique peut renforcer l’effet cadeau et rendre la surprise plus intime.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Le niveau de surprise',
    text: 'Vous pouvez donner beaucoup de détails ou laisser Dreambox imaginer davantage à partir de quelques indications clés.',
    icon: Gift,
  },
]

const practicalFaq = [
  {
    question: 'Dois-je tout choisir moi-même ?',
    answer:
      'Non. Vous pouvez préciser les éléments importants et laisser Dreambox vous guider sur le reste.',
  },
  {
    question: 'Puis-je donner seulement quelques indications ?',
    answer:
      'Oui. Une occasion, quelques goûts et un budget suffisent déjà pour orienter la création de la box.',
  },
  {
    question: 'Puis-je fixer un budget ?',
    answer:
      'Oui. Le budget indicatif sert de cadre pour imaginer une sélection cohérente et adaptée.',
  },
  {
    question: 'Puis-je demander une ambiance précise ?',
    answer:
      'Oui. Vous pouvez demander une ambiance douce, romantique, gourmande, élégante, drôle ou totalement sur-mesure.',
  },
  {
    question: 'Est-ce que la box reste une surprise ?',
    answer:
      'Oui. Vous choisissez le niveau de précision souhaité : très guidé, ou plus libre pour garder l’effet surprise.',
  },
]

const personalisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: practicalFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function Personalisation() {
  return (
    <main className="page-section personalisation-page">
      <Seo
        title="Personnalisation Dreambox | Box cadeaux en groupe sur-mesure"
        description="Personnalisez vos box Dreambox selon le groupe, l’occasion, la quantité, l’univers souhaité, le budget et le message à transmettre."
        path="/personnalisation"
        schema={personalisationSchema}
      />

      <section className="container personalisation-hero page-visual-hero">
        <div className="page-hero-copy">
          <p className="section-kicker">Personnalisation</p>
          <h1>Personnalisez vos Dreambox pour un groupe ou un événement</h1>
          <p>
            Cette page vous aide à comprendre les éléments que vous pouvez
            préciser avant de créer vos box : le nombre de personnes, le groupe,
            l’occasion, l’univers, le budget, le message et le niveau de
            surprise souhaité.
          </p>
        </div>

        <div className="page-hero-visual">
          <img
            src={personalisationHero}
            alt="Box Dreambox sur-mesure à personnaliser pour un groupe"
            width="1448"
            height="1086"
            decoding="async"
            fetchPriority="high"
            className="page-hero-image"
          />
          <span className="page-hero-badge">Détails, budget, message</span>
        </div>
      </section>

      <section className="personalisation-band">
        <div className="container personalisation-options">
          <div>
            <p className="section-kicker">À personnaliser</p>
            <h2>Ce que vous pouvez personnaliser chez Dreambox</h2>
            <p>
              Plus votre demande est précise, plus les box peuvent être ajustées.
              Mais vous pouvez aussi rester volontairement vague si vous voulez
              laisser Dreambox imaginer une surprise cohérente pour le groupe.
            </p>
          </div>

          <div className="options-list practical-options-list">
            {customDetails.map((detail) => (
              <article key={detail.title}>
                <span className="card-icon compact" aria-hidden="true">
                  <detail.icon size={18} />
                </span>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container support-section">
        <div className="support-card">
          <p className="section-kicker">Inspiration</p>
          <h2>Besoin d’un point de départ ?</h2>
          <p>
            Les collections Dreambox peuvent vous aider à choisir un univers
            avant de remplir votre demande.
          </p>
          <Link to="/collections" className="text-link">
            Besoin d’inspiration ? Voir les collections Dreambox.
          </Link>
        </div>
      </section>

      <section className="container seo-content-section faq-section">
        <div className="section-heading centered">
          <p className="section-kicker">Questions pratiques</p>
          <h2>Personnaliser sans se compliquer</h2>
        </div>

        <div className="faq-list">
          {practicalFaq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container personalisation-cta">
        <p className="section-kicker">Prêt à personnaliser vos box ?</p>
        <h2>Décrivez votre événement, Dreambox vous aide à créer une surprise sur-mesure dès 5 personnes.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer mes box personnalisées
        </Link>
      </section>
    </main>
  )
}

export default Personalisation
