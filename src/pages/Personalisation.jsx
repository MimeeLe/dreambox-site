import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const customDetails = [
  {
    title: 'La personne à gâter',
    text: 'Précisez ses goûts, son âge, son style, ses passions, ses habitudes ou ce qu’il vaut mieux éviter.',
  },
  {
    title: 'L’occasion',
    text: 'Anniversaire, mariage, couple, meilleure amie, remerciement, fête ou surprise romantique : le contexte guide la création.',
  },
  {
    title: 'L’univers souhaité',
    text: 'Doux, romantique, gourmand, kawaii, élégant, drôle, symbolique ou sur-mesure : vous choisissez la direction qui lui ressemble.',
  },
  {
    title: 'Le budget',
    text: 'Indiquez une enveloppe pour aider Dreambox à composer une box cohérente, jolie et adaptée à votre demande.',
  },
  {
    title: 'Le message personnel',
    text: 'Un mot, une attention ou un détail symbolique peut renforcer l’effet cadeau et rendre la surprise plus intime.',
  },
  {
    title: 'Le niveau de surprise',
    text: 'Vous pouvez donner beaucoup de détails ou laisser Dreambox imaginer davantage à partir de quelques indications clés.',
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
        title="Personnalisation Dreambox | Créer une box cadeau sur-mesure"
        description="Personnalisez votre Dreambox selon la personne, l’occasion, l’univers souhaité, le budget et le message à transmettre pour créer un cadeau vraiment unique."
        path="/personnalisation"
        schema={personalisationSchema}
      />

      <section className="container personalisation-hero">
        <p className="section-kicker">Personnalisation</p>
        <h1>Personnalisez votre Dreambox dans les moindres détails</h1>
        <p>
          Cette page vous aide à comprendre les éléments que vous pouvez
          préciser avant de créer votre box : la personne à gâter, l’occasion,
          l’univers, le budget, le message et le niveau de surprise souhaité.
        </p>
      </section>

      <section className="personalisation-band">
        <div className="container personalisation-options">
          <div>
            <p className="section-kicker">À personnaliser</p>
            <h2>Ce que vous pouvez personnaliser chez Dreambox</h2>
            <p>
              Plus votre demande est précise, plus la box peut être ajustée.
              Mais vous pouvez aussi rester volontairement vague si vous voulez
              laisser Dreambox imaginer une surprise.
            </p>
          </div>

          <div className="options-list practical-options-list">
            {customDetails.map((detail) => (
              <article key={detail.title}>
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
        <p className="section-kicker">Prêt à personnaliser votre box ?</p>
        <h2>Décrivez les détails importants, Dreambox vous aide à créer une surprise sur-mesure.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box personnalisée
        </Link>
      </section>
    </main>
  )
}

export default Personalisation
