import { useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Car, ChevronRight, GraduationCap, HeartPulse, Landmark, MonitorCog, ShoppingBag, ShoppingCart, Store, Truck } from 'lucide-react';
import { siteData } from '@/data/siteData';

const expertiseIcons = {
  Retail: ShoppingBag,
  FMCG: ShoppingCart,
  BFSI: Landmark,
  'Healthcare & Pharma': HeartPulse,
  'Education & EdTech': GraduationCap,
  'Logistics & Supply Chain': Truck,
  Automobile: Car,
  'E-Commerce & Startup': Store,
  'Information Technology': MonitorCog,
};
const industryOrder = [
  'Retail',
  'FMCG',
  'BFSI',
  'Healthcare & Pharma',
  'Education & EdTech',
  'Logistics & Supply Chain',
  'Automobile',
  'E-Commerce & Startup',
  'Information Technology',
];
const orderedExpertise = industryOrder
  .map((name) => siteData.expertise.find((industry) => industry.name === name))
  .filter(Boolean);

export function Expertise({ compact = false, onNavigate }) {
  const [activeIndustry, setActiveIndustry] = useState(null);

  if (compact) {
    const selectedIndustry = activeIndustry === null ? null : orderedExpertise[activeIndustry];
    const selectedDetail = selectedIndustry;

    return (
      <section className="section industries-showcase industries-home" aria-labelledby="industries-heading">
        <div className="container">
          <div className="industries-heading" id="industries-heading">
            <span className="eyebrow"><i className="eyebrow-line" />Industries We Serve</span>
          </div>
          <div className="industries-rail">
            {orderedExpertise.map((industry, index) => {
              const Icon = expertiseIcons[industry.name];
              return (
                <button
                  className={`industry-item ${activeIndustry === index ? 'is-active' : ''}`}
                  key={industry.name}
                  type="button"
                  aria-expanded={activeIndustry === index}
                  aria-controls="home-industry-detail"
                  onClick={() => setActiveIndustry(activeIndustry === index ? null : index)}
                >
                  <span className="industry-item-icon"><Icon size={36} strokeWidth={1.55} /></span>
                  <span className="industry-item-title">{industry.name}</span>
                </button>
              );
            })}
          </div>
          {selectedIndustry && selectedDetail && (
            <article className="industry-home-detail" id="home-industry-detail" aria-live="polite">
              <div className="industry-home-detail-copy">
                <span className="industry-home-detail-label">{selectedIndustry.name}</span>
                <p>{selectedDetail.description}</p>
              </div>
              <div className="industry-home-focus">
                <strong>Key hiring areas</strong>
                <div>
                  {selectedDetail.domains.map((domain) => <span key={domain}>{domain}</span>)}
                </div>
              </div>
              <div className="industry-home-levels">
                <strong>Hiring levels</strong>
                <div>
                  {selectedDetail.levels.map((level) => <span key={level}>{level}</span>)}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    );
  }

  const selected = activeIndustry === null ? null : orderedExpertise[activeIndustry];

  return (
    <section className="section industries-showcase industries-page" aria-labelledby="industry-expertise-heading">
      <div className="container">
        <div className="industry-page-intro">
          <span className="eyebrow"><i className="eyebrow-line" />Industry Expertise</span>
          <h1 id="industry-expertise-heading">Industry-focused <span className="title-accent">recruitment expertise.</span></h1>
          <p>Our domain-focused approach enables us to identify and deliver the right talent, aligned with your business objectives, culture, and long-term growth.</p>
        </div>

        <div className="industry-expertise-panel">
          <div className="industry-expertise-nav" role="tablist" aria-label="Select an industry">
            {orderedExpertise.map((industry, index) => {
              const IndustryIcon = expertiseIcons[industry.name];
              return (
                <button
                  key={industry.name}
                  type="button"
                  role="tab"
                  aria-selected={activeIndustry === index}
                  aria-controls="industry-expertise-detail"
                  className={activeIndustry === index ? 'is-active' : ''}
                  onClick={() => setActiveIndustry(activeIndustry === index ? null : index)}
                >
                  <span className="industry-expertise-icon" aria-hidden="true"><IndustryIcon size={18} strokeWidth={1.7} /></span>
                  <strong>{industry.name}</strong>
                  <ChevronRight size={18} strokeWidth={1.8} />
                </button>
              );
            })}
          </div>

          {selected ? (
            <article className="industry-expertise-detail" id="industry-expertise-detail" role="tabpanel">
              <div className="industry-detail-head">
                <div className="industry-detail-summary">
                  <span className="industry-detail-label"><BriefcaseBusiness size={15} strokeWidth={1.8} />{selected.name}</span>
                  <p>{selected.description}</p>
                </div>
                <div className="industry-detail-cta">
                  <span>Looking for talent in this industry?</span>
                  <button type="button" className="text-link" onClick={() => onNavigate?.('/contact')}>
                    Discuss Your Hiring Needs <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              <div className="industry-detail-columns">
                <div className="industry-domains">
                  <h2>Domains / Functions</h2>
                  <div className="industry-domain-tags">
                    {selected.domains.map((domain) => <span key={domain}>{domain}</span>)}
                  </div>
                </div>
                <div className="industry-levels">
                  <h2>Hiring Levels</h2>
                  <ul>
                    {selected.levels.map((level) => <li key={level}>{level}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ) : (
            <section className="industry-expertise-empty" id="industry-expertise-detail" role="tabpanel" aria-label="Industry expertise introduction">
              <div className="industry-empty-images" aria-hidden="true">
                <img className="industry-empty-image-main" src="/expertise-recruitment-desk.webp" alt="" />
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
