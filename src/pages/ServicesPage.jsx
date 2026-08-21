import { Services } from '@/components/Services';
import { FinalCTA } from '@/components/FinalCTA';

export function ServicesPage({ onNavigate }) {
  return (
    <>
      <Services page />
      <FinalCTA onContact={() => onNavigate('/contact')} />
    </>
  );
}
