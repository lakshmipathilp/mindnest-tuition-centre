import { usePageMeta } from '../hooks/usePageMeta'
import {
  Hero, TrialBanner, AboutSection, BeliefsSection, ClassroomSection, ClassGroupsSection,
  Class10Section, MethodSection, StudyPlanSection, SundaySection,
} from '../components/SectionsA'
import { GallerySection, CtaSection, ContactInfo, EnquiryForm, LocationSection, FaqSection } from '../components/SectionsB'
import Reveal from '../components/Reveal'

export default function Home() {
  usePageMeta(
    '',
    'MindNest is a tuition centre for Classes 1–10 that helps students understand concepts, practise regularly and grow in confidence. Try one week free.',
  )
  return (
    <>
      <Hero />
      <TrialBanner />
      <AboutSection />
      <BeliefsSection />
      <ClassroomSection />
      <ClassGroupsSection />
      <Class10Section showParts={false} />
      <MethodSection />
      <StudyPlanSection />
      <SundaySection />
      <GallerySection preview />
      <CtaSection />
      <section className="section" id="enquiry" aria-labelledby="home-contact">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Contact and admissions</span>
            <h2 id="home-contact">Say hello. Ask anything.</h2>
            <p className="lede">Tell us your child’s class and what you would like to know, and we’ll take it from there.</p>
          </Reveal>
          <div className="contact-grid">
            <EnquiryForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <LocationSection />
      <FaqSection />
    </>
  )
}
