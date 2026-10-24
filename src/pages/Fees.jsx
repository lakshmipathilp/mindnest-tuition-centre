import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero } from '../components/SectionsA'
import { FeesSection, FaqSection } from '../components/SectionsB'

export default function Fees() {
  usePageMeta('Class-wise fees', 'MindNest fee details for Classes 1 to 10. Try MindNest for one week free.')
  return (
    <>
      <PageHero eyebrow="Class-wise fees" crumb="Fees" title="Clear fees, class by class." lede="Every class has its own entry so parents can see exactly what is included." />
      <FeesSection />
      <FaqSection />
    </>
  )
}
