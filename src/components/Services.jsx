import {
  BriefcaseBusiness,
  CalendarClock,
  GraduationCap,
  Handshake,
  Network,
  Puzzle,
  Route,
  Search,
  Target,
  UserCheck,
  Users,
  UsersRound,
} from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

const focusIcons = { Users, BriefcaseBusiness, Search, Puzzle, CalendarClock, UserCheck };

const pageServices = [
  {
    icon: Network,
    title: 'Executive / Leadership Hiring',
    desc: 'Strategic search for senior, executive, and leadership positions.',
  },
  {
    icon: Target,
    title: 'Specialized & Niche Hiring',
    desc: 'Focused sourcing for rare skills and hard-to-fill positions.',
  },
  {
    icon: UsersRound,
    title: 'Volume Hiring',
    desc: 'Scalable recruitment support for high-volume workforce requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Fresher Hiring',
    desc: 'Connecting organizations with job-ready entry-level talent.',
  },
  {
    icon: Route,
    title: 'Talent Consulting',
    desc: 'Practical guidance for workforce planning and hiring strategy.',
  },
  {
    icon: Handshake,
    title: 'Onboarding Support',
    desc: 'Coordinated support from offer acceptance through successful joining.',
  },
];

export function Services({ page = false }) {
  if (page) {
    return (
      <section className="section services services-page" aria-labelledby="services-heading">
        <span className="services-page-dots" aria-hidden="true" />
        <div className="container services-page-container">
          <SectionIntro
            eyebrow="What We Do"
            align="center"
            title={<span id="services-heading">Hiring solutions designed around your business.</span>}
            body="From focused searches to workforce-scale recruitment, we provide flexible support across every stage of hiring."
          />
          <div className="services-page-grid">
            {pageServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="services-page-card" key={service.title}>
                  <span className="services-page-icon" aria-hidden="true">
                    <Icon size={50} strokeWidth={1.55} />
                  </span>
                  <div className="services-page-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section services services-home" aria-labelledby="services-heading">
      <div className="container">
        <SectionIntro
          eyebrow="What We Do"
          title={<span id="services-heading">Recruitment and consulting solutions built for <span className="title-accent">your business.</span></span>}
          body="From high-volume workforce hiring to executive search, our services are designed to meet diverse talent acquisition needs across industries."
        />
        <div className="service-focus-grid">
          {siteData.focusAreas.map((service) => {
            const Icon = focusIcons[service.icon];
            return (
              <article className="service-focus-card" key={service.title}>
                <span className="service-focus-icon"><Icon size={21} strokeWidth={1.7} /></span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
