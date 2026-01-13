import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bhan.no';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['', '/en'];

  const pages = locales.map((locale) => ({
    url: `${baseUrl}${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  return pages;
}
