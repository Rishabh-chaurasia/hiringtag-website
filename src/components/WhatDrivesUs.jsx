import { Gauge, Medal, ShieldCheck, Handshake } from 'lucide-react';

const values = [
  { icon: Medal, title: 'Quality', text: 'We deliver the right talent with the right fit, every time.' },
  { icon: Gauge, title: 'Speed', text: 'Focused, efficient and agile hiring solutions that keep you ahead.' },
  { icon: ShieldCheck, title: 'Transparency', text: 'Open communication and honest processes at every step.' },
  { icon: Handshake, title: 'Long-Term Partnership', text: 'Relationships designed to grow with your business.' },
];

export function WhatDrivesUs() {
  return (
    <section className="section values-section" aria-labelledby="values-heading">
      <div className="container">
        <div className="section-intro values-head">
          <span className="eyebrow"><i className="eyebrow-line" />What Drives Us</span>
          <h2 id="values-heading">The values behind every partnership.</h2>
        </div>
        <div className="values-grid">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="value-card" key={title}>
              <span className="value-icon"><Icon size={23} strokeWidth={1.6} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
