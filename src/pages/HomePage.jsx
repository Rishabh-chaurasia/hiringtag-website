import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Expertise } from '@/components/Expertise';
import { HowWeWork } from '@/components/HowWeWork';
import { CSR } from '@/components/CSR';
import { FinalCTA } from '@/components/FinalCTA';

export function HomePage({ onNavigate, onJoin }) {
  return (
    <>
      <Hero onPartner={() => onNavigate('/contact')} />
      <About preview onNavigate={onNavigate} />
      <Services />
      <Expertise compact />
      <HowWeWork onJoin={onJoin} />
      <CSR />
      <FinalCTA onContact={() => onNavigate('/contact')} />
    </>
  );
}
