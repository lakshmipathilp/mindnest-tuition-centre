import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

// A button that enquires via WhatsApp when the centre's number is configured.
// Until then it takes the visitor to the Contact page, where the enquiry form
// explains what is missing — so it never does nothing.
export default function EnquiryButton({
  message = 'Hello MindNest, I would like to enquire.',
  type = 'General enquiry',
  cls = '',
  className = 'btn btn-primary',
  children,
  icon = 'whatsapp',
}) {
  const link = whatsappLink(message)
  const Icon = icon === 'arrow' ? ArrowRight : MessageCircle
  const iconEl = <Icon size={18} className={icon === 'arrow' ? 'arrow' : ''} aria-hidden="true" />

  if (link) {
    return (
      <a className={className} href={link} target="_blank" rel="noopener noreferrer">
        {icon !== 'arrow' && iconEl}
        {children}
        {icon === 'arrow' && iconEl}
      </a>
    )
  }
  const params = new URLSearchParams({ type })
  if (cls) params.set('class', cls)
  return (
    <Link className={className} to={`/contact?${params.toString()}#enquiry`}>
      {icon !== 'arrow' && iconEl}
      {children}
      {icon === 'arrow' && iconEl}
    </Link>
  )
}

export const brandName = site.name
