import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Briefcase, Check, Mail, MapPin, Phone, Send, User } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Reveal, SectionIntro } from './primitives';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [audience, setAudience] = useState('employer');
  const [isSending, setIsSending] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setIsSending(true);
    setSubmissionError('');

    try {
      await emailjs.send(
        'service_iom90m1',
        'template_ic75g5m',
        {
          name: data.get('name') || '',
          company: data.get('company') || '',
          roleExperience: data.get('roleExperience') || '',
          email: data.get('email') || '',
          phone: data.get('phone') || '',
          audience: audience === 'employer' ? 'Employer' : 'Candidate',
          requirement: data.get('requirement') || '',
          message: data.get('message') || '',
        },
        { publicKey: 'difY6Qk-0gcNKuS1B' },
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setSubmissionError('Your message could not be sent. Please try again or contact us directly by email.');
    } finally {
      setIsSending(false);
    }
  };

  const details = [
    { icon: <Mail size={15} />, label: 'Email', value: siteData.company.email, href: `mailto:${siteData.company.email}` },
    { icon: <Phone size={15} />, label: 'Phone', value: siteData.company.phone, href: `tel:${siteData.company.phone}` },
    { icon: <MapPin size={15} />, label: 'Office', value: siteData.company.address },
  ];

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionIntro eyebrow="Get In Touch" title={<>Let's start a <span className="title-accent">conversation.</span></>} body="Whether you're looking to build a high-performing team or explore your next opportunity, we're here to help." />

          <Reveal className="contact-pathways" delay={0.1}>
            <button className={`pathway ${audience === 'employer' ? 'is-active' : ''}`} onClick={() => setAudience('employer')}>
              <span className="pw-icon"><Briefcase size={16} /></span>
              <div>
                <small>For Employers</small>
                <strong>Discuss Your Hiring Needs</strong>
              </div>
              <ArrowRight size={16} />
            </button>
            <button className={`pathway ${audience === 'candidate' ? 'is-active' : ''}`} onClick={() => setAudience('candidate')}>
              <span className="pw-icon"><User size={16} /></span>
              <div>
                <small>For Candidates</small>
                <strong>Submit Your CV</strong>
              </div>
              <ArrowRight size={16} />
            </button>
          </Reveal>

          <Reveal className="contact-details" delay={0.15}>
            {details.map((d) => (
              <a className="contact-detail" key={d.label} href={d.href || '#'} onClick={(e) => !d.href && e.preventDefault()}>
                <span className="cd-icon">{d.icon}</span>
                <strong>{d.value}</strong>
              </a>
            ))}
            <div className="contact-social-links" aria-label="Hiring Tag social links">
              <a className="contact-social-link is-whatsapp" href={`https://wa.me/${siteData.company.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Contact Hiring Tag on WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.64 15.03L2 22l5.12-1.32A10 10 0 1 0 12 2Zm0 18.18a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.04.79.81-2.96-.2-.31A8.18 8.18 0 1 1 12 20.18Zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.48-.6 1.69-1.19.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" /></svg>
              </a>
              <a className="contact-social-link is-linkedin" href="https://www.linkedin.com/company/hiring-tag-india/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="Follow Hiring Tag on LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="contact-form-wrap" delay={0.1}>
          {submitted ? (
            <div className="form-success">
              <span className="success-icon"><Check size={26} /></span>
              <h3>Thank you for your enquiry.</h3>
              <p>Your message has been received. The Hiring Tag team will get back to you shortly.</p>
              <button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={15} /></button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="form-head">
                <h3>Send us a message.</h3>
                <p>{audience === 'employer' ? "Tell us about your hiring requirements and we'll be in touch shortly." : "Share your details and we'll help you explore relevant opportunities."}</p>
              </div>

              <div className="form-row">
                <label>Full Name<input name="name" required placeholder="Your full name" /></label>
                {audience === 'employer' ? <label>Company Name<input name="company" required placeholder="Your company" /></label> : <label>Current role / experience<input name="roleExperience" placeholder="Your current role or experience" /></label>}
              </div>
              <div className="form-row">
                <label>Email<input name="email" required type="email" placeholder="you@company.com" /></label>
                <label>Phone<input name="phone" placeholder="+91 00000 00000" /></label>
              </div>

              <label>I am:
                <select name="audience" value={audience === 'employer' ? 'Employer' : 'Candidate'} onChange={(e) => setAudience(e.target.value === 'Candidate' ? 'candidate' : 'employer')}>
                  <option>Employer</option>
                  <option>Candidate</option>
                </select>
              </label>

              <label>{audience === 'employer' ? 'Hiring Requirement' : 'Subject'}
                <input name="requirement" required placeholder={audience === 'employer' ? "e.g. Sales roles across North India" : "How can we help?"} />
              </label>

              <label>Message<textarea name="message" required rows={3} placeholder="Tell us how we can help..." /></label>

              {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
              <button className="btn btn-primary form-submit" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'} <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
