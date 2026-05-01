import { useForm, ValidationError } from '@formspree/react'
import { Send } from 'lucide-react'
import Seo from '../components/Seo'

const formFaq = [
  {
    question: 'Que se passe-t-il après l’envoi du formulaire ?',
    answer:
      'Dreambox relit votre demande, précise les détails si nécessaire et revient vers vous avant de préparer la box.',
  },
  {
    question: 'Dois-je connaître exactement le contenu de la box ?',
    answer:
      'Non. Vous pouvez donner une direction générale et garder une part de surprise dans la sélection finale.',
  },
  {
    question: 'Puis-je préciser un budget ?',
    answer:
      'Oui. Le budget indicatif aide à imaginer une box adaptée à votre demande et à l’occasion.',
  },
  {
    question: 'Comment indiquer les goûts de la personne ?',
    answer:
      'Ajoutez ses couleurs préférées, ses passions, son style, ce qu’elle aime recevoir et les détails à éviter.',
  },
]

const createBoxSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Créer ma box Dreambox',
    url: 'https://dreambox-blindbox.com/creer-ma-box',
    description: 'Formulaire pour créer une box cadeau personnalisée Dreambox.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: formFaq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
]

function CreateBox() {
  const [state, handleSubmit] = useForm('xnjwqkyw')

  return (
    <main className="page-section create-box-page">
      <Seo
        title="Créer ma box cadeau personnalisée | Dreambox"
        description="Remplissez le formulaire Dreambox pour créer une box cadeau personnalisée selon l’occasion, la personne à gâter, le style souhaité et votre budget."
        path="/creer-ma-box"
        schema={createBoxSchema}
      />

      <div className="container create-box-layout">
        <section className="create-box-intro">
          <p className="section-kicker">Créer ma box</p>
          <h1>Créez votre box surprise personnalisée</h1>
          <p>
            Remplissez ce formulaire avec les informations que vous avez :
            occasion, personne à gâter, budget, goûts, message ou ambiance
            souhaitée. Dreambox reviendra ensuite vers vous pour préciser la
            demande avant de préparer votre box cadeau.
          </p>
          <p>
            Quelques informations suffisent pour imaginer une box adaptée à la
            personne que vous souhaitez gâter. Vous pouvez être très précis ou
            laisser plus de liberté à Dreambox.
          </p>
        </section>

        {state.succeeded ? (
          <div className="dreambox-form form-status" role="status">
            <h2>Merci, votre demande a bien été envoyée.</h2>
            <p>
              Dreambox reviendra vers vous par email pour affiner votre demande,
              confirmer les détails et imaginer une box adaptée à votre budget.
            </p>
          </div>
        ) : (
          <form className="dreambox-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nouvelle demande Dreambox" />
            <input type="hidden" name="source" value="Formulaire créer ma box" />

            <div className="form-grid">
              <label className="form-field">
                <span>Prénom</span>
                <input type="text" name="firstName" placeholder="Votre prénom" autoComplete="given-name" />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  autoComplete="email"
                  required
                />
                <ValidationError className="form-error" field="email" errors={state.errors} />
              </label>

              <label className="form-field">
                <span>Occasion</span>
                <input
                  type="text"
                  name="occasion"
                  placeholder="Anniversaire, mariage, remerciement, Saint-Valentin..."
                  required
                />
                <small>Indiquez le contexte pour guider l’ambiance de la box.</small>
                <ValidationError className="form-error" field="occasion" errors={state.errors} />
              </label>

              <label className="form-field">
                <span>Pour qui est la box ?</span>
                <input
                  type="text"
                  name="recipient"
                  placeholder="Ma meilleure amie, mon conjoint, ma sœur, une collègue..."
                />
              </label>

              <label className="form-field">
                <span>Taille souhaitée</span>
                <select name="boxSize" defaultValue="">
                  <option value="" disabled>
                    Choisir une taille
                  </option>
                  <option value="petite">Petite attention</option>
                  <option value="classique">Box cadeau classique</option>
                  <option value="grande">Grande box surprise</option>
                  <option value="indecise">Je ne sais pas encore</option>
                </select>
              </label>

              <label className="form-field">
                <span>Univers préféré</span>
                <select name="universe" defaultValue="">
                  <option value="" disabled>
                    Choisir un univers
                  </option>
                  <option value="couple">Couple</option>
                  <option value="best-friend">Best Friend</option>
                  <option value="mariage">Mariage</option>
                  <option value="gourmande">Gourmande</option>
                  <option value="kawaii">Kawaii</option>
                  <option value="sur-mesure">Sur-mesure</option>
                  <option value="indecise">Je ne sais pas encore</option>
                </select>
                <small>Choisissez un univers ou laissez Dreambox proposer une direction.</small>
              </label>

              <label className="form-field">
                <span>Ambiance souhaitée</span>
                <input
                  type="text"
                  name="mood"
                  placeholder="Romantique, cocooning, festive, élégante, drôle..."
                />
              </label>

              <label className="form-field">
                <span>Budget indicatif</span>
                <input type="text" name="budget" placeholder="Exemple : 40 à 60 €" />
                <small>Une fourchette suffit pour adapter la sélection.</small>
              </label>

              <label className="form-field form-field-date">
                <span>Date souhaitée</span>
                <input type="date" name="wantedDate" />
              </label>
            </div>

            <label className="form-field full-width">
              <span>Message personnalisé</span>
              <textarea
                name="personalMessage"
                rows="4"
                placeholder="Le message que vous aimeriez ajouter dans la box cadeau..."
              />
              <small>Vous pouvez écrire un message complet ou seulement l’intention à transmettre.</small>
            </label>

            <label className="form-field full-width">
              <span>Détails importants</span>
              <textarea
                name="details"
                rows="5"
                placeholder="Ses goûts, couleurs préférées, allergies, choses à éviter, passions, souvenirs à rappeler..."
                required
              />
              <small>Ajoutez tout ce qui peut rendre la box plus juste et plus personnelle.</small>
              <ValidationError className="form-error" field="details" errors={state.errors} />
            </label>

            <ValidationError className="form-error form-error-global" errors={state.errors} />

            <button type="submit" className="button-primary form-submit" disabled={state.submitting}>
              <Send size={18} aria-hidden="true" />
              {state.submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>

            <p className="form-note">
              L’envoi du formulaire ne valide pas encore une commande. Dreambox
              vous recontactera pour affiner votre demande, confirmer les détails
              et imaginer une box sur-mesure adaptée à votre budget.
            </p>
          </form>
        )}
      </div>

      <section className="container form-faq-section faq-section">
        <div className="section-heading centered">
          <p className="section-kicker">Avant d’envoyer</p>
          <h2>Questions fréquentes sur la création de votre box</h2>
        </div>

        <div className="faq-list">
          {formFaq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CreateBox
