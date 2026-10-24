import { Link } from 'react-router-dom'
import { ArrowRight, Check, Info, Sparkles, Gift, RefreshCw, Camera, CalendarOff } from 'lucide-react'
import Reveal from './Reveal'
import EnquiryButton from './EnquiryButton'
import { ClassroomIllustration, ActivityIllustration } from './Illustrations'
import { useReveal } from '../hooks/useReveal'
import { site } from '../data/site'
import {
  heroCards, beliefs, philosophy, classroomWays, classGroups, classesDisclaimer,
  class10Parts, class10Flow, methodSteps, habits, studyWeeks, studyPlanNote,
  sundayActivities, sundayBenefits,
} from '../data/content'

/* ───────── shared bits ───────── */

export function PageHero({ eyebrow, title, lede, crumb }) {
  return (
    <section className="page-hero">
      <div className="blob" aria-hidden="true" />
      <div className="container">
        <p className="crumbs">
          <Link to="/">Home</Link> / {crumb || eyebrow}
        </p>
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </Reveal>
      </div>
    </section>
  )
}

function SectionHead({ eyebrow, title, lede, center, h1, light }) {
  const H = h1 ? 'h1' : 'h2'
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <H>{title}</H>}
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  )
}

function FlowLine({ steps, light = false }) {
  const [ref, visible] = useReveal({ threshold: 0.3 })
  return (
    <div ref={ref} className={`flow ${light ? 'light-flow' : ''} ${visible ? 'visible' : ''}`} role="list" aria-label="Learning progression">
      <div className="flow-line" aria-hidden="true"><i /></div>
      {steps.map((s, i) => (
        <div className="flow-step" role="listitem" key={s} style={{ '--i': i }}>
          <div className="dot">{i + 1}</div>
          <b>{s}</b>
        </div>
      ))}
    </div>
  )
}

/* ───────── Hero ───────── */

export function Hero() {
  return (
    <section className="hero banner-hero" aria-labelledby="hero-title">
      <div className="container banner-shell">
        <Reveal className="brand-block" delay={0.05}>
          <img className="hero-brand-logo" src="/images/mindnest-logo.png" alt="MindNest Tuition Centre — Learn, Grow, Achieve Together" />
        </Reveal>

        <Reveal className="feature-strip" delay={0.12}>
          {heroCards.map(({ label, icon: Icon, cls }) => (
            <span key={label} className={`float-card ${cls}`}>
              <span className="ic"><Icon size={18} aria-hidden="true" /></span>
              {label}
            </span>
          ))}
        </Reveal>

        <Reveal className="banner-callout" delay={0.1}>
          <h1 id="hero-title">
            A Brighter <span>Tomorrow</span>
            <em>Starts Here!</em>
          </h1>
        </Reveal>

        <Reveal className="hero-scene" dir="right" delay={0.18}>
          <div className="scene-deco scene-left" aria-hidden="true" />
          <div className="scene-deco scene-right" aria-hidden="true" />
          <div className="mini-sign" aria-label="Learn explore grow">
            <span>LEARN</span>
            <span>EXPLORE</span>
            <span>GROW</span>
          </div>
          <ClassroomIllustration />
          <div className="chalkboard" aria-label="Ask questions, explore, think grow">
            <span>Ask</span>
            <span>Questions</span>
            <span>Explore</span>
            <span>Think</span>
            <span>Grow</span>
          </div>
        </Reveal>

        <div className="hero-actions">
          <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-primary">
            <Gift size={18} aria-hidden="true" /> Reserve a Free Trial
          </Link>
          <Link to="/about" className="btn btn-ghost">
            Discover MindNest <ArrowRight size={18} className="arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ───────── One-week free trial banner ───────── */

export function TrialBanner() {
  return (
    <section className="trial" aria-labelledby="trial-title">
      <div className="trial-deco" aria-hidden="true">
        <span className="d1" /><span className="d2" /><span className="d3" /><span className="d4" />
      </div>
      <div className="container trial-inner">
        <Reveal className="trial-badge" dir="left">
          ONE WEEK
          <br />
          FREE TRIAL
          <span>NO COMMITMENT</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="trial-title">One week. A whole new perspective.</h2>
          <p>Let your child experience the MindNest teaching approach before deciding.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact?type=One-week+free+trial#enquiry" className="btn btn-yellow">
            Reserve a Free Trial <ArrowRight size={18} className="arrow" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── About ───────── */

export function AboutSection({ hideHead = false, h1 = false }) {
  return (
    <section className="section" aria-labelledby={hideHead ? undefined : 'about-title'}>
      <div className="container">
        {!hideHead && (
          <Reveal className="section-head">
            <span className="eyebrow">About MindNest</span>
            <h2 id="about-title">Education Can Be Different.</h2>
          </Reveal>
        )}
        <div className="about-grid">
          <Reveal dir="left">
            <p className="about-statement">
              <strong>Our Goal.</strong> Our goal is to change the study system by transforming the way students learn.
              We want students to move beyond <mark>memorising answers</mark> for examinations and begin{' '}
              <mark>understanding concepts</mark>, asking questions, thinking independently, and applying what they learn.
            </p>
            <ul className="grid" style={{ marginTop: 28, gap: 10 }}>
              {philosophy.map((p) => (
                <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check size={18} style={{ marginTop: 5, flex: 'none', color: 'var(--terracotta-dark)' }} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="gm-pair">
            <Reveal delay={0.1} className="gm tone-sage">
              <h3>Our Mission</h3>
              <p>
                To make learning clear, engaging, and meaningful through patient teaching, visual explanations,
                regular practice, and thoughtful guidance.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="gm tone-lavender">
              <h3>Our Vision</h3>
              <p>
                To create a learning environment where every student feels confident to ask questions, explore ideas,
                learn from mistakes, and grow academically and personally.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BeliefsSection() {
  return (
    <section className="section bg-white" aria-labelledby="beliefs-title">
      <div className="container">
        <SectionHead eyebrow="Our Teaching Beliefs" title="Three shifts that shape every lesson." center />
        <h2 id="beliefs-title" className="sr-only">Our teaching beliefs</h2>
        <div className="grid c3">
          {beliefs.map(({ n, title, text, icon: Icon, tone }, i) => (
            <Reveal key={n} delay={i * 0.12} className={`card hover belief tone-${tone}`}>
              <span className="num" aria-hidden="true">{n}</span>
              <div className="icon-chip" style={{ background: 'var(--white)' }}><Icon size={26} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p style={{ color: 'var(--ink)' }}>{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 'clamp(48px, 7vw, 88px)' }}>
          <p className="big-quote">
            We don’t just want to teach students differently. We want to help students <span>learn differently.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Classroom experience ───────── */

export function ClassroomSection() {
  return (
    <section className="section" aria-labelledby="classroom-title">
      <div className="container">
        <SectionHead
          eyebrow="The MindNest classroom"
          title="Comfortable on the floor. Curious in the mind."
          lede="Students sit on soft floor mats around a large screen, so lessons feel relaxed, close and welcoming — not like rows of desks."
        />
        <h2 id="classroom-title" className="sr-only">The MindNest classroom</h2>
        <div className="classroom-grid">
          <Reveal dir="left">
            <ClassroomIllustration />
            <p className="fine" style={{ marginTop: 12 }}>
              Illustration. Real photographs of the centre will appear in the gallery once added.
            </p>
          </Reveal>
          <div>
            <div className="way-list">
              {classroomWays.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={(i % 4) * 0.07} className="way">
                  <span className="ic"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="note mat-note">
              <Camera size={18} aria-hidden="true" />
              <span>
                <strong>Photos coming soon.</strong> Real classroom photographs can be added in the{' '}
                <Link to="/gallery"><u>gallery</u></Link>. Until then, labelled placeholders are shown.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Classes ───────── */

export function ClassGroupsSection({ hideHead = false }) {
  const toneClass = { foundation: 'tone-sage', concept: 'tone-peach', exam: 'exam' }
  const shapeClass = { foundation: '', concept: 'concept', exam: 'exam' }
  const pills = { foundation: [1, 2, 3, 4, 5], concept: [6, 7, 8], exam: [9, 10] }
  return (
    <section className="section bg-white" aria-labelledby="classes-title">
      <div className="container">
        {!hideHead ? (
          <SectionHead
            eyebrow="What we teach"
            title="Classes 1 to 10, one stage at a time."
            lede="Each stage has its own pace and focus, with the same warm approach throughout."
          />
        ) : (
          <h2 id="classes-title" className="sr-only">Class groups</h2>
        )}
        <div className="grid c3">
          {classGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.12} className={`cg ${shapeClass[g.id]} ${toneClass[g.id]}`}>
              <span className="shape" aria-hidden="true" />
              <div className="range">{g.range}</div>
              <div className="stage">{g.title}</div>
              <p>{g.intro}</p>
              <ul>
                {g.items.map((it) => (
                  <li key={it}><Check size={16} aria-hidden="true" />{it}</li>
                ))}
              </ul>
              <div className="class-pills">
                {pills[g.id].map((n) => (<span key={n}>Class {n}</span>))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="note" style={{ marginTop: 28 }}>
          <Info size={18} aria-hidden="true" />
          <span>{classesDisclaimer}</span>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Class 10 ───────── */

export function Class10Section({ h1 = false, showParts = true }) {
  const H = h1 ? 'h1' : 'h2'
  return (
    <section className="section c10" aria-labelledby="c10-title">
      <div className="container">
        <Reveal className="section-head" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Class 10 preparation</span>
          <H id="c10-title">Less Last-Minute Panic. More Planned Progress.</H>
          <p className="lede">
            Class 10 preparation works best when students learn consistently throughout the academic year. MindNest
            aims to help students build conceptual understanding, practise regularly, identify mistakes, and prepare
            systematically for examinations.
          </p>
        </Reveal>

        <FlowLine steps={class10Flow} />

        {showParts && (
          <div className="grid c3 c10-parts">
            {class10Parts.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1} className="part">
                <span className="pn" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="ic"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal style={{ marginTop: 44 }}>
          <EnquiryButton
            className="btn btn-yellow"
            type="One-week free trial"
            cls="10"
            message="Hello MindNest, I would like to book a free trial for Class 10."
            icon="arrow"
          >
            Book a Free Trial for Class 10
          </EnquiryButton>
          <p className="disclaimer-line">
            <Info size={16} aria-hidden="true" />
            <span>MindNest focuses on understanding, practice and planning. No marks or examination results are guaranteed.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Learning method ───────── */

export function MethodSection({ hideHead = false }) {
  return (
    <section className="section" aria-labelledby="method-title">
      <div className="container">
        {!hideHead ? (
          <SectionHead
            eyebrow="Our teaching method"
            title="How We Help Students Learn Better"
            lede="Five simple steps that every concept goes through, easy for students to follow and for parents to see."
            center
          />
        ) : (
          <h2 id="method-title" className="sr-only">The five-step learning process</h2>
        )}
        <ol className="steps" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {methodSteps.map(({ n, title, icon: Icon, text }, i) => (
            <Reveal as="li" key={n} delay={i * 0.12} className="step">
              <div className="badge"><Icon size={28} aria-hidden="true" /></div>
              <div className="card hover">
                <span className="stepno">Step {n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div style={{ marginTop: 'clamp(48px, 7vw, 88px)' }}>
          <Reveal className="section-head">
            <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Study habits we encourage</h3>
            <p className="lede">Small routines that help learning stick and make progress easy to see.</p>
          </Reveal>
          <div className="habits">
            {habits.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={(i % 3) * 0.08} className="habit">
                <Icon size={20} aria-hidden="true" />
                {label}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Monthly study plan ───────── */

export function StudyPlanSection({ hideHead = false }) {
  return (
    <section className="section bg-white" aria-labelledby="plan-title">
      <div className="container">
        {!hideHead ? (
          <SectionHead
            eyebrow="Monthly study plan"
            title="Four weeks. One clear cycle."
            lede="Every month follows a simple rhythm: learn, practise, revise, then test and improve."
          />
        ) : (
          <h2 id="plan-title" className="sr-only">Four-week study cycle</h2>
        )}
        <div className="plan">
          {studyWeeks.map((w, i) => (
            <Reveal key={w.week} delay={i * 0.12} className={`week tone-${w.tone}`} tabIndex={0}>
              <span className="wk">Week {w.week}</span>
              <h3>{w.title}</h3>
              <ul>
                {w.items.map((it) => (
                  <li key={it}><Check size={16} aria-hidden="true" />{it}</li>
                ))}
              </ul>
              <div className="meter-label"><span>Month progress</span><span>{w.progress}%</span></div>
              <div className="meter" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={w.progress} aria-label={`Week ${w.week} of 4`}>
                <i style={{ '--p': `${w.progress}%`, '--i': i }} />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="cycle">
          <RefreshCw size={20} aria-hidden="true" /> Then the next learning cycle begins.
        </p>
        <Reveal className="note" style={{ marginTop: 28 }}>
          <Info size={18} aria-hidden="true" />
          <span>{studyPlanNote}</span>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────── Sunday Activity Day ───────── */

export function SundaySection({ h1 = false }) {
  const H = h1 ? 'h1' : 'h2'
  return (
    <section className="section sunday" aria-labelledby="sunday-title">
      <div className="confetti" aria-hidden="true"><span className="c1" /><span className="c2" /><span className="c3" /><span className="c4" /></div>
      <div className="container">
        <div className="sunday-grid">
          <Reveal dir="left">
            <span className="badge-title"><Sparkles size={14} style={{ display: 'inline', marginRight: 8, verticalAlign: '-2px' }} aria-hidden="true" />SUNDAY ACTIVITY DAY</span>
            <H id="sunday-title">Sunday Is for Curiosity, Too!</H>
            <p className="lede" style={{ color: 'var(--forest)' }}>
              Sunday Activity Day gives students opportunities to relax, create, communicate, collaborate, and explore
              interests beyond regular academic lessons.
            </p>
            <p style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <CalendarOff size={20} style={{ flex: 'none', marginTop: 4 }} aria-hidden="true" />
              <span>Sunday is for activities and engagement — it is not a regular academic teaching day.</span>
            </p>
          </Reveal>
          <Reveal dir="right" delay={0.1}>
            <ActivityIllustration />
          </Reveal>
        </div>

        <Reveal className="section-head" style={{ marginBottom: 22 }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>What students might enjoy</h3>
        </Reveal>
        <div className="act-grid">
          {sundayActivities.map(({ icon: Icon, label, tone }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.06} className="act">
              <span className={`ic tone-${tone}`}><Icon size={22} aria-hidden="true" /></span>
              {label}
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 44 }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>What it builds</h3>
          <div className="benefits">
            {sundayBenefits.map((b) => (<span key={b}>{b}</span>))}
          </div>
          <p className="note sunday-note" style={{ marginTop: 22 }}>
            <Info size={18} aria-hidden="true" />
            <span>The exact schedule, age groups and fee inclusion will be confirmed by the centre.</span>
          </p>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <EnquiryButton
              type="Sunday Activity Day"
              message="Hello MindNest, I would like to know more about Sunday Activity Day."
              className="btn btn-primary"
            >
              Ask about Sunday Activity Day
            </EnquiryButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export { site }
