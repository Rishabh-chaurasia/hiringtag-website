import { Linkedin, Mail, MapPin, Phone, Sprout } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-left">
          <div className="footer-logo"><Logo /></div>
          <p>{siteData.company.tagline}</p>
          <span>Strategic talent partnerships for growing organizations.</span>

          <nav className="footer-nav" aria-label="Footer navigation">
            {siteData.nav.map(([label, id]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>

          <div className="footer-connect">
            <a href={`tel:${siteData.company.phone}`}><Phone size={14} />{siteData.company.phone}</a>
            <a href={`mailto:${siteData.company.email}`}><Mail size={14} />{siteData.company.email}</a>
            <a href="https://www.linkedin.com/company/hiring-tag-india/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><Linkedin size={14} />LinkedIn</a>
            <span className="footer-address"><MapPin size={14} />{siteData.company.address}</span>
          </div>
        </div>

        <div className="footer-right">
          <span className="footer-tree-eyebrow"><Sprout size={20} strokeWidth={1.8} />CSR – HIRING TAG</span>
          <h3>Every Hiring Matters. Every Hiring Grows.</h3>
          <p>At Hiring Tag, every successful hiring is an opportunity to create a positive impact. Through our <strong>"10 Trees for Every Hiring"</strong> initiative, we plant 10 trees for every successful placement in the name of the hiring company and candidate — and support their long-term care.</p>
          <p className="footer-tree-path">One Hiring → 10 Trees → A Lasting Impact</p>
          <p>Together, we build careers, support businesses, and nurture a greener future — one hiring at a time.</p>
          <p className="footer-tree-quote">Because when a career takes root, so should a tree.</p>
          <div className="footer-tree-stat">🌱 10 Trees &nbsp;|&nbsp; Every Successful Hiring &nbsp;|&nbsp; Long-Term Care</div>
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
