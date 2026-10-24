import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero, MethodSection, ClassroomSection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function Method() {
  usePageMeta('Our teaching method', 'How MindNest helps students learn: understand, visualise, practise, recall and revise, and improve.')
  return (
    <>
      <PageHero eyebrow="Our teaching method" crumb="Our method" title="How We Help Students Learn Better" lede="We don’t just want to teach students differently. We want to help students learn differently." />
      <MethodSection hideHead />
      <ClassroomSection />
      <CtaSection />
    </>
  )
}
