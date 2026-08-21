import { ArrowRight } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

export function ApproachPreview({ onNavigate }) {
  return (
    <section className="section approach-preview" aria-labelledby="approach-preview-heading">
      <div className="container">
        <SectionIntro
          eyebrow="Our Approach"
          title={<span id="approach-preview-heading">A recruitment process built around <span className="title-accent">your business.</span></span>}
          body="At Hiring Tag, we follow a structured, technology-enabled recruitment process that combines efficient sourcing with expert human judgment to deliver the right talent."
        />
        <div className="approach-preview-grid">
          {siteData.principles.map((principle) => (
            <article className="approach-preview-card" key={principle.num}>
              <span>{principle.num}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="text-link approach-preview-link" onClick={() => onNavigate('/how-we-work')}>
          Explore Our Approach <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
