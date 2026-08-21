export function Reveal({ children, className = '', style }) {
  return <div className={className} style={style}>{children}</div>;
}

export function SectionIntro({ eyebrow, title, body, align = 'left', light = false }) {
  return (
    <div className={`section-intro ${align} ${light ? 'is-light' : ''}`}>
      <span className="eyebrow"><i className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
