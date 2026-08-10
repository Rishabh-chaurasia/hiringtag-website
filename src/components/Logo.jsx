export function Logo({ compact = false }) {
  return (
    <div className={`logo ${compact ? 'logo-compact' : ''}`} aria-label="HiringTag">
      <span className="logo-hiring">Hiring</span>
      <i className="logo-dot logo-dot-red" />
      <i className="logo-dot logo-dot-yellow" />
      <span className="logo-tag">Tag</span>
    </div>
  );
}
