import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, FileText, Upload, X } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

export function JoinNetworkModal({ open, onClose }) {
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  const close = () => { onClose(); setTimeout(() => setDone(false), 300); };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
          <motion.div className="join-modal" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close} aria-label="Close"><X size={18} /></button>
            <div className="join-modal-side">
              <Logo />
              <h3>Join the Hiring Tag network.</h3>
              <p>Let us help connect your skills and ambitions with the right opportunities.</p>
              <ul className="join-perks">
                <li><Check size={14} /> Personalised role matching</li>
                <li><Check size={14} /> Confidential profile handling</li>
                <li><Check size={14} /> Direct access to our recruitment team</li>
              </ul>
            </div>
            <div className="join-modal-form">
              {done ? (
                <div className="form-success">
                  <span className="success-icon"><Check size={26} /></span>
                  <h3>Welcome to the network.</h3>
                  <p>Your details have been captured. Our team will reach out with opportunities aligned to your profile.</p>
                  <button className="text-link" onClick={close}>Back to site <ArrowRight size={15} /></button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3>Share your details.</h3>
                  <p>We'll be in touch when the right opportunity comes up.</p>
                  <label>Full Name<input required placeholder="Your name" /></label>
                  <label>Email Address<input required type="email" placeholder="you@email.com" /></label>
                  <label>Phone Number<input placeholder="+91 00000 00000" /></label>
                  <label>Current Role / Area of Expertise<input placeholder="e.g. Senior Software Engineer" /></label>
                  <label>Message<textarea rows={3} placeholder="Tell us about your career goals..." /></label>
                  <label className="file-input"><Upload size={16} /><span>Upload your CV / Resume (PDF, DOC, DOCX)</span><input type="file" accept=".pdf,.doc,.docx" /></label>
                  <button className="btn btn-primary form-submit" type="submit">Join Our Network <ArrowRight size={15} /></button>
                  <p className="form-disclaimer">By joining, you agree to be contacted by {siteData.company.name} regarding relevant opportunities.</p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
