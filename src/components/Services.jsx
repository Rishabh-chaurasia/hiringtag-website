import { BriefcaseBusiness, CalendarClock, Puzzle, Search, UserCheck, Users } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Reveal, SectionIntro } from './primitives';

const focusIcons = { Users, BriefcaseBusiness, Search, Puzzle, CalendarClock, UserCheck };
const accentColors = ['var(--red)', 'var(--blue)', 'var(--orange)', 'var(--green)', 'var(--purple)', 'var(--teal)'];

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionIntro eyebrow="What We Do" title={<>Recruitment and consulting solutions built for <span className="title-accent">your business</span></>} body="From high-volume workforce hiring to executive search, our services are designed to meet diverse talent acquisition needs across industries." />
        <div className="service-focus-grid">
          {siteData.focusAreas.map((s, i) => {
            const Icon = focusIcons[s.icon];
            return (
              <Reveal className="service-focus-card" key={s.title} delay={0.15 + i * 0.06} style={{ '--accent': accentColors[i] }}>
                <span className="service-focus-icon"><Icon size={20} strokeWidth={1.7} /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
