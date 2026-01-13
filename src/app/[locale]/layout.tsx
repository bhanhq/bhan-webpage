import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bhan.no'),
  icons: {
    icon: '/images/logos/icon-bhan.svg',
    apple: '/images/logos/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Bhan AS',
    locale: 'nb_NO',
    images: [
      {
        url: '/images/logos/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bhan - Software Development & Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logos/og-image.png'],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
