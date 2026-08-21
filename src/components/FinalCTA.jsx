import { ArrowRight } from 'lucide-react';

export function FinalCTA({ onContact }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container final-cta-inner">
        <div>
          <h2 id="final-cta-heading">Let&apos;s build exceptional teams together.</h2>
          <p>Partner with Hiring Tag for recruitment that drives performance and builds a stronger tomorrow.</p>
        </div>
        <button className="btn btn-light" onClick={onContact}>
          Discuss Your Hiring Needs <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
