import { Eye, Target } from 'lucide-react';
import { Reveal } from './primitives';

export function MissionVision() {
  return (
    <section className="section mv-section">
      <div className="container">
        <Reveal className="mv-head">
          <span className="eyebrow"><i className="eyebrow-line" />Vision &amp; Mission</span>
          <h2>Purpose that guides our work.</h2>
        </Reveal>
        <div className="mv-grid">
          <Reveal className="mv-block mv-vision">
            <span className="mv-big-num">01</span>
            <span className="mv-icon mv-icon-red"><Eye size={22} strokeWidth={1.6} /></span>
            <h3 className="mv-label"><i className="mv-dot mv-dot-red" />Our Vision</h3>
            <p>To be the most trusted talent partner, empowering organizations to achieve their ambitions through exceptional people and future-ready hiring solutions.</p>
          </Reveal>
          <Reveal className="mv-block mv-mission" delay={0.12}>
            <span className="mv-big-num">02</span>
            <span className="mv-icon mv-icon-orange"><Target size={21} strokeWidth={1.6} /></span>
            <h3 className="mv-label"><i className="mv-dot mv-dot-orange" />Our Mission</h3>
            <p>To connect the right talent with the right opportunities through innovation, integrity, and a relentless focus on excellence.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
