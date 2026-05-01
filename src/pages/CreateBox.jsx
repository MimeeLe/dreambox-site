import { useForm, ValidationError } from '@formspree/react'
import { Send } from 'lucide-react'
import Seo from '../components/Seo'

const formFaq = [
  {
    question: 'Que se passe-t-il après l’envoi du formulaire ?',
    answer:
      'Dreambox relit votre demande, précise les détails si nécessaire et revient vers vous avant de préparer vos box.',
  },
  {
    question: 'Dois-je connaître exactement le contenu des box ?',
    answer:
      'Non. Vous pouvez donner une direction générale et garder une part de surprise dans la sélection finale.',
  },
  {
    question: 'Puis-je préciser un budget ?',
    answer:
      'Oui. Le budget indicatif par box ou pour l’ensemble aide à imaginer une sélection adaptée à votre quantité.',
  },
  {
    question: 'Comment indiquer les goûts du groupe ?',
    answer:
      'Ajoutez l’ambiance de l’événement, le profil des invités, les couleurs, les préférences communes et les détails à éviter.',
  },
]

const createBoxSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Créer mes box Dreambox',
    url: 'https://dreambox-blindbox.com/creer-ma-box',
    description: 'Formulaire pour créer des box cadeaux personnalisées Dreambox pour groupes et événements.',
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
        title="Créer mes box cadeaux personnalisées | Dreambox"
        description="Remplissez le formulaire Dreambox pour créer des box cadeaux personnalisées en quantité pour un anniversaire, un mariage, une équipe ou un événement dès 5 personnes."
        path="/creer-ma-box"
        schema={createBoxSchema}
      />

      <div className="container create-box-layout">
        <section className="create-box-intro">
          <p className="section-kicker">Créer mes box</p>
          <h1>Créez vos box surprises personnalisées pour un groupe</h1>
          <p>
            Remplissez ce formulaire avec les informations que vous avez :
            occasion, nombre de personnes, budget, ambiance, message ou thème
            souhaité. Dreambox reviendra ensuite vers vous pour préciser la
            demande avant de préparer vos box cadeaux.
          </p>
          <p>
            Les demandes sont pensées pour des groupes et événements à partir de
            5 personnes. Vous pouvez être très précis ou laisser plus de liberté
            à Dreambox.
          </p>
        </section>

        {state.succeeded ? (
          <div className="dreambox-form form-status" role="status">
            <h2>Merci, votre demande a bien été envoyée.</h2>
            <p>
              Dreambox reviendra vers vous par email pour affiner votre demande,
              confirmer les détails et imaginer vos box adaptées à votre budget.
            </p>
          </div>
        ) : (
          <form className="dreambox-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nouvelle demande de box en groupe Dreambox" />
            <input type="hidden" name="source" value="Formulaire créer mes box" />

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
                  placeholder="Anniversaire, mariage, EVJF, équipe, événement..."
                  required
                />
                <small>Indiquez le contexte pour guider l’ambiance des box.</small>
                <ValidationError className="form-error" field="occasion" errors={state.errors} />
              </label>

              <label className="form-field">
                <span>Pour quel groupe ?</span>
                <input
                  type="text"
                  name="recipient"
                  placeholder="Invités, témoins, équipe, famille, groupe d’amies..."
                />
              </label>

              <label className="form-field">
                <span>Nombre de personnes / box</span>
                <input
                  type="number"
                  name="peopleCount"
                  min="5"
                  placeholder="Minimum 5"
                  inputMode="numeric"
                  required
                />
                <small>
                  Dreambox crée des box en quantité, à partir de 5 personnes.
                </small>
                <ValidationError className="form-error" field="peopleCount" errors={state.errors} />
              </label>

              <label className="form-field">
                <span>Format souhaité</span>
                <select name="boxSize" defaultValue="">
                  <option value="" disabled>
                    Choisir un format
                  </option>
                  <option value="petite">Petite attention par personne</option>
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

              <label className="form-field">
                <span>Date souhaitée</span>
                <input type="date" name="wantedDate" />
              </label>
            </div>

            <label className="form-field full-width">
              <span>Message personnalisé</span>
              <textarea
                name="personalMessage"
                rows="4"
                placeholder="Le message que vous aimeriez ajouter dans les box cadeaux..."
              />
              <small>Vous pouvez écrire un message commun ou seulement l’intention à transmettre.</small>
            </label>

            <label className="form-field full-width">
              <span>Détails importants</span>
              <textarea
                name="details"
                rows="5"
                placeholder="Profil du groupe, thème, couleurs, allergies, choses à éviter, contraintes de distribution..."
                required
              />
              <small>Ajoutez tout ce qui peut rendre les box plus justes et adaptées à votre événement.</small>
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
              et imaginer des box sur-mesure adaptées à votre budget.
            </p>
          </form>
        )}
      </div>

      <section className="container form-faq-section faq-section">
        <div className="section-heading centered">
          <p className="section-kicker">Avant d’envoyer</p>
          <h2>Questions fréquentes sur la création de vos box</h2>
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
