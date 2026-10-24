import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero, ClassGroupsSection, ClassroomSection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function Classes() {
  usePageMeta('Classes and subjects', 'MindNest teaches Classes 1 to 10 in three stages: Foundation, Concept Development, and Academic and Exam Preparation.')
  return (
    <>
      <PageHero eyebrow="Classes and subjects" crumb="Classes" title="What We Teach — Classes 1 to 10" lede="Three stages, one warm approach: from strong foundations to confident exam preparation." />
      <ClassGroupsSection hideHead />
      <ClassroomSection />
      <CtaSection />
    </>
  )
}
