import Seo from '../components/Seo'

function CreateBox() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="page-section create-box-page">
      <Seo
        title="Créer ma box cadeau personnalisée"
        description="Remplissez le formulaire Dreambox pour créer une box cadeau personnalisée selon l’occasion, la personne à gâter, le budget et l’ambiance souhaitée."
        path="/creer-ma-box"
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
        </section>

        <form className="dreambox-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="form-field">
              <span>Prénom</span>
              <input type="text" name="firstName" placeholder="Votre prénom" />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="votre@email.com" />
            </label>

            <label className="form-field">
              <span>Occasion</span>
              <input
                type="text"
                name="occasion"
                placeholder="Anniversaire, mariage, remerciement, Saint-Valentin..."
              />
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
              placeholder="Le message que vous aimeriez ajouter dans la box cadeau..."
            />
          </label>

          <label className="form-field full-width">
            <span>Détails importants</span>
            <textarea
              name="details"
              rows="5"
              placeholder="Ses goûts, couleurs préférées, allergies, choses à éviter, passions, souvenirs à rappeler..."
            />
          </label>

          <button type="submit" className="button-primary form-submit">
            Envoyer ma demande
          </button>

          <p className="form-note">
            L’envoi du formulaire ne valide pas encore une commande. Dreambox
            vous recontactera pour affiner votre demande, confirmer les détails
            et imaginer une box sur-mesure adaptée à votre budget.
          </p>
        </form>
      </div>
    </main>
  )
}

export default CreateBox
