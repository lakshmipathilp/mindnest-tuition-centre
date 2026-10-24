import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Other pages load on demand to keep the first load fast.
const About = lazy(() => import('./pages/About'))
const Classes = lazy(() => import('./pages/Classes'))
const Class10 = lazy(() => import('./pages/Class10'))
const Method = lazy(() => import('./pages/Method'))
const StudyPlan = lazy(() => import('./pages/StudyPlan'))
const Sunday = lazy(() => import('./pages/Sunday'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Fees = lazy(() => import('./pages/Fees'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Loading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <div className="spinner" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="class-10" element={<Class10 />} />
          <Route path="method" element={<Method />} />
          <Route path="study-plan" element={<StudyPlan />} />
          <Route path="sunday" element={<Sunday />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="fees" element={<Fees />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
