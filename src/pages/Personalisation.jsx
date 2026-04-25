import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const steps = [
  {
    title: 'On part de la personne',
    text: 'Ses goûts, son âge, son style, ce qu’elle aime recevoir, ce qu’il vaut mieux éviter.',
  },
  {
    title: 'On tient compte de l’occasion',
    text: 'Anniversaire, mariage, couple, amitié, remerciement ou simple envie de faire plaisir : chaque contexte change la box.',
  },
  {
    title: 'On construit une box cohérente',
    text: 'Univers, ambiance, format, message et budget sont réunis pour créer une box cadeau claire, jolie et prête à offrir.',
  },
]

const customOptions = [
  {
    title: 'L’univers de la box',
    text: 'Couple, mariage, amitié, gourmandise, kawaii ou création libre.',
  },
  {
    title: 'L’ambiance souhaitée',
    text: 'Romantique, cocooning, festive, élégante, drôle, douce ou très personnelle.',
  },
  {
    title: 'Le message personnalisé',
    text: 'Un mot à glisser dans la box pour rendre le cadeau plus intime.',
  },
  {
    title: 'Le budget et le format',
    text: 'Petite attention, box plus généreuse ou cadeau sur-mesure selon votre envie.',
  },
]

function Personalisation() {
  return (
    <main className="page-section personalisation-page">
      <Seo
        title="Personnalisation de box cadeau sur-mesure"
        description="Découvrez comment Dreambox personnalise votre box cadeau selon la personne, l’occasion, l’ambiance, le message et le budget souhaité."
        path="/personnalisation"
      />

      <section className="container personalisation-hero">
        <p className="section-kicker">Personnalisation</p>
        <h1>Une box sur-mesure créée à partir de votre demande</h1>
        <p>
          Dreambox personnalise chaque box selon la personne, l’occasion, votre
          budget et le message que vous voulez faire passer. L’objectif : créer
          un cadeau personnalisé qui semble vraiment choisi pour elle.
        </p>
      </section>

      <section className="container personalisation-section">
        <div className="section-heading">
          <p className="section-kicker">La démarche</p>
          <h2>Comment Dreambox personnalise votre box ?</h2>
        </div>

        <div className="personalisation-steps">
          {steps.map((step, index) => (
            <article className="info-card" key={step.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="personalisation-band">
        <div className="container personalisation-options">
          <div>
            <p className="section-kicker">À personnaliser</p>
            <h2>Ce que vous pouvez personnaliser</h2>
          </div>

          <div className="options-list">
            {customOptions.map((option) => (
              <article key={option.title}>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container support-section">
        <div className="support-card">
          <p className="section-kicker">Accompagnement</p>
          <h2>Pas besoin d’avoir une idée parfaite dès le départ</h2>
          <p>
            Vous pouvez venir avec une occasion, quelques goûts ou même une idée
            encore floue. Dreambox relit votre demande avec attention et vous
            aide à préciser la box avant de la préparer.
          </p>
        </div>
      </section>

      <section className="container personalisation-cta">
        <p className="section-kicker">Vous voulez créer une box personnalisée ?</p>
        <h2>Racontez-nous la personne à gâter, on vous aide à imaginer le bon cadeau.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box
        </Link>
      </section>
    </main>
  )
}

export default Personalisation
