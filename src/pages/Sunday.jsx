import { usePageMeta } from '../hooks/usePageMeta'
import { SundaySection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function Sunday() {
  usePageMeta('Sunday Activity Day', 'Sunday Activity Day at MindNest: art, puzzles, storytelling, public speaking and team challenges. Schedule to be confirmed by the centre.')
  return (
    <>
      <SundaySection h1 />
      <CtaSection />
    </>
  )
}
