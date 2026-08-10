import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { imagery } from '@/data/siteData';

export function Hero({ onPartner }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <i className="eyebrow-line" />Recruitment &amp; Talent Consulting
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }}>
            Elevating<br /><span className="hero-accent">Recruitment</span><br />Excellence
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }}>
            Connecting exceptional talent with visionary organizations.
          </motion.p>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}>
            Strategic recruitment solutions designed to help organizations build high-performing teams, strengthen their workforce, and achieve sustainable growth.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}>
            <button className="btn btn-primary" onClick={onPartner}>
              Discuss Your Hiring Needs <ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Services <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <span className="hero-dot hero-dot-yellow" />
          <span className="hero-dot hero-dot-red" />
          <div className="hero-image">
            <img src={imagery.hero} alt="A professional recruitment consultation between a Hiring Tag consultant and a business client" />
          </div>
          <motion.div className="hero-brand-moment" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <span className="hbm-mark">HT</span>
            <div>
              <strong>Hiring Tag</strong>
              <span>Strategic Talent Partners</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
