import { Mail, MapPin, Phone, Sprout, TreePine } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-left">
          <div className="footer-logo"><Logo /></div>
          <p>{siteData.company.tagline}</p>
          <span>Strategic talent partnerships for growing organizations.</span>

          <div className="footer-connect">
            <a href={`tel:${siteData.company.phone}`}><Phone size={14} />{siteData.company.phone}</a>
            <a href={`mailto:${siteData.company.email}`}><Mail size={14} />{siteData.company.email}</a>
            <span className="footer-address"><MapPin size={14} />{siteData.company.address}</span>
          </div>
        </div>

        <div className="footer-right">
          <span className="footer-tree-icon"><TreePine size={22} strokeWidth={1.6} /></span>
          <span className="footer-tree-eyebrow"><Sprout size={13} />CSR, ON YOUR BEHALF</span>
          <h3>Every Hiring Matters. Every Hiring Grows.</h3>
          <p>When you hire through Hiring Tag, we take your corporate social responsibility (CSR) forward on your behalf — turning every successful placement into a real environmental contribution, without any extra effort on your part.</p>
          <p>As part of our <strong>"10 Trees for Every Hiring"</strong> initiative, we plant 10 trees for every candidate successfully placed, in the name of both the hiring company and the candidate. We also take responsibility for their care and maintenance in the region where the candidate is placed.</p>
          <p className="footer-tree-path">One Hiring → 10 Trees → A Lasting Impact</p>
          <p>It's CSR made effortless — while you focus on building your team, we make sure every hire leaves a lasting, sustainable footprint your organization can be proud of.</p>
          <p className="footer-tree-quote">Because when a career takes root, so should a tree.</p>
          <div className="footer-tree-stat">🌱 10 Trees Planted &nbsp;|&nbsp; Every Successful Hiring &nbsp;|&nbsp; Long-Term Care</div>
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
