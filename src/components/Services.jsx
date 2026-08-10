import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, GraduationCap, School, SlidersHorizontal, Users } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { SectionIntro } from './primitives';

export function Services() {
  const serviceIcons = [Users, GraduationCap, School, BriefcaseBusiness, SlidersHorizontal];

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionIntro eyebrow="What We Do" title={<>Recruitment solutions built for <span className="title-accent">your business.</span></>} body="From high-volume workforce hiring to executive search, our services are designed to meet diverse talent acquisition needs across industries." />
        <div className="service-list">
          {siteData.services.map((s, i) => (
            <motion.div className="service-row" key={s.title} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="service-body">
                <div className="service-title"><span className="service-icon">{(() => { const Icon = serviceIcons[i]; return <Icon size={16} strokeWidth={1.7} />; })()}</span><h3>{s.title}</h3></div>
                <p>{s.description}</p>
              </div>
              <span className="service-arrow"><ArrowRight size={18} /></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
