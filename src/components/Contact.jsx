import { useState } from 'react';
import { ArrowRight, Briefcase, Check, FileText, Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import { siteData } from '@/data/siteData';
import { Reveal, SectionIntro } from './primitives';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [audience, setAudience] = useState('employer');

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
                <div><small>{d.label}</small><strong>{d.value}</strong></div>
              </a>
            ))}
            <a className="contact-detail" href={`https://wa.me/${siteData.company.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <span className="cd-icon cd-whatsapp"><MessageCircle size={15} /></span>
              <div><small>WhatsApp</small><strong>Message us on WhatsApp</strong></div>
            </a>
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
                <label>Full Name<input required placeholder="Your full name" /></label>
                <label>Company Name<input placeholder="Your company" /></label>
              </div>
              <div className="form-row">
                <label>Email<input required type="email" placeholder="you@company.com" /></label>
                <label>Phone<input placeholder="+91 00000 00000" /></label>
              </div>

              <label>I am:
                <select value={audience === 'employer' ? 'Employer' : 'Candidate'} onChange={(e) => setAudience(e.target.value === 'Candidate' ? 'candidate' : 'employer')}>
                  <option>Employer</option>
                  <option>Candidate</option>
                </select>
              </label>

              <label>{audience === 'employer' ? 'Hiring Requirement' : 'Subject'}
                <input required placeholder={audience === 'employer' ? "e.g. Sales roles across North India" : "How can we help?"} />
              </label>

              <label>Message<textarea required rows={3} placeholder="Tell us how we can help..." /></label>

              <label className="file-input">
                <FileText size={16} />
                <span>Attach a file (PDF, DOC, DOCX)</span>
                <input type="file" accept=".pdf,.doc,.docx" />
              </label>

              <button className="btn btn-primary form-submit" type="submit">
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
