import { ArrowRight } from 'lucide-react';
import { imagery } from '@/data/siteData';
import { Reveal } from './primitives';

export function Story({ onNavigate }) {
  return (
    <section className="section story" aria-labelledby="story-heading">
      <div className="container story-grid">
        <Reveal className="story-image-wrap">
          <img src={imagery.story} alt="Professionals collaborating in a strategic team discussion" />
        </Reveal>
        <Reveal className="story-copy">
          <span className="eyebrow"><i className="eyebrow-line" />Our Story</span>
          <h2 id="story-heading">Built on Purpose. Driven by People.</h2>
          <p>Hiring Tag was founded with a simple belief — great organizations are built by great people.</p>
          <p>Our approach combines industry understanding, technology and a people-first mindset to create meaningful hiring outcomes that support sustainable growth.</p>
          <button className="text-link" onClick={() => onNavigate('/how-we-work')}>See how we work <ArrowRight size={15} /></button>
        </Reveal>
      </div>
    </section>
  );
}
