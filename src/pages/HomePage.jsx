import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Expertise } from '@/components/Expertise';
import { CSR } from '@/components/CSR';
import { FinalCTA } from '@/components/FinalCTA';

export function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onPartner={() => onNavigate('/contact')} />
      <About preview onNavigate={onNavigate} />
      <Services />
      <Expertise compact />
      <CSR />
      <FinalCTA onContact={() => onNavigate('/contact')} />
    </>
  );
}
