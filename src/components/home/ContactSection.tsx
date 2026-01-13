import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/Container';
import { Card, CardContent } from '@/components/ui/card';
import { getCompany } from '@/lib/content';
import { Mail, Building2 } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const company = getCompany();

  if (!company) {
    return null;
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-0 shadow-sm bg-background">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t('email')}</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Organization Number */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t('orgNumber')}</p>
                    <p className="text-lg font-medium">{company.orgNumber}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
