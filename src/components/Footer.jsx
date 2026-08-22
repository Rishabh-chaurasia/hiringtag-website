import { Globe2, Linkedin, Mail, MapPin, MessageCircle, Phone, Sprout } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

const footerLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Industries', '/expertise'],
  ['Why Hiring Tag', '/how-we-work'],
  ['Careers', '/contact'],
  ['CSR Initiative', '/csr'],
  ['Contact Us', '/contact'],
];

const footerServices = [
  'Executive / Leadership Hiring',
  'Specialized & Niche Hiring',
  'Volume Hiring',
  'Fresher Hiring',
  'Talent Consulting',
  'Onboarding Support',
];

export function Footer({ onNavigate }) {
  const go = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer id="site-footer" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo"><Logo /></div>
          <h3>Recruitment &amp; Talent Consulting</h3>
          <p className="footer-brand-tagline">Elevating Recruitment Excellence.</p>
          <p className="footer-brand-copy">We connect businesses with the right talent through focused, flexible, and reliable hiring solutions.</p>
          <div className="footer-socials">
            <a href={siteData.company.linkedin} aria-label="Hiring Tag on LinkedIn"><Linkedin size={25} /></a>
            <a href={`https://wa.me/${siteData.company.whatsapp}`} aria-label="Contact Hiring Tag on WhatsApp"><MessageCircle size={25} /></a>
          </div>
        </div>
        <nav className="footer-col footer-links" aria-label="Footer quick links">
          <h4>Quick Links</h4>
          {footerLinks.map(([label, path]) => <a key={path + label} href={path} onClick={(event) => go(event, path)}>{label}</a>)}
        </nav>
        <div className="footer-col footer-services">
          <h4>Our Services</h4>
          {footerServices.map((service) => <a className="footer-service" key={service} href="/services" onClick={(event) => go(event, '/services')}>{service}</a>)}
        </div>
        <div className="footer-col footer-connect">
          <h4>Contact Us</h4>
          <a href={`tel:${siteData.company.phone}`}><Phone size={22} />{siteData.company.phone}</a>
          <a href={`mailto:${siteData.company.email}`}><Mail size={22} />{siteData.company.email}</a>
          <a href="https://www.hiringtag.com" target="_blank" rel="noreferrer"><Globe2 size={22} />www.hiringtag.com</a>
          <span className="footer-address"><MapPin size={22} />{siteData.company.address}</span>
        </div>
      </div>
      <div className="container footer-csr-banner">
        <span className="footer-csr-icon"><Sprout size={38} strokeWidth={1.7} /></span>
        <strong>10 Trees for Every Hiring</strong>
        <span className="footer-csr-divider" aria-hidden="true" />
        <span>Every Hiring Matters. Every Hiring Grows.</span>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Hiring Tag. All Rights Reserved.</span>
        <div className="footer-legal"><a href="#privacy">Privacy Policy</a><i aria-hidden="true" /><a href="#terms">Terms &amp; Conditions</a></div>
      </div>
    </footer>
  );
}
