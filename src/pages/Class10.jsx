import { usePageMeta } from '../hooks/usePageMeta'
import { Class10Section, MethodSection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function Class10() {
  usePageMeta('Class 10 preparation', 'Planned Class 10 preparation at MindNest: chapter-wise teaching, regular practice, assessments, mistake analysis and revision.')
  return (
    <>
      <Class10Section h1 />
      <MethodSection />
      <CtaSection />
    </>
  )
}
