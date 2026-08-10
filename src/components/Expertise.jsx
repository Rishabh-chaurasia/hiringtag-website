import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Briefcase } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

export function Expertise() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <SectionIntro
          eyebrow="Industry Expertise"
          title={<>Industry-focused <span className="title-accent">recruitment expertise.</span></>}
          body="At Hiring Tag, we understand that every industry has unique talent requirements. Our domain-focused recruitment approach enables us to identify, assess, and deliver professionals who align with your business objectives, culture and growth strategy."
        />

        <div className="expertise-grid">
          {siteData.expertise.map((item, i) => (
            <div className={`expertise-cell ${openIdx === i ? 'is-open' : ''}`} key={item.name}>
              <button
                className="expertise-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="exp-name">{item.name}</span>
                <span className={`exp-chevron ${openIdx === i ? 'is-open' : ''}`}>
                  <ChevronDown size={18} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    className="expertise-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="detail-inner">
                      <div className="detail-top">
                        <div className="detail-top-left">
                          <span className="detail-eyebrow"><Briefcase size={13} />{item.name}</span>
                          <p className="detail-desc">{item.description}</p>
                        </div>
                        <button className="text-link detail-cta-btn" onClick={scrollToContact}>
                          Discuss Your Hiring Needs <ArrowRight size={14} />
                        </button>
                      </div>
                      <div className="detail-columns">
                        <div className="detail-col">
                          <h4 className="detail-label">Domains / Functions</h4>
                          <div className="detail-pills">
                            {item.domains.map((d) => (
                              <span className="domain-pill" key={d}>{d}</span>
                            ))}
                          </div>
                        </div>
                        <div className="detail-col">
                          <h4 className="detail-label">Hiring Levels</h4>
                          <div className="detail-levels">
                            {item.levels.map((lvl, li) => (
                              <div className="level-item" key={lvl}>
                                <span className="level-node" />
                                <span className="level-text">{lvl}</span>
                                {li < item.levels.length - 1 && <span className="level-connector" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
