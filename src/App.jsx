import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { TrustStats } from '@/components/TrustStats';
import { About } from '@/components/About';
import { MissionVision } from '@/components/MissionVision';
import { Services } from '@/components/Services';
import { Expertise } from '@/components/Expertise';
import { HowWeWork } from '@/components/HowWeWork';
import { ClientCTA } from '@/components/ClientCTA';
import { Contact } from '@/components/Contact';
import { HiringTagAssistant } from '@/components/HiringTagAssistant';
import { Footer } from '@/components/Footer';
import { JoinNetworkModal } from '@/components/JoinNetworkModal';

export function App() {
  const [joinOpen, setJoinOpen] = useState(false);
  const openJoin = () => setJoinOpen(true);
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="site">
      <Navbar onContact={scrollToContact} />
      <main>
        <Hero onPartner={scrollToContact} />
        <Stats />
        <About />
        <TrustStats />
        <MissionVision />
        <Services />
        <Expertise />
        <HowWeWork onJoin={openJoin} />
        <ClientCTA />
        <Contact />
      </main>
      <Footer />
      <HiringTagAssistant />
      <JoinNetworkModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}

export default App;
