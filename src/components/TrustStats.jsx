import { useEffect, useRef, useState } from 'react';
import { siteData } from '@/data/siteData';
import { Reveal } from './primitives';

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (reduced) { setCount(value); return; }
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 1100, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <strong ref={ref}>{count}{suffix}</strong>;
}

export function TrustStats() {
  return (
    <section className="section trust-stats" aria-label="Hiring Tag experience statistics">
      <div className="container">
        <Reveal className="trust-head">
          <span className="eyebrow"><i className="eyebrow-line" />Our Foundation</span>
          <h2>Experience that supports better hiring decisions.</h2>
          <p>Indicative figures pending business verification before production use.</p>
        </Reveal>
        <div className="trust-grid">
          {siteData.trustStats.map((stat, i) => <Reveal key={stat.label} className="trust-item" delay={i * 0.08}><CountUp value={stat.value} suffix={stat.suffix} /><span>{stat.label}</span></Reveal>)}
        </div>
      </div>
    </section>
  );
}
