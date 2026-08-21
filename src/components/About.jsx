import { ArrowRight } from 'lucide-react';
import { imagery } from '@/data/siteData';

export function About({ preview = false, onNavigate }) {
  return (
    <section className={`section about ${preview ? 'about-preview' : 'about-page-intro'}`} aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-copy-right">
          <span className="eyebrow"><i className="eyebrow-line" />About Hiring Tag</span>
          <h2 id="about-heading">Connecting exceptional talent with <span className="title-accent">visionary organizations.</span></h2>
          <span className="about-kicker">Who We Are</span>
          <p className="about-lead">Welcome to Hiring Tag — your strategic talent partner beyond conventional recruitment. We combine industry expertise, innovative strategies, and technology to connect the right talent with business needs.</p>
          {!preview && <p className="about-detail">With deep industry expertise, innovative hiring strategies and technology-enabled solutions, we align talent with evolving workforce needs. Our approach is built on collaboration and integrity, ensuring every placement drives growth and long-term business success.</p>}
          <p>Our goal: every hire drives performance, growth, and long-term success.</p>
          {preview && (
            <button className="text-link about-link" onClick={() => onNavigate('/about')}>
              Learn More About Us <ArrowRight size={15} />
            </button>
          )}
        </div>
        <div className="about-image-wrap">
          <img className="about-image" src={imagery.about} alt="Recruitment consultants and a client collaborating on a workforce plan" />
        </div>
      </div>
    </section>
  );
}
