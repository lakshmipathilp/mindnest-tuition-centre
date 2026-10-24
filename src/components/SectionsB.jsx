import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowRight, Camera, ChevronLeft, ChevronRight, X, Plus, Info, AlertCircle, CheckCircle2,
  Phone, Mail, AtSign, MapPin, Clock, MessageCircle, Navigation, Copy, Gift,
} from 'lucide-react'
import Reveal from './Reveal'
import EnquiryButton from './EnquiryButton'
import { PhotoPlaceholder } from './Illustrations'
import { gallery, galleryCategories, GALLERY_PATH } from '../data/gallery'
import { fees, feeComingSoon, hasFee, formatMoney } from '../data/fees'
import { site, hasWhatsApp, whatsappLink } from '../data/site'
import { faqs, enquiryTypes } from '../data/content'

const TONES = ['sage', 'peach', 'lavender', 'yellow']

/* ───────── Gallery ───────── */

function Lightbox({ items, index, onClose, onMove, failed }) {
  const closeRef = useRef(null)
  const item = items[index]
  const hasImg = item.src && !failed.has(item.id)

  useEffect(() => {
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'ArrowRight') onMove(1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus?.()
    }
  }, [onClose, onMove])

  const cat = galleryCategories.find((c) => c.id === item.category)
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button ref={closeRef} className="lb-close" onClick={onClose} aria-label="Close photo viewer"><X size={22} /></button>
      <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
        <div className="lb-stage">
          {hasImg ? (
            <img src={GALLERY_PATH + item.src} alt={item.alt || item.caption} />
          ) : (
            <>
              <PhotoPlaceholder tone={TONES[item.id % 4]} />
              <div className="lb-ph-text">Photo placeholder — a real photograph will appear here once added.</div>
            </>
          )}
          {items.length > 1 && (
            <>
              <button className="lb-btn lb-prev" onClick={() => onMove(-1)} aria-label="Previous photo"><ChevronLeft size={24} /></button>
              <button className="lb-btn lb-next" onClick={() => onMove(1)} aria-label="Next photo"><ChevronRight size={24} /></button>
            </>
          )}
        </div>
        <p className="lb-cap">
          {item.caption}
          <small>{cat?.label} · {index + 1} of {items.length}</small>
        </p>
      </div>
    </div>
  )
}

export function GalleryGrid({ preview = false }) {
  const [filter, setFilter] = useState('all')
  const [openIdx, setOpenIdx] = useState(null)
  const [failed, setFailed] = useState(() => new Set())

  const items = useMemo(() => {
    const list = filter === 'all' ? gallery : gallery.filter((g) => g.category === filter)
    return preview ? list.slice(0, 6) : list
  }, [filter, preview])

  const move = useCallback((d) => setOpenIdx((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])
  const close = useCallback(() => setOpenIdx(null), [])
  const markFailed = (id) => setFailed((s) => new Set(s).add(id))
  const anyReal = gallery.some((g) => g.src)

  return (
    <>
      {!preview && (
        <div className="filters" role="group" aria-label="Filter photos by category">
          {[{ id: 'all', label: 'All' }, ...galleryCategories].map((c) => (
            <button key={c.id} className="filter" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
      )}

      {items.length === 0 ? (
        <p className="note"><Info size={18} aria-hidden="true" />No photos in this category yet.</p>
      ) : (
        <div className="photo-grid">
          {items.map((g, i) => {
            const real = g.src && !failed.has(g.id)
            const size = preview ? '' : g.size === 'wide' || g.size === 'tall' ? g.size : ''
            return (
              <Reveal
                as="button"
                key={g.id}
                type="button"
                delay={(i % 4) * 0.07}
                className={`photo ${size} ${real ? '' : 'has-ph'}`}
                onClick={() => setOpenIdx(i)}
                aria-label={`Open photo: ${g.caption}${real ? '' : ' (placeholder)'}`}
              >
                {real ? (
                  <img src={GALLERY_PATH + g.src} alt={g.alt || g.caption} loading="lazy" decoding="async" onError={() => markFailed(g.id)} />
                ) : (
                  <>
                    <PhotoPlaceholder tone={TONES[g.id % 4]} />
                    <span className="ph-label"><Camera size={13} aria-hidden="true" /> Photo placeholder</span>
                  </>
                )}
                <span className="cap">{g.caption}</span>
              </Reveal>
            )
          })}
        </div>
      )}

      {!preview && (
        <Reveal className="note gallery-help">
          <Info size={18} aria-hidden="true" />
          <span>
            {anyReal ? 'Photos shown are the centre’s own.' : 'These are labelled placeholders — no real photographs have been added yet.'}{' '}
            To add photos, copy them into <code>public/images/gallery/</code> and list them in <code>src/data/gallery.js</code>.
          </span>
        </Reveal>
      )}

      {openIdx !== null && items[openIdx] && (
        <Lightbox items={items} index={openIdx} onClose={close} onMove={move} failed={failed} />
      )}
    </>
  )
}

export function GallerySection({ preview = false }) {
  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="container">
        {preview && (
          <Reveal className="section-head">
            <span className="eyebrow">Photo gallery</span>
            <h2 id="gallery-title">Little Moments. Big Discoveries.</h2>
            <p className="lede">A peek into life at MindNest — floor-mat learning, visual lessons, projects and Sunday fun.</p>
          </Reveal>
        )}
        {!preview && <h2 id="gallery-title" className="sr-only">Photo gallery</h2>}
        <GalleryGrid preview={preview} />
        {preview && (
          <Reveal style={{ marginTop: 32 }}>
            <Link to="/gallery" className="btn btn-ghost">
              See the full gallery <ArrowRight size={18} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* ───────── Fees ───────── */

export function FeesSection() {
  const anyFee = fees.some(hasFee)
  return (
    <section className="section" aria-labelledby="fees-title">
      <div className="container">
        <h2 id="fees-title" className="sr-only">Class-wise fees</h2>
        <Reveal className="fee-promo">
          <div>
            <b>TRY MINDNEST FOR ONE WEEK — FREE!</b>
            <p>See the teaching approach in action before you decide.</p>
          </div>
          <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-yellow">
            <Gift size={18} aria-hidden="true" /> Reserve a Free Trial
          </Link>
        </Reveal>

        {!anyFee && (
          <Reveal className="note" style={{ marginBottom: 24 }}>
            <Info size={18} aria-hidden="true" />
            <span>{feeComingSoon}</span>
          </Reveal>
        )}

        <div className="fee-grid">
          {fees.map((f, i) => {
            const priced = hasFee(f)
            const rows = [
              ['Admission / registration', f.admissionFee !== '' ? formatMoney(f.admissionFee) : null],
              ['Subjects included', f.subjects || null],
              ['Classes per week', f.classesPerWeek !== '' ? String(f.classesPerWeek) : null],
              ['Class duration', f.classDuration || null],
              ['Additional charges', f.additionalCharges || null],
            ]
            return (
              <Reveal key={f.class} delay={(i % 3) * 0.08} className={`card hover fee-card`}>
                <div className={`fee-head tone-${f.class <= 5 ? 'sage' : f.class <= 8 ? 'peach' : 'lavender'}`}>
                  <div className="cls"><small>Class</small>{f.class}</div>
                  <div className="stage">{f.stage}</div>
                </div>
                <div className="fee-body">
                  {priced ? (
                    <div className="fee-price">{formatMoney(f.monthlyFee)} <small>/ month</small></div>
                  ) : (
                    <div className="fee-soon">{feeComingSoon}</div>
                  )}
                  <dl className={`fee-rows ${priced ? '' : 'pending'}`} style={{ margin: 0 }}>
                    {rows.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v ?? (priced ? 'Please ask' : 'To be confirmed')}</dd>
                      </div>
                    ))}
                  </dl>
                  <EnquiryButton
                    className="btn btn-primary btn-sm btn-block"
                    type="Class-wise fees"
                    cls={String(f.class)}
                    message={`Hello MindNest, I would like to know the fee details for Class ${f.class}.`}
                  >
                    Enquire about Class {f.class}
                  </EnquiryButton>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="note fee-howto">
          <Info size={18} aria-hidden="true" />
          <span>
            Fees are set by the centre. No prices or discounts are shown until they are confirmed. To publish a fee, edit{' '}
            <code className="readme-code">src/data/fees.js</code>.
          </span>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Enquiry form (WhatsApp) ───────── */

const CLASS_OPTIONS = Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter the parent or guardian’s name.'
  if (!v.cls) e.cls = 'Please select the student’s class.'
  const digits = v.phone.replace(/\D/g, '')
  if (!/^[+\d][\d\s-]*$/.test(v.phone.trim()) || digits.length < 10 || digits.length > 15)
    e.phone = 'Please enter a valid phone number (10–15 digits).'
  if (!v.type) e.type = 'Please choose an enquiry type.'
  if (v.message.length > 600) e.message = 'Please keep the message under 600 characters.'
  return e
}

function buildMessage(v) {
  return [
    'Hello MindNest! I would like to enquire.',
    '',
    `Parent/Guardian: ${v.name.trim()}`,
    `Student’s class: ${v.cls}`,
    `Phone: ${v.phone.trim()}`,
    `Enquiry type: ${v.type}`,
    v.message.trim() ? `Message: ${v.message.trim()}` : null,
  ].filter((l) => l !== null).join('\n')
}

export function EnquiryForm() {
  const [params] = useSearchParams()
  const presetType = enquiryTypes.includes(params.get('type')) ? params.get('type') : ''
  const presetClass = /^([1-9]|10)$/.test(params.get('class') || '') ? `Class ${params.get('class')}` : ''
  const [v, setV] = useState({ name: '', cls: presetClass, phone: '', type: presetType, message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'opened' | 'no-number'
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setV((s) => ({ ...s, type: presetType || s.type, cls: presetClass || s.cls }))
  }, [presetType, presetClass])

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const link = whatsappLink(buildMessage(v))
    if (!link) {
      setStatus('no-number')
      return
    }
    const w = window.open(link, '_blank', 'noopener,noreferrer')
    if (!w) window.location.href = link
    setStatus('opened')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage(v))
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const field = (id, label, children, err) => (
    <div className={`field ${err ? 'invalid' : ''}`}>
      <label htmlFor={`f-${id}`}>{label} {id !== 'message' && <span aria-hidden="true">*</span>}</label>
      {children}
      {err && <span className="err" id={`e-${id}`} role="alert"><AlertCircle size={15} aria-hidden="true" />{err}</span>}
    </div>
  )

  return (
    <form className="form card" onSubmit={onSubmit} noValidate aria-labelledby="enquiry-title">
      <div>
        <h3 id="enquiry-title" style={{ marginBottom: 4 }}>Send an enquiry</h3>
        <p className="fine" style={{ margin: 0 }}>Fields marked * are required. Submitting opens WhatsApp with your message ready to send.</p>
      </div>

      {field('name', 'Parent or guardian name',
        <input id="f-name" name="name" autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />, errors.name)}

      <div className="form-row">
        {field('cls', 'Student’s class',
          <select id="f-cls" name="class" value={v.cls} onChange={set('cls')} aria-invalid={!!errors.cls} aria-describedby={errors.cls ? 'e-cls' : undefined}>
            <option value="">Select class</option>
            {CLASS_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>, errors.cls)}
        {field('phone', 'Phone number',
          <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210" value={v.phone} onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'e-phone' : undefined} />, errors.phone)}
      </div>

      {field('type', 'Enquiry type',
        <select id="f-type" name="type" value={v.type} onChange={set('type')} aria-invalid={!!errors.type} aria-describedby={errors.type ? 'e-type' : undefined}>
          <option value="">Select enquiry type</option>
          {enquiryTypes.map((t) => <option key={t}>{t}</option>)}
        </select>, errors.type)}

      {field('message', 'Message (optional)',
        <textarea id="f-message" name="message" value={v.message} onChange={set('message')} maxLength={650} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />, errors.message)}

      <button type="submit" className="btn btn-primary btn-block">
        <MessageCircle size={18} aria-hidden="true" /> Send on WhatsApp
      </button>

      {status === 'no-number' && (
        <div className="form-status warn" role="status">
          <AlertCircle size={20} style={{ flex: 'none', marginTop: 2 }} aria-hidden="true" />
          <div>
            <strong>The centre’s WhatsApp number hasn’t been added to this website yet,</strong> so WhatsApp can’t open.
            Your details are valid — you can copy the message below and send it once the number is available.
            <div style={{ margin: '10px 0', whiteSpace: 'pre-wrap', background: 'var(--white)', borderRadius: 10, padding: 12, fontSize: '.9rem' }}>{buildMessage(v)}</div>
            <button type="button" className="btn btn-ghost btn-sm" onClick={copy}>
              <Copy size={16} aria-hidden="true" /> {copied ? 'Copied!' : 'Copy message'}
            </button>
          </div>
        </div>
      )}
      {status === 'opened' && (
        <div className="form-status ok" role="status">
          <CheckCircle2 size={20} style={{ flex: 'none', marginTop: 2 }} aria-hidden="true" />
          <span>WhatsApp should have opened with your message. Please press send there to complete your enquiry.</span>
        </div>
      )}
      <p className="fine" style={{ margin: 0 }}>
        This form does not store your details on any server. It only prepares a WhatsApp message that you send yourself.
      </p>
    </form>
  )
}

/* ───────── Contact info & location ───────── */

function InfoItem({ icon: Icon, title, value, href, external }) {
  return (
    <li className="info-item">
      <span className="ic"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <h4>{title}</h4>
        {value ? (
          <p>{href ? <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a> : value}</p>
        ) : (
          <p className="tbc">To be added by the centre</p>
        )}
      </div>
    </li>
  )
}

export function ContactInfo() {
  const handle = site.instagram.replace('@', '')
  return (
    <div className="card">
      <h3>Contact details</h3>
      <ul className="info-list" style={{ marginTop: 18 }}>
        <InfoItem icon={MapPin} title="Address" value={site.address} />
        <InfoItem icon={Phone} title="Phone" value={site.phone} href={site.phone ? `tel:${site.phone.replace(/\s/g, '')}` : undefined} />
        <InfoItem icon={MessageCircle} title="WhatsApp" value={hasWhatsApp() ? `+${site.whatsappNumber}` : ''} href={whatsappLink('Hello MindNest')} external />
        <InfoItem icon={Mail} title="Email" value={site.email} href={site.email ? `mailto:${site.email}` : undefined} />
        <InfoItem icon={AtSign} title="Instagram" value={handle ? `@${handle}` : ''} href={handle ? `https://instagram.com/${handle}` : undefined} external />
        <InfoItem icon={Clock} title="Operating hours" value={site.hours} />
      </ul>
    </div>
  )
}

export function LocationSection() {
  const directions = site.mapDirectionsUrl || (site.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}` : '')
  return (
    <section className="section bg-white" aria-labelledby="loc-title">
      <div className="container loc-grid">
        <Reveal dir="left">
          <span className="eyebrow">Location</span>
          <h2 id="loc-title">Find Your Way to MindNest.</h2>
          <ul className="info-list" style={{ margin: '24px 0' }}>
            <InfoItem icon={MapPin} title="Full address" value={site.address} />
            <InfoItem icon={Navigation} title="Nearby landmark" value={site.landmark} />
          </ul>
          {directions ? (
            <a className="btn btn-primary" href={directions} target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </a>
          ) : (
            <Link className="btn btn-primary" to="/contact#location-help">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </Link>
          )}
        </Reveal>
        <Reveal dir="right" delay={0.1}>
          <div className="map-wrap">
            {site.mapEmbedUrl ? (
              <iframe className="map-frame" title="MindNest location on Google Maps" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <div className="map-ph" id="location-help">
                <div>
                  <MapPin size={40} className="map-pin" aria-hidden="true" />
                  <h3 style={{ marginBottom: 6 }}>Map coming soon</h3>
                  <p className="fine" style={{ margin: 0 }}>
                    The centre’s address hasn’t been added yet. To show a Google Map here, paste the embed link into{' '}
                    <code className="readme-code">mapEmbedUrl</code> in <code className="readme-code">src/data/site.js</code>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── FAQ ───────── */

export function FaqSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title">Questions parents often ask</h2>
        </Reveal>
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={(i % 4) * 0.05} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <h3 style={{ margin: 0, letterSpacing: 0 }}>
                  <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}
                    <span className="pm"><Plus size={18} aria-hidden="true" /></span>
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────── CTA ───────── */

export function CtaSection() {
  return (
    <section className="section tight">
      <div className="container">
        <Reveal className="cta">
          <span className="eyebrow">Start with one week</span>
          <h2>Let your child try learning differently.</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            One week free. No pressure. See how concepts click when questions are welcome.
          </p>
          <div className="btn-row">
            <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-primary">
              <Gift size={18} aria-hidden="true" /> Reserve a Free Trial
            </Link>
            <Link to="/fees" className="btn btn-ghost">View class-wise fees</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
