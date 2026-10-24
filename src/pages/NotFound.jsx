import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'This page could not be found.')
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page wandered off.</h1>
        <p className="lede">Let’s get you back to learning.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}
