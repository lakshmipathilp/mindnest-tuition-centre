import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, AtSign, Gift } from 'lucide-react'
import { navLinks } from '../data/content'
import { site } from '../data/site'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="MindNest — home">
          <img className="brand-wordmark" src="/images/mindnest-wordmark.png" alt="MindNest Tuition Centre" />
        </Link>

        <nav id="main-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `${isActive ? 'active' : ''} ${l.to === '/sunday' ? 'nav-sunday' : ''}`.trim()}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-primary nav-trial">
            <Gift size={18} aria-hidden="true" /> Free Trial
          </Link>
        </nav>

        <div className="header-cta">
          <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-primary btn-sm">
            <Gift size={16} aria-hidden="true" /> Free Trial
          </Link>
          <button
            className="menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img className="brand-wordmark" src="/images/mindnest-wordmark.png" alt="MindNest Tuition Centre" />
            </Link>
            <p>{site.supportingMessage}</p>
            <p className="footer-motto">{site.tagline}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              {navLinks.slice(5).map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li style={{ display: 'flex', gap: 10 }}>
                <Phone size={16} style={{ marginTop: 5, flex: 'none' }} aria-hidden="true" />
                {site.phone ? <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a> : <span>Phone — to be added</span>}
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <Mail size={16} style={{ marginTop: 5, flex: 'none' }} aria-hidden="true" />
                {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span>Email — to be added</span>}
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <AtSign size={16} style={{ marginTop: 5, flex: 'none' }} aria-hidden="true" />
                {site.instagram ? (
                  <a href={`https://instagram.com/${site.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">@{site.instagram.replace('@', '')}</a>
                ) : (
                  <span>Instagram — to be added</span>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MindNest. All rights reserved.</span>
          <span>We don’t just want to teach students differently. We want to help students learn differently.</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <Link to="/contact?type=One-week+free+trial#enquiry" className="mobile-trial" aria-label="Reserve your one week free trial">
        <span>One week free trial</span>
        <span className="btn btn-yellow">Reserve</span>
      </Link>
    </>
  )
}
