import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Briefcase, Plus, User } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Reveal, SectionIntro } from './primitives';

export function HowWeWork({ onJoin }) {
  const [tab, setTab] = useState('employer');
  const [openStep, setOpenStep] = useState(null);

  const steps = tab === 'employer' ? siteData.employerProcess : siteData.candidateProcess;
  const isEmployer = tab === 'employer';
  const mobileSteps = isEmployer ? steps.slice(0, 6) : steps;

  const switchTab = (newTab) => {
    setTab(newTab);
    setOpenStep(null);
  };

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionIntro eyebrow="Our Approach" title={<>A recruitment process built around <span className="title-accent">your business.</span></>} />

        <div className="process-segmented">
          <button className={`seg-btn ${isEmployer ? 'is-active' : ''}`} onClick={() => switchTab('employer')}>
            <Briefcase size={14} /> For Employers
          </button>
          <button className={`seg-btn ${!isEmployer ? 'is-active' : ''}`} onClick={() => switchTab('candidate')}>
            <User size={14} /> For Candidates
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="process-intro-text">
              {isEmployer
                ? 'At Hiring Tag, we follow a structured, technology-enabled recruitment process that combines AI-driven efficiency with expert human insights to deliver the right talent.'
                : siteData.candidateHeading}
            </p>

            {/* Desktop layout */}
            <div className="process-desktop">
              {isEmployer ? (
                <div className="process-employer-grid">
                  <div className="process-timeline-row">
                    {steps.slice(0, 6).map((step, i) => (
                      <div className="pt5-step" key={step.title}>
                        <span className="pt5-marker">{String(i + 1).padStart(2, '0')}</span>
                        <div className="pt5-content">
                          <h4>{step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="process-candidate-grid">
                  {steps.map((step, i) => (
                    <div className="pcg-step" key={step.title}>
                      <span className="pcg-marker">{String(i + 1).padStart(2, '0')}</span>
                      <div className="pcg-content">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile: vertical accordion timeline */}
            <div className="process-mobile">
              {mobileSteps.map((step, i) => (
                <div className={`process-mobile-item ${openStep === i ? 'is-open' : ''}`} key={step.title}>
                  <button className="process-mobile-head" onClick={() => setOpenStep(openStep === i ? null : i)}>
                    <span className="pmh-marker">{String(i + 1).padStart(2, '0')}</span>
                    <span className="pmh-title">{step.title}</span>
                    <span className="pmh-toggle"><Plus size={16} /></span>
                  </button>
                  <AnimatePresence>
                    {openStep === i && (
                      <motion.div className="process-mobile-body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                        <p>{step.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Candidate CTAs */}
            {!isEmployer && (
              <Reveal className="candidate-cta" delay={0.1}>
                <div className="candidate-cta-actions">
                  <button className="btn btn-primary" onClick={onJoin}>Submit Your CV <ArrowRight size={15} /></button>
                  <button className="btn btn-ghost" onClick={scrollToContact}>Explore Opportunities <ArrowRight size={15} /></button>
                </div>
              </Reveal>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Closing message */}
        <Reveal className="process-closing" delay={0.1}>
          <p>{siteData.processClosing}</p>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Start a Conversation <ArrowRight size={15} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
