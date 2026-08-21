import { useState } from 'react';
import { ArrowRight, Briefcase, Plus, User } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

const employerSteps = [
  { title: 'Understand Your Needs', desc: 'We begin by understanding your business, culture, hiring objectives, and role requirements.' },
  { title: 'Strategic Talent Sourcing', desc: 'We identify, screen, and evaluate candidates through targeted sourcing, technology-enabled tools, and industry expertise.' },
  { title: 'Candidate Assessment', desc: 'Every candidate is assessed for technical competencies, experience, cultural fit, and role alignment to ensure quality hiring.' },
  { title: 'Interview Coordination & Feedback', desc: 'We manage the interview process seamlessly while providing timely feedback and actionable insights to both clients and candidates.' },
  { title: 'Offer Management & Onboarding', desc: 'From offer negotiation to onboarding support, we ensure a smooth hiring experience and successful joining.' },
  { title: 'Long-Term Partnership', desc: 'We stay connected beyond the placement to support workforce continuity, future hiring needs and long-term talent success.' },
];

export function HowWeWork({ onJoin }) {
  const [tab, setTab] = useState('employer');
  const [openStep, setOpenStep] = useState(null);
  const isEmployer = tab === 'employer';
  const steps = isEmployer ? employerSteps : siteData.candidateProcess;

  const switchTab = (nextTab) => {
    setTab(nextTab);
    setOpenStep(null);
  };

  return (
    <section className="section process process-page" aria-labelledby="process-heading">
      <div className="container">
        <SectionIntro eyebrow="Our Approach" title={<span id="process-heading">A recruitment process built around <span className="title-accent">your business.</span></span>} />

        <div className="process-segmented">
          <button className={`seg-btn ${isEmployer ? 'is-active' : ''}`} onClick={() => switchTab('employer')}><Briefcase size={14} />For Employers</button>
          <button className={`seg-btn ${!isEmployer ? 'is-active' : ''}`} onClick={() => switchTab('candidate')}><User size={14} />For Candidates</button>
        </div>

        <p className="process-intro-text">
          {isEmployer
            ? 'At Hiring Tag, we follow a structured, technology-enabled recruitment process that combines efficient sourcing with expert human insights to deliver the right talent.'
            : siteData.candidateHeading}
        </p>

        <div className="process-desktop">
          <div className={`process-card-grid ${!isEmployer ? 'is-candidate' : ''}`}>
            {steps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-card-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="process-card-content"><h3>{step.title}</h3><p>{step.desc}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="process-mobile">
          {steps.map((step, index) => (
            <div className={`process-mobile-item ${openStep === index ? 'is-open' : ''}`} key={step.title}>
              <button className="process-mobile-head" onClick={() => setOpenStep(openStep === index ? null : index)}>
                <span className="pmh-marker">{String(index + 1).padStart(2, '0')}</span>
                <span className="pmh-title">{step.title}</span>
                <span className="pmh-toggle"><Plus size={16} /></span>
              </button>
              {openStep === index && <div className="process-mobile-body"><p>{step.desc}</p></div>}
            </div>
          ))}
        </div>

        {!isEmployer && (
          <div className="candidate-cta">
            <div className="candidate-cta-actions">
              <button className="btn btn-primary" onClick={onJoin}>Submit Your CV <ArrowRight size={15} /></button>
            </div>
          </div>
        )}

        <div className="process-closing">
          <p>We build lasting partnerships, exceptional careers, and sustainable growth through the right talent.</p>
        </div>
      </div>
    </section>
  );
}
