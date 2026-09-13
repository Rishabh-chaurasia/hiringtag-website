import { Globe2, Mail, MapPin, Phone, Sprout } from 'lucide-react';
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
            <a className="footer-linkedin" href={siteData.company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Hiring Tag on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg></a>
            <a className="footer-whatsapp" href={`https://wa.me/${siteData.company.whatsapp}`} aria-label="Contact Hiring Tag on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.64 15.03L2 22l5.12-1.32A10 10 0 1 0 12 2Zm0 18.18a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.04.79.81-2.96-.2-.31A8.18 8.18 0 1 1 12 20.18Zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.48-.6 1.69-1.19.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" /></svg></a>
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
