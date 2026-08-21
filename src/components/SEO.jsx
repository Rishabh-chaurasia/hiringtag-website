import { useEffect } from 'react';

const siteUrl = 'https://www.hiringtag.com';

const pageMetadata = {
  '/': {
    title: 'Recruitment & Talent Consulting in India | Hiring Tag',
    description: 'Hiring Tag is a recruitment and talent consulting firm in India. We help organizations hire exceptional talent through executive search, niche hiring, volume hiring and onboarding support.',
  },
  '/about': {
    title: 'About Hiring Tag | Recruitment & Talent Consulting',
    description: 'Learn about Hiring Tag, a people-first recruitment and talent consulting partner helping organizations build high-performing teams across India.',
  },
  '/services': {
    title: 'Recruitment Services | Executive, Niche & Volume Hiring',
    description: 'Explore Hiring Tag recruitment services: executive and leadership hiring, specialized hiring, volume hiring, fresher hiring, talent consulting and onboarding support.',
  },
  '/expertise': {
    title: 'Industry Recruitment Expertise | Hiring Tag',
    description: 'Discover Hiring Tag’s industry recruitment expertise across retail, FMCG, BFSI, healthcare, education, logistics, automotive, e-commerce and information technology.',
  },
  '/how-we-work': {
    title: 'Our Recruitment Process | How Hiring Tag Works',
    description: 'See Hiring Tag’s structured recruitment process—from understanding your needs and sourcing talent to assessment, onboarding and long-term partnership.',
  },
  '/contact': {
    title: 'Contact Hiring Tag | Recruitment & Talent Consulting',
    description: 'Contact Hiring Tag to discuss executive search, volume recruitment, niche hiring, workforce planning or your next career opportunity.',
  },
  '/csr': {
    title: '10 Trees for Every Hiring | Hiring Tag CSR Initiative',
    description: 'Every successful placement at Hiring Tag supports a greener future. Learn about our CSR initiative to plant 10 trees for every hiring.',
  },
};

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [name, key] = attribute.split('=');
    element.setAttribute(name, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

export function SEO({ pathname }) {
  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = pathname === '/' ? siteUrl : `${siteUrl}${pathname}`;

    document.title = metadata.title;
    document.documentElement.lang = 'en-IN';
    setMeta('meta[name="description"]', 'name=description', metadata.description);
    setMeta('meta[property="og:title"]', 'property=og:title', metadata.title);
    setMeta('meta[property="og:description"]', 'property=og:description', metadata.description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', metadata.title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', metadata.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingSchema = document.getElementById('page-seo-schema');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.id = 'page-seo-schema';
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      isPartOf: { '@type': 'WebSite', name: 'Hiring Tag', url: siteUrl },
    });
    document.head.appendChild(schema);

    return () => schema.remove();
  }, [pathname]);

  return null;
}
