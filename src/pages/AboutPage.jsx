import { About } from '@/components/About';
import { Story } from '@/components/Story';
import { MissionVision } from '@/components/MissionVision';
import { ApproachPreview } from '@/components/ApproachPreview';
import { WhatDrivesUs } from '@/components/WhatDrivesUs';
import { Impact } from '@/components/Impact';
import { FinalCTA } from '@/components/FinalCTA';

export function AboutPage({ onNavigate }) {
  return (
    <>
      <About />
      <Story onNavigate={onNavigate} />
      <MissionVision />
      <ApproachPreview onNavigate={onNavigate} />
      <WhatDrivesUs />
      <Impact />
      <FinalCTA onContact={() => onNavigate('/contact')} />
    </>
  );
}
