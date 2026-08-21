import { CSR } from '@/components/CSR';
import { FinalCTA } from '@/components/FinalCTA';

export function CSRPage({ onNavigate }) {
  return (
    <>
      <CSR page onContact={() => onNavigate('/contact')} />
      <FinalCTA onContact={() => onNavigate('/contact')} />
    </>
  );
}
