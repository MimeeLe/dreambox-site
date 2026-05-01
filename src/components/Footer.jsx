import { Camera } from 'lucide-react'
import { Link } from 'react-router-dom'

const instagramUrl = 'https://www.instagram.com/dreambox_fr/'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="footer-brand">
            Dreambox
          </Link>
          <p>Des box cadeaux personnalisées pour offrir une vraie attention.</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation secondaire">
          <Link to="/collections">Collections</Link>
          <Link to="/personnalisation">Personnalisation</Link>
          <Link to="/creer-ma-box">Créer ma box</Link>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="footer-instagram-cta"
          >
            <Camera size={16} aria-hidden="true" />
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
