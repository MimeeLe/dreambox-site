import { NavLink } from 'react-router-dom'

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
          Dreambox
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
        </nav>
      </div>
    </header>
  )
}

export default Header
