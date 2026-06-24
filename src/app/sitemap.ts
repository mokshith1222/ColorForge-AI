import { MetadataRoute } from 'next';

const DOMAIN = 'https://colorforge.ai'; // Base URL

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/color-picker',
    '/gradient-generator',
    '/color-palette-generator',
    '/tailwind-color-generator',
    '/image-color-extractor',
    '/accessibility-checker',
    '/color-theory',
    '/design-systems',
    '/brand-colors',
    '/collections',
    '/trends',
    '/hex-to-rgb',
    '/rgb-to-hex',
    '/hsl-converter',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
