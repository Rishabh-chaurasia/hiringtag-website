import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, FileText, Grid3x3, Info, Mail, Send, User, X } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Logo } from './Logo';

const flowIcons = {
  user: User, briefcase: BriefcaseBusiness, info: Info, mail: Mail, grid: Grid3x3, file: FileText,
};

export function HiringTagAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: "Hi, I'm the Hiring Tag assistant. How can we help you today?" }]);
  const [activeFlow, setActiveFlow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const choices = siteData.assistant.initial;
  const flowOptions = activeFlow ? siteData.assistant.flows[activeFlow] : null;

  const resetChat = () => {
    setMessages([{ from: 'bot', text: "Hi, I'm the Hiring Tag assistant. How can we help you today?" }]);
    setActiveFlow(null);
    setShowForm(false);
  };

  const handleChoice = (choice) => {
    setMessages((m) => [...m, { from: 'user', text: choice.label }]);
    setActiveFlow(choice.id);
    setShowForm(false);
    const intro = {
      hiring: "Great — here's how we can support your hiring:",
      services: "Here are our core recruitment services:",
      industries: "Here are the industries we serve:",
      contact: "We'd love to hear from you. Please share your details:",
      job: "We'd be happy to help with your job search:",
      cv: "You can submit your CV through our contact form:",
    };
    if (choice.id === 'contact') setShowForm(true);
    setMessages((m) => [...m, { from: 'bot', text: intro[choice.id] }]);
  };

  const handleFlowAction = (action) => {
    setMessages((m) => [...m, { from: 'user', text: action.label }]);
    if (action.type === 'link' && action.target) {
      setOpen(false);
      document.getElementById(action.target)?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(resetChat, 400);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const lines = [
      `Name: ${data.get('name') || ''}`,
      `Business email: ${data.get('email') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      '',
      'Message:',
      data.get('message') || '',
    ];
    const subject = encodeURIComponent('New Enquiry — Hiring Tag Assistant');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${siteData.company.email}?subject=${subject}&body=${body}`;
    setMessages((m) => [...m, { from: 'user', text: 'Enquiry sent' }]);
    setMessages((m) => [...m, { from: 'bot', text: "Thank you! Your details have been captured and our team will reach out shortly." }]);
    setShowForm(false);
    setActiveFlow(null);
  };

  const panelVariants = isMobile
    ? { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }
    : { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button className="assistant-trigger" onClick={() => setOpen(true)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }} aria-label="Open Hiring Tag Assistant">
            <span className="at-avatar"><img src="/logo-icon.png" alt="Hiring Tag" /></span>
            <span className="at-text"><small>Hiring Tag Assistant</small><strong>How can we help?</strong></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="assistant-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.div
              className={`assistant-panel ${isMobile ? 'is-mobile' : ''}`}
              initial={panelVariants.initial}
              animate={panelVariants.animate}
              exit={panelVariants.exit}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="assistant-head">
                <div className="ah-left">
                  <span className="ah-avatar"><img src="/logo-icon.png" alt="Hiring Tag" /></span>
                  <div><strong>Hiring Tag Assistant</strong><small><i className="status-dot" />How can we help you today?</small></div>
                </div>
                <button className="ah-close" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button>
              </div>

              <div className="assistant-body">
                {messages.map((m, i) => (
                  <div key={i} className={`msg ${m.from}`}>{m.text}</div>
                ))}

                {!activeFlow && (
                  <div className="choice-grid">
                    {choices.map((c) => {
                      const Icon = flowIcons[c.icon];
                      return <button key={c.id} className="choice-btn" onClick={() => handleChoice(c)}><span><Icon size={15} />{c.label}</span><ArrowRight size={14} /></button>;
                    })}
                  </div>
                )}

                {activeFlow && !showForm && flowOptions && (
                  <div className="choice-grid">
                    {flowOptions.map((opt, i) => (
                      <button key={i} className="choice-btn" onClick={() => handleFlowAction(opt)}><span>{opt.label}</span><ArrowRight size={14} /></button>
                    ))}
                    <button className="choice-back" onClick={resetChat}>← Back to start</button>
                  </div>
                )}

                {showForm && (
                  <form className="assistant-form" onSubmit={onFormSubmit}>
                    <input name="name" required placeholder="Your name" />
                    <input name="email" required type="email" placeholder="Business email" />
                    <input name="company" placeholder="Company name" />
                    <input name="phone" placeholder="Phone" />
                    <textarea name="message" required rows={3} placeholder="Your message" />
                    <button className="btn btn-primary" type="submit">Send <Send size={14} /></button>
                    <button type="button" className="choice-back" onClick={resetChat}>← Back to start</button>
                  </form>
                )}
              </div>
              <div className="assistant-foot"><Logo compact /></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
