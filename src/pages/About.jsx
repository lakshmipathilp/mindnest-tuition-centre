import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero, AboutSection, BeliefsSection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function About() {
  usePageMeta('About us', 'Why MindNest exists: to change the way students learn through understanding, visual teaching, practice and curiosity.')
  return (
    <>
      <PageHero eyebrow="About MindNest" title="Education Can Be Different." lede="MindNest is a place to learn, ask, practise, and grow." />
      <AboutSection hideHead />
      <BeliefsSection />
      <CtaSection />
    </>
  )
}
