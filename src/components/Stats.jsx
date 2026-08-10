import { siteData } from '@/data/siteData';
import { Reveal } from './primitives';

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats-credibility">
        {siteData.credibility.map((item, i) => (
          <Reveal className="cred-item" key={item} delay={i * 0.08}>
            <span className="cred-dot" />
            <span>{item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
