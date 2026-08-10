import { Mail, MapPin, Phone } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = siteData.nav;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo"><Logo /></div>
          <p>{siteData.company.tagline}</p>
          <span>Strategic talent partnerships for growing organizations.</span>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <button onClick={() => go('services')}>Bulk Hiring</button>
          <button onClick={() => go('services')}>Fresher Hiring</button>
          <button onClick={() => go('services')}>Campus Recruitment</button>
          <button onClick={() => go('services')}>Executive & Leadership</button>
          <button onClick={() => go('services')}>Customized Solutions</button>
        </div>
        <div className="footer-col footer-connect">
          <h4>Contact</h4>
          <a href={`tel:${siteData.company.phone}`}><Phone size={14} />{siteData.company.phone}</a>
          <a href={`mailto:${siteData.company.email}`}><Mail size={14} />{siteData.company.email}</a>
          <span className="footer-address"><MapPin size={14} />{siteData.company.address}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright © 2026 Hiring Tag - All Rights Reserved.</span>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
