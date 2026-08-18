import { siteData } from '@/data/siteData';

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats-credibility">
        {siteData.credibility.map((item, i) => (
          <div className="cred-item" key={item}>
            <span className="cred-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}