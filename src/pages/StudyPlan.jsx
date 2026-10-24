import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero, StudyPlanSection } from '../components/SectionsA'
import { CtaSection } from '../components/SectionsB'

export default function StudyPlan() {
  usePageMeta('Monthly study plan', 'A sample four-week MindNest study cycle: learn, practise, revise, then test and improve.')
  return (
    <>
      <PageHero eyebrow="Monthly study plan" crumb="Study plan" title="Four weeks. One clear cycle." lede="A simple monthly rhythm that keeps learning steady and progress visible." />
      <StudyPlanSection hideHead />
      <CtaSection />
    </>
  )
}
