import { Globe2, Headphones, Target, UsersRound } from 'lucide-react';

const impactItems = [
  { icon: UsersRound, title: 'IT & Non-IT Hiring', text: 'Expertise across business functions, industries and experience levels.' },
  { icon: Headphones, title: 'End-to-End Support', text: 'Structured support from requirement understanding through onboarding.' },
  { icon: Globe2, title: 'Pan-India Talent Network', text: 'Access to a broad network of relevant, pre-assessed professionals.' },
  { icon: Target, title: 'Closure-Focused Delivery', text: 'A disciplined process focused on quality outcomes and successful joining.' },
];

export function Impact() {
  return (
    <section className="section impact" aria-labelledby="impact-heading">
      <div className="container">
        <div className="impact-head">
          <h2 id="impact-heading">Recruitment That Creates Impact</h2>
        </div>
        <div className="impact-grid">
          {impactItems.map(({ icon: Icon, title, text }) => (
            <article className="impact-item" key={title}>
              <Icon size={24} strokeWidth={1.6} />
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
