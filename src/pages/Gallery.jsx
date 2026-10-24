import { usePageMeta } from '../hooks/usePageMeta'
import { PageHero } from '../components/SectionsA'
import { GallerySection, CtaSection } from '../components/SectionsB'

export default function Gallery() {
  usePageMeta('Photo gallery', 'Little moments, big discoveries: photos from MindNest classrooms, activities and events.')
  return (
    <>
      <PageHero eyebrow="Photo gallery" crumb="Gallery" title="Little Moments. Big Discoveries." lede="Floor-mat learning, visual lessons, projects and Sunday fun." />
      <GallerySection />
      <CtaSection />
    </>
  )
}
