import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero } from '../components/SectionsA'
import { EnquiryForm, ContactInfo, LocationSection, FaqSection } from '../components/SectionsB'

export default function Contact() {
  usePageMeta('Contact and location', 'Enquire about the MindNest free trial, fees, batch timings or Sunday Activity Day, and find the centre.')
  return (
    <>
      <PageHero eyebrow="Contact and admissions" crumb="Contact" title="Say hello. Ask anything." lede="Start with a one-week free trial or a simple question — we’re happy to help." />
      <section className="section tight" id="enquiry">
        <div className="container contact-grid">
          <EnquiryForm />
          <ContactInfo />
        </div>
      </section>
      <LocationSection />
      <FaqSection />
    </>
  )
}
