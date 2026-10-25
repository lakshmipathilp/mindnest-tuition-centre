import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, AtSign, Gift } from 'lucide-react'
import { navLinks } from '../data/content'
import { site } from '../data/site'

function getAssetPath(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\/+/, '')}`
}

function Brand({ footer = false }) {
  return (
    <Link
      to="/"
      className={`brand${footer ? ' footer-brand-link' : ''}`}
      aria-label="MindNest Tuition Centre home"
    >
      <img
        className={`brand-wordmark${footer ? ' footer-logo' : ''}`}
        src={getAssetPath('images/mindnest-wordmark.png')}
        alt="MindNest Tuition Centre"
        onError={(event) => {
          console.error(
            'MindNest logo could not load:',
            event.currentTarget.src
          )
        }}
      />
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn btn-primary btn-sm header-cta"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand footer />

          <p>{site.supportingMessage}</p>

          <p className="footer-motto">{site.tagline}</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          {navLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          {site.phone && (
            <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
              <Phone size={16} aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
          )}

          {site.email && (
            <a href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          )}

          {site.instagram && (
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <AtSign size={16} aria-hidden="true" />
              <span>Instagram</span>
            </a>
          )}
        </div>

        <div className="footer-column footer-highlight">
          <Gift size={25} aria-hidden="true" />

          <h3>Ready to Get Started?</h3>

          <p>
            Contact us to learn more about our classes and study programmes.
          </p>

          <Link to="/contact" className="button button-primary">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} MindNest Tuition Centre. All rights reserved.
        </p>

        <Link to="/privacy">Privacy</Link>
      </div>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}