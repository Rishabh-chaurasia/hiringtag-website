import { useEffect, useLayoutEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HiringTagAssistant } from '@/components/HiringTagAssistant';
import { JoinNetworkModal } from '@/components/JoinNetworkModal';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ExpertisePage } from '@/pages/ExpertisePage';
import { ProcessPage } from '@/pages/ProcessPage';
import { ContactPage } from '@/pages/ContactPage';
import { CSRPage } from '@/pages/CSRPage';

const routeComponents = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/expertise': ExpertisePage,
  '/how-we-work': ProcessPage,
  '/contact': ContactPage,
  '/csr': CSRPage,
};

const normalizePath = (path) => {
  const clean = path.replace(/\/+$/, '') || '/';
  return routeComponents[clean] ? clean : '/';
};

export function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const [joinOpen, setJoinOpen] = useState(false);
  const Page = routeComponents[pathname];

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => {
      window.history.scrollRestoration = previousRestoration;
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const navigate = (nextPath) => {
    const next = normalizePath(nextPath);
    if (next !== pathname) {
      window.history.pushState({}, '', next);
      setPathname(next);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <div className="site">
      <Navbar pathname={pathname} onNavigate={navigate} />
      <main className={pathname === '/' ? 'home-page' : 'inner-page'} key={pathname}>
        <Page onNavigate={navigate} onJoin={() => setJoinOpen(true)} />
      </main>
      <Footer onNavigate={navigate} />
      <HiringTagAssistant onNavigate={navigate} />
      <JoinNetworkModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}

export default App;
