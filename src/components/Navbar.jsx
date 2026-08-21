import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function Navbar({ pathname, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (event, path) => {
    event.preventDefault();
    onNavigate(path);
    setOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="nav-logo" href="/" onClick={(event) => go(event, '/')} aria-label="Hiring Tag home"><Logo compact /></a>
          <nav className="nav-links" aria-label="Primary navigation">
            {siteData.nav.map(([label, path]) => (
              <a key={path} href={path} className={pathname === path ? 'is-active' : ''} aria-current={pathname === path ? 'page' : undefined} onClick={(event) => go(event, path)}>{label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="nav-cta" href="/contact" onClick={(event) => go(event, '/contact')}>
              Get in Touch <ArrowRight size={15} />
            </a>
            <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-head">
            <Logo compact />
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav className="mobile-menu-nav">
            {siteData.nav.map(([label, path]) => (
              <a key={path} href={path} className={pathname === path ? 'is-active' : ''} aria-current={pathname === path ? 'page' : undefined} onClick={(event) => go(event, path)}>{label}<ArrowRight size={16} /></a>
            ))}
          </nav>
          <a className="nav-cta mobile-join" href="/contact" onClick={(event) => go(event, '/contact')}>
            Get in Touch <ArrowRight size={15} />
          </a>
        </div>
      )}
    </>
  );
}
