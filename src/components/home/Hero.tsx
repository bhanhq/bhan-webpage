'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <Container className="text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-4 tracking-wide">
          Bhan AS
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Button size="lg" className="text-base px-8" onClick={scrollToContact}>
          {t('cta')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Container>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
}
