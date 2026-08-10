import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const current = [...siteData.nav].reverse().find(([, id]) => {
        const section = document.getElementById(id);
        return section && window.scrollY >= section.offsetTop - 160;
      });
      setActiveSection(current ? current[1] : 'home');
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <button className="nav-logo" onClick={() => go('home')} aria-label="Hiring Tag home"><Logo compact /></button>
          <nav className="nav-links">
            {siteData.nav.map(([label, id]) => (
              <button key={id} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'page' : undefined} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>
          <div className="nav-right">
            <button className="nav-cta" onClick={() => go('contact')}>
              Contact Us <ArrowRight size={15} />
            </button>
            <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu-head">
              <Logo compact />
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <nav className="mobile-menu-nav">
              {siteData.nav.map(([label, id]) => (
                <button key={id} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'page' : undefined} onClick={() => go(id)}>{label}<ArrowRight size={16} /></button>
              ))}
            </nav>
            <button className="nav-cta mobile-join" onClick={() => { onContact(); setOpen(false); }}>
              Contact Us <ArrowRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
