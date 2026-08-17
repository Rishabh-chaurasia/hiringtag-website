import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ChevronRight } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

export function Expertise() {
  const [selectedIdx, setSelectedIdx] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches ? null : 0
  ));
  const selected = selectedIdx !== null ? siteData.expertise[selectedIdx] : null;
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <SectionIntro
          eyebrow="Industry Expertise"
          title={<>Industry-focused <span className="title-accent">recruitment expertise.</span></>}
          body="Our domain-focused approach enables us to identify and deliver the right talent, aligned with your business objectives, culture, and long-term growth."
        />

        <div className="expertise-master-detail">
          <nav className="expertise-nav" aria-label="Industries we serve">
            {siteData.expertise.map((item, i) => (
              <button
                className={`expertise-trigger ${selectedIdx === i ? 'is-selected' : ''}`}
                key={item.name}
                onClick={() => setSelectedIdx(i)}
                aria-current={selectedIdx === i ? 'true' : undefined}
              >
                <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="exp-name">{item.name}</span>
                <ChevronRight className="exp-chevron" size={17} />
              </button>
            ))}
          </nav>

          <motion.article
            className="expertise-detail"
            key={selected ? selected.name : 'empty'}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selected ? (
            <div className="detail-inner">
              <div className="detail-top">
                <div className="detail-top-left">
                  <span className="detail-eyebrow"><Briefcase size={13} />{selected.name}</span>
                  <p className="detail-desc">{selected.description}</p>
                </div>
                <div className="detail-action">
                  <span>Looking for talent in this industry?</span>
                  <button className="text-link detail-cta-btn" onClick={scrollToContact}>Discuss Your Hiring Needs <ArrowRight size={14} /></button>
                </div>
              </div>
              <div className="detail-columns">
                <div className="detail-col">
                  <h4 className="detail-label">Domains / Functions</h4>
                  <div className="detail-pills">{selected.domains.map((domain) => <span className="domain-pill" key={domain}>{domain}</span>)}</div>
                </div>
                <div className="detail-col">
                  <h4 className="detail-label">Hiring Levels</h4>
                  <div className="detail-levels">{selected.levels.map((level, i) => <div className="level-item" key={level}><span className="level-node" /><span className="level-text">{level}</span>{i < selected.levels.length - 1 && <span className="level-connector" />}</div>)}</div>
                </div>
              </div>
            </div>
            ) : (
              <div className="detail-empty">
                <Briefcase size={20} strokeWidth={1.6} />
                <p>Tap an industry above to see roles, functions and hiring levels.</p>
              </div>
            )}
          </motion.article>
        </div>
      </div>
    </section>
  );
}
