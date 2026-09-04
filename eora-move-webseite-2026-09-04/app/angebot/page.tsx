import { ArrowUpRight } from 'lucide-react';
import { PageHero, SiteShell } from '@/app/components/SiteShell';
import { courses } from '@/app/site-data';

function Intensity({ value }: { value: number }) { return <span className="meter" aria-label={`Intensität ${value} von 5`}>{[1,2,3,4,5].map(item => <i className={item <= value ? 'active' : ''} key={item} />)}</span>; }

export default function AngebotPage() {
  return <SiteShell>
    <PageHero index="01 / Angebot" eyebrow="Finde deinen Flow" title={<>Bewegung, die sich<br/><em>nach dir richtet.</em></>} text="Von kraftvoll bis regenerativ: Unsere Classes holen dich dort ab, wo du heute bist." />
    <section className="standalone-section course-page-grid">{courses.map(course => <article className="course-card" key={course.name}>
      <div className={course.tone} aria-hidden="true"><span>{course.strap}</span><b>{course.number}</b><div className="visual-line" /></div>
      <div className="course-copy"><p className="course-number">{course.number}</p><h3>{course.name}</h3><p className="course-description">{course.description}</p><dl><div><dt>Intensität</dt><dd><Intensity value={course.intensity} /></dd></div><div><dt>Level</dt><dd>{course.level}</dd></div></dl><a className="course-book" href="/login">Class buchen <ArrowUpRight /></a></div>
    </article>)}</section>
    <section className="page-cta"><p className="eyebrow">Dein nächster Move</p><h2>Bereit für deine Class?</h2><a className="button button-primary" href="/login">Kurs buchen <ArrowUpRight /></a></section>
  </SiteShell>;
}
