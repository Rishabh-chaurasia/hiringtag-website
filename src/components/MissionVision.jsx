import { Eye, Target } from 'lucide-react';
import { Reveal } from './primitives';

export function MissionVision() {
  return (
    <section className="section mv-section">
      <div className="container">
        <Reveal className="mv-head">
          <span className="eyebrow eyebrow-light"><i className="eyebrow-line" />What Drives Us</span>
          <h2>Vision &amp; Mission</h2>
        </Reveal>
        <div className="mv-grid">
          <Reveal className="mv-block mv-mission">
            <span className="mv-big-num">01</span>
            <span className="mv-icon mv-icon-yellow"><Target size={21} strokeWidth={1.6} /></span>
            <h3 className="mv-label"><i className="mv-dot mv-dot-yellow" />Mission</h3>
            <p>"To empower organizations with exceptional talent through strategic, ethical and technology-enabled recruitment solutions."</p>
          </Reveal>
          <Reveal className="mv-block mv-vision" delay={0.12}>
            <span className="mv-big-num">02</span>
            <span className="mv-icon mv-icon-blue"><Eye size={22} strokeWidth={1.6} /></span>
            <h3 className="mv-label"><i className="mv-dot mv-dot-blue" />Vision</h3>
            <p>"To be a trusted talent partner for organizations seeking to build high-performing teams and achieve sustainable growth."</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
