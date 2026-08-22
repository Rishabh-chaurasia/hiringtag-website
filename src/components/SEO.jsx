import { useEffect } from 'react';

const siteUrl = 'https://www.hiringtag.com';
const defaultImage = `${siteUrl}/hero-recruitment-v5.png`;

const pageMetadata = {
  '/': { title: 'Recruitment & Talent Consulting in India | Hiring Tag', description: 'Hiring Tag helps Indian businesses hire exceptional talent through executive search, niche hiring, volume recruitment, talent consulting and onboarding support.', heading: 'Recruitment and Talent Consulting' },
  '/about': { title: 'About Hiring Tag | Recruitment Partner in India', description: 'Meet Hiring Tag, a people-first recruitment and talent consulting partner helping businesses across India build high-performing teams.', heading: 'About Hiring Tag' },
  '/services': { title: 'Recruitment Services in India | Hiring Tag', description: 'Explore Hiring Tag recruitment services: executive and leadership hiring, specialized hiring, volume hiring, fresher hiring, talent consulting and onboarding support.', heading: 'Recruitment Services', service: 'Recruitment and Talent Consulting Services' },
  '/expertise': { title: 'Industry Recruitment Expertise | Hiring Tag India', description: 'Find industry-focused recruitment expertise for retail, FMCG, BFSI, healthcare, EdTech, logistics, automotive, e-commerce and information technology.', heading: 'Industry Recruitment Expertise', service: 'Industry-Specific Recruitment' },
  '/how-we-work': { title: 'Recruitment Process | How Hiring Tag Works', description: 'See Hiring Tag’s structured hiring process—from requirement understanding and talent sourcing to assessment, onboarding and long-term partnership.', heading: 'How Hiring Tag Works' },
  '/contact': { title: 'Contact Hiring Tag | Recruitment Consultants', description: 'Contact Hiring Tag to discuss executive search, volume recruitment, niche hiring, workforce planning or your next career opportunity.', heading: 'Contact Hiring Tag' },
  '/csr': { title: '10 Trees for Every Hiring | Hiring Tag CSR', description: 'Learn how Hiring Tag’s CSR initiative plants 10 trees for every successful placement to help build a greener future.', heading: 'Hiring Tag CSR Initiative' },
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

const breadcrumbSchema = (pathname, metadata, canonicalUrl) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    ...(pathname === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: metadata.heading, item: canonicalUrl }]),
  ],
});

export function SEO({ pathname }) {
  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = pathname === '/' ? siteUrl : `${siteUrl}${pathname}`;

    document.title = metadata.title;
    document.documentElement.lang = 'en-IN';
    setMeta('meta[name="description"]', 'name=description', metadata.description);
    setMeta('meta[name="robots"]', 'name=robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('meta[property="og:type"]', 'property=og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', 'Hiring Tag');
    setMeta('meta[property="og:title"]', 'property=og:title', metadata.title);
    setMeta('meta[property="og:description"]', 'property=og:description', metadata.description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property=og:image', defaultImage);
    setMeta('meta[property="og:image:alt"]', 'property=og:image:alt', 'Hiring Tag recruitment and talent consulting');
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', metadata.title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', metadata.description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', defaultImage);

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
    const graph = [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        name: metadata.title,
        description: metadata.description,
        url: canonicalUrl,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbSchema(pathname, metadata, canonicalUrl),
    ];

    if (metadata.service) {
      graph.push({
        '@type': 'Service',
        name: metadata.service,
        description: metadata.description,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'India' },
        url: canonicalUrl,
      });
    }

    schema.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [pathname]);

  return null;
}
