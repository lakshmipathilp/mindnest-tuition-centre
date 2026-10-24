// ─────────────────────────────────────────────────────────────
//  MINDNEST — SITE SETTINGS
//  Edit this file to add your real contact details and location.
//  Leave a value as an empty string ('') to show the
//  "to be confirmed" placeholder on the website.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'MindNest',
  tagline: 'Learn · Understand · Practise · Grow',
  brandMessage: 'Changing the way students learn.',
  supportingMessage: 'A place to learn, ask, practise, and grow.',

  // WhatsApp number in international format, digits only.
  // Example for India: '919876543210'  (91 = country code, then the 10-digit number)
  // While this is empty, the enquiry form and WhatsApp buttons show a
  // "WhatsApp number not set yet" message instead of opening a chat.
  whatsappNumber: '918431279856',

  phone: '+91 8431279856',
  email: 'mindnesttuition@gmail.com',
  instagram: '', // handle only, e.g. 'mindnest.tuition'
  address: 'No. 60-1, 60, Bidarahalli Main Road, Byappanahalli, Bidarahalli, Karnataka 560049',
  landmark: 'Bidarahalli Main Road',
  hours: '', // e.g. 'Mon–Sat, 5:00 PM – 8:00 PM'

  // Google Maps:
  //  1. Open Google Maps, search for your centre, click Share → Embed a map.
  //  2. Copy ONLY the URL inside src="..." and paste it into mapEmbedUrl.
  //  3. Paste the normal "Share" link (or any Maps link) into mapDirectionsUrl.
  mapEmbedUrl: 'https://www.google.com/maps?q=No.%2060-1%2C%2060%2C%20Bidarahalli%20Main%20Road%2C%20Byappanahalli%2C%20Bidarahalli%2C%20Karnataka%20560049&output=embed',
  mapDirectionsUrl: '',
}

export const hasWhatsApp = () => /^\d{8,15}$/.test(site.whatsappNumber)

// Builds a wa.me link. Returns null if the number has not been configured.
export function whatsappLink(message = '') {
  if (!hasWhatsApp()) return null
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
