export function Logo({ compact = false }) {
  return (
    <div className={`logo ${compact ? 'logo-compact' : ''}`} aria-label="Hiring Tag">
      <img src="/hiring-tag-logo.png" alt="Hiring Tag" />
    </div>
  );
}
