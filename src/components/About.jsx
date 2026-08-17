import { ArrowRight } from 'lucide-react';
import { imagery, siteData } from '@/data/siteData';
import { Reveal } from './primitives';

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-copy-left">
          <Reveal>
            <span className="eyebrow"><i className="eyebrow-line" />About Hiring Tag</span>
            <h2>Connecting exceptional talent with <span className="title-accent">visionary organizations.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="about-image-reveal">
            <div className="about-image-wrap">
              <img className="about-image" src={imagery.about} alt="A Hiring Tag consultant in a strategic talent discussion with a business client" />
            </div>
          </Reveal>
        </div>
        <div className="about-copy-right">
          <Reveal delay={0.1}>
            <p className="about-lead">Welcome to Hiring Tag — your strategic talent partner beyond conventional recruitment. We combine industry expertise, innovative strategies, and technology to connect the right talent with business needs.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>Our goal: every hire drives performance, growth, and long-term success.</p>
          </Reveal>
          <div className="principles">
            {siteData.principles.map((p, i) => (
              <Reveal className="principle" key={p.num} delay={0.2 + i * 0.08}>
                <span className="principle-num">{p.num}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.45}>
            <button className="text-link" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
              See how we work <ArrowRight size={15} />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
