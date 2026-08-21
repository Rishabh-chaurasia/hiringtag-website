import { ArrowRight, HandHeart, Leaf, MapPin, Sprout, UserRoundCheck } from 'lucide-react';
import { imagery } from '@/data/siteData';
import { Reveal } from './primitives';

export function CSR({ page = false, onContact }) {
  if (page) {
    return (
      <section className="section csr csr-page" aria-labelledby="csr-heading">
        <div className="container csr-page-container">
          <div className="csr-page-main">
            <div className="csr-page-visual">
              <span className="csr-page-outline" aria-hidden="true" />
              <div className="csr-page-image-wrap">
                <img src={imagery.csr} alt="Hiring Tag team members planting a young tree" />
              </div>
              <div className="csr-page-badge">
                <span className="csr-page-badge-icon"><Leaf size={34} strokeWidth={1.8} /></span>
                <strong>Every Hiring Matters.<br />Every Hiring Grows.</strong>
              </div>
              <span className="csr-page-dots" aria-hidden="true" />
            </div>
            <div className="csr-page-copy">
              <span className="eyebrow">CSR Initiative</span>
              <h1 id="csr-heading">10 Trees for Every Hiring.<Leaf aria-hidden="true" /></h1>
              <p className="csr-page-lead">Every successful placement should create more than a career—it should help create a greener future.</p>
              <p>For every successful placement, Hiring Tag plants 10 trees in the name of the client organization and the selected candidate, with care and maintenance supported in the candidate’s region.</p>
              <button className="btn btn-primary" onClick={onContact}>Grow With Us <ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="csr-page-journey" aria-label="CSR initiative journey">
            <div className="csr-page-step">
              <span className="csr-page-step-icon is-blue"><UserRoundCheck size={52} strokeWidth={1.55} /></span>
              <strong>Successful<br />Placement</strong>
            </div>
            <span className="csr-page-connector" aria-hidden="true" />
            <div className="csr-page-step">
              <span className="csr-page-step-icon is-green"><Sprout size={54} strokeWidth={1.55} /></span>
              <strong>10 Trees<br />Planted</strong>
            </div>
            <span className="csr-page-connector" aria-hidden="true" />
            <div className="csr-page-step">
              <span className="csr-page-step-icon is-green"><HandHeart size={54} strokeWidth={1.55} /></span>
              <strong>Care &amp;<br />Maintenance</strong>
            </div>
          </div>
          <p className="csr-page-closing"><Leaf size={25} aria-hidden="true" />Creating careers while contributing to a greener tomorrow.<Leaf size={25} aria-hidden="true" /></p>
        </div>
      </section>
    );
  }

  return (
    <section className="section csr">
      <div className="container csr-grid">
        <Reveal className="csr-image-wrap"><img src={imagery.csr} alt="Volunteers planting a young tree" /></Reveal>
        <Reveal className="csr-copy" delay={0.1}>
          <span className="eyebrow"><i className="eyebrow-line" />Our CSR Initiative</span>
          <h2>10 Trees for Every <span>Hiring</span></h2>
          <p className="csr-lead">Every Hiring Matters. Every Hiring Grows.</p>
          <p>For every successful placement, we support the planting of 10 trees in the name of the hiring company and candidate, with care for a greener future.</p>
          <div className="csr-points">
            <span><Sprout size={18} />10 trees per successful hiring</span>
            <span><MapPin size={18} />Planting with local impact in mind</span>
            <span><Leaf size={18} />Long-term care and maintenance</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
