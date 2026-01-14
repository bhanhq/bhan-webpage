import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TeamPreview } from '@/components/home/TeamPreview';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { ContactSection } from '@/components/home/ContactSection';
import { getCompany } from '@/lib/content';
import { locales } from '@/i18n/config';

// Generate static pages for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://bhan.no',
      locale: locale === 'no' ? 'nb_NO' : 'en_US',
      images: [
        {
          url: '/images/logos/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Bhan - Programvareutvikling og rådgivning',
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: ['/images/logos/og-image.png'],
    },
    alternates: {
      canonical: 'https://bhan.no',
      languages: {
        'nb-NO': 'https://bhan.no',
        'en': 'https://bhan.no/en',
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const company = getCompany();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company?.name || 'Bhan AS',
    description: 'Software development and consulting company',
    email: company?.email,
    url: 'https://bhan.no',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesSection />
      <TeamPreview />
      <ProjectsPreview />
      <ContactSection />
    </>
  );
}
