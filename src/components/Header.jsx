import { NavLink } from 'react-router-dom'
import dreamboxLogo from '../assets/logo-dreambox.jpg'

const instagramUrl = 'https://www.instagram.com/dreambox_fr/'

const navigationLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'Personnalisation', path: '/personnalisation' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Créer ma box', path: '/creer-ma-box' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink to="/" className="brand-name">
          <img
            src={dreamboxLogo}
            alt="Dreambox"
            width="784"
            height="1168"
            className="brand-logo"
          />
        </NavLink>

        <nav className="main-nav" aria-label="Navigation principale">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="instagram-cta"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
