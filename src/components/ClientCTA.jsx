import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';

export function ClientCTA() {
  return (
    <section className="client-cta client-cta--compact">
      <div className="container client-cta-inner">
        <motion.span className="client-cta-icon" initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <BriefcaseBusiness size={22} strokeWidth={1.6} />
        </motion.span>
        <div className="client-cta-copy">
          <p className="client-cta-line"><strong>Looking for the right talent?</strong> Partner with Hiring Tag to build teams that move your business forward.</p>
        </div>
        <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Discuss Your Hiring Needs <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
