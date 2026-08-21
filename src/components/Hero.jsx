import { ArrowRight } from 'lucide-react';
import { imagery } from '@/data/siteData';

export function Hero({ onPartner }) {
  return (
    <section className="hero" aria-labelledby="home-hero-heading">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i className="eyebrow-line" />Recruitment and Talent Consultant</span>
          <h1 id="home-hero-heading">Elevating<br /><span className="hero-accent">Recruitment</span><br />Excellence</h1>
          <p className="hero-lead">Connecting exceptional talent with visionary organizations.</p>
          <p className="hero-sub">Strategic recruitment solutions designed to help organizations build high-performing teams, strengthen their workforce, and achieve sustainable growth.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onPartner}>Discuss Your Hiring Needs <ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src={imagery.hero} alt="Recruitment consultants and business leaders reviewing candidate profiles" />
          </div>
        </div>
      </div>
    </section>
  );
}
