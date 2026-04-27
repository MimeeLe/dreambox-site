import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const pageTitle = 'Box cadeau personnalisée sur-mesure | Dreambox'
const pageDescription =
  'Découvrez la box cadeau personnalisée Dreambox : une surprise sur-mesure imaginée selon la personnalité, l’occasion et l’univers de la personne à gâter.'

const occasions = [
  'anniversaire',
  'couple',
  'mariage',
  'meilleure amie',
  'remerciement',
  'fête',
  'surprise romantique',
]

const steps = [
  {
    title: 'Vous décrivez la personne',
    text: 'Vous partagez son style, ses goûts, l’occasion, votre budget, les détails importants et les petites choses à éviter.',
  },
  {
    title: 'Nous imaginons une box adaptée',
    text: 'Dreambox construit une sélection cohérente autour d’un univers, d’une ambiance et d’une intention claire.',
  },
  {
    title: 'La surprise prend forme',
    text: 'La box cadeau personnalisée devient une attention prête à offrir, pensée pour créer un vrai moment de découverte.',
  },
]

const universes = ['couple', 'best friend', 'mariage', 'gourmande', 'kawaii', 'sur-mesure']

const intentions = [
  {
    title: 'Faire plaisir à une meilleure amie',
    text: 'Une box peut réunir des clins d’œil, des souvenirs et de petites attentions qui parlent à votre relation.',
  },
  {
    title: 'Marquer un anniversaire',
    text: 'L’occasion permet de créer une surprise plus personnelle, adaptée à l’âge, au style et aux envies de la personne.',
  },
  {
    title: 'Offrir une surprise romantique',
    text: 'L’univers peut devenir plus doux, symbolique ou intime pour célébrer une relation ou une date importante.',
  },
  {
    title: 'Remercier quelqu’un',
    text: 'Une Dreambox peut exprimer la gratitude avec plus de chaleur qu’un message ou un cadeau standard.',
  },
  {
    title: 'Célébrer un mariage',
    text: 'La box peut accompagner des mariés, une demande témoin ou un moment autour du grand jour.',
  },
]

const faq = [
  {
    question: 'Qu’est-ce qu’une box cadeau personnalisée ?',
    answer:
      'Une box cadeau personnalisée est une surprise composée selon la personne qui la reçoit, l’occasion, ses goûts, son univers et le message que vous souhaitez faire passer.',
  },
  {
    question: 'Peut-on choisir le thème de la box ?',
    answer:
      'Oui. Vous pouvez indiquer un thème ou un univers préféré, comme couple, best friend, mariage, gourmande, kawaii ou sur-mesure.',
  },
  {
    question: 'Quel budget prévoir pour une Dreambox ?',
    answer:
      'Vous indiquez un budget indicatif au moment de la demande. Dreambox adapte ensuite la sélection pour créer une box cohérente avec votre enveloppe.',
  },
  {
    question: 'Pour quelles occasions peut-on offrir une Dreambox ?',
    answer:
      'Une Dreambox peut être offerte pour un anniversaire, un mariage, une attention de couple, une meilleure amie, un remerciement, une fête ou une surprise romantique.',
  },
  {
    question: 'Quelle est la différence avec une box cadeau classique ?',
    answer:
      'Une box classique suit souvent un thème fixe. Une Dreambox est pensée à partir de votre demande pour correspondre à une personne, une occasion et une intention précise.',
  },
  {
    question: 'Comment créer ma box personnalisée ?',
    answer:
      'Il suffit de remplir le formulaire de création en décrivant la personne à gâter, l’occasion, le budget, l’univers souhaité et les détails importants.',
  },
]

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Box cadeau personnalisée Dreambox',
    provider: {
      '@type': 'Organization',
      name: 'Dreambox',
      url: 'https://dreambox-blindbox.com/',
    },
    serviceType: 'Création de box cadeau personnalisée',
    description:
      'Création de box cadeaux personnalisées selon la personne, l’occasion, l’univers souhaité et le budget.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
]

function BoxCadeauPersonnaliseePage() {
  return (
    <main className="page-section seo-pillar-page">
      <Seo
        title={pageTitle}
        description={pageDescription}
        path="/box-cadeau-personnalisee"
        schema={pageSchema}
      />

      <section className="container seo-hero">
        <p className="section-kicker">Guide Dreambox</p>
        <h1>Box cadeau personnalisée : créez une surprise unique avec Dreambox</h1>
        <p>
          Une box cadeau personnalisée permet d’offrir bien plus qu’un simple
          objet. Dreambox imagine une surprise sur-mesure à partir de la
          personnalité, de l’occasion, du budget et de l’univers de la personne
          à gâter.
        </p>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box personnalisée
        </Link>
      </section>

      <section className="container seo-content-section seo-intro">
        <div className="seo-text-block">
          <p className="section-kicker">Une attention sur-mesure</p>
          <h2>Qu’est-ce qu’une box cadeau personnalisée ?</h2>
          <p>
            Une box cadeau personnalisée est une surprise composée autour d’une
            personne précise. Elle tient compte de ses goûts, de son style, de
            l’occasion, du message à transmettre et de l’ambiance que vous
            souhaitez créer.
          </p>
          <p>
            Avec Dreambox, chaque demande commence par une intention : faire
            plaisir, célébrer, remercier, surprendre ou marquer une date
            importante. La box devient alors un cadeau plus personnel qu’un
            coffret choisi au hasard.
          </p>
        </div>
      </section>

      <section className="container seo-content-section seo-split">
        <div>
          <p className="section-kicker">Comparer</p>
          <h2>Dreambox, coffret classique ou cadeau standard : quelle différence ?</h2>
          <p>
            Un cadeau classique repose souvent sur un seul objet. Un coffret
            standard propose une sélection déjà définie. Dreambox part plutôt de
            la personne à gâter pour imaginer une surprise qui correspond à son
            univers, à l’occasion et à votre intention.
          </p>
        </div>

        <div className="seo-mini-card">
          <h3>Une surprise guidée par votre demande</h3>
          <p>
            Vous donnez les informations importantes, puis Dreambox compose une
            box cohérente, douce et prête à offrir.
          </p>
          <Link to="/personnalisation" className="text-link">
            Voir ce que vous pouvez personnaliser
          </Link>
        </div>
      </section>

      <section className="seo-band">
        <div className="container seo-content-section">
          <div className="section-heading">
            <p className="section-kicker">Pourquoi personnaliser</p>
            <h2>Pourquoi choisir une box cadeau personnalisée ?</h2>
            <p>
              Une box personnalisée donne plus de sens au cadeau. Elle réunit un
              univers, des détails et une ambiance pour créer une surprise plus
              intime, plus mémorable et plus facile à offrir.
            </p>
          </div>

          <div className="seo-feature-grid">
            <article>
              <h3>Une attention plus personnelle</h3>
              <p>
                La box tient compte de la personne, de ses goûts et du message
                que vous voulez transmettre.
              </p>
            </article>
            <article>
              <h3>Un cadeau adapté à l’occasion</h3>
              <p>
                Anniversaire, mariage ou remerciement : chaque contexte change
                la façon d’imaginer la surprise.
              </p>
            </article>
            <article>
              <h3>Une expérience prête à offrir</h3>
              <p>
                Dreambox aide à transformer une idée parfois floue en cadeau
                cohérent, doux et soigné.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container seo-content-section">
        <div className="section-heading">
          <p className="section-kicker">Intentions cadeau</p>
          <h2>Pour qui offrir ce type de cadeau ?</h2>
          <p>
            Une box personnalisée fonctionne particulièrement bien lorsque vous
            voulez faire sentir à quelqu’un que le cadeau a été pensé pour lui,
            et pas simplement choisi dans une liste.
          </p>
        </div>

        <div className="seo-feature-grid intentions-grid">
          {intentions.map((intention) => (
            <article key={intention.title}>
              <h3>{intention.title}</h3>
              <p>{intention.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container seo-content-section seo-split">
        <div>
          <p className="section-kicker">Occasions</p>
          <h2>Pour quelles occasions offrir une Dreambox ?</h2>
          <p>
            La box cadeau personnalisée s’adapte aux grands moments comme aux
            petites attentions. Elle convient dès que vous voulez offrir une
            surprise plus chaleureuse qu’un cadeau standard.
          </p>
        </div>

        <ul className="seo-pill-list" aria-label="Occasions pour offrir une Dreambox">
          {occasions.map((occasion) => (
            <li key={occasion}>{occasion}</li>
          ))}
        </ul>
      </section>

      <section className="container seo-content-section">
        <div className="section-heading">
          <p className="section-kicker">Personnalisation</p>
          <h2>Comment fonctionne la personnalisation ?</h2>
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
        <div className="seo-inline-link">
          <Link to="/personnalisation" className="text-link">
            Vous voulez savoir ce que vous pouvez personnaliser ? Découvrez la page Personnalisation.
          </Link>
        </div>
      </section>

      <section className="seo-band">
        <div className="container seo-content-section seo-split">
          <div>
            <p className="section-kicker">Univers Dreambox</p>
            <h2>Des univers pensés pour chaque personnalité</h2>
            <p>
              Vous pouvez partir d’un univers existant ou demander une création
              totalement libre. L’essentiel est de choisir une direction qui
              ressemble à la personne qui recevra la box.
            </p>
          </div>

          <div>
            <ul className="seo-pill-list" aria-label="Univers de box cadeau Dreambox">
              {universes.map((universe) => (
                <li key={universe}>{universe}</li>
              ))}
            </ul>
            <Link to="/collections" className="text-link seo-list-link">
              Explorer les collections Dreambox
            </Link>
          </div>
        </div>
      </section>

      <section className="container seo-content-section faq-section">
        <div className="section-heading centered">
          <p className="section-kicker">Questions fréquentes</p>
          <h2>Tout savoir avant de créer votre box cadeau personnalisée</h2>
        </div>

        <div className="faq-list">
          {faq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container final-cta seo-final-cta">
        <p className="section-kicker">Prêt à imaginer la surprise ?</p>
        <h2>Créez une box cadeau personnalisée pensée pour la personne à gâter.</h2>
        <Link to="/creer-ma-box" className="button-primary">
          Créer ma box personnalisée
        </Link>
      </section>
    </main>
  )
}

export default BoxCadeauPersonnaliseePage
