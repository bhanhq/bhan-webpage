import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServices } from '@/lib/content';
import { getLocalizedValue } from '@/lib/utils';
import { Smartphone, Users } from 'lucide-react';
import type { Locale } from '@/lib/types';

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="h-8 w-8" />,
  users: <Users className="h-8 w-8" />,
};

export function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale() as Locale;
  const services = getServices();

  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} className="border-0 shadow-sm bg-background">
              <CardHeader>
                <div className="mb-4 text-primary">
                  {iconMap[service.icon] || <Smartphone className="h-8 w-8" />}
                </div>
                <CardTitle className="text-xl">
                  {getLocalizedValue(service.title, locale)}
                </CardTitle>
                <CardDescription className="text-base">
                  {getLocalizedValue(service.description, locale)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
