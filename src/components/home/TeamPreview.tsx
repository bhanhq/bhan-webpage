import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/shared/Container';
import { getTeamMembers } from '@/lib/content';
import { getLocalizedValue } from '@/lib/utils';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/lib/types';

export function TeamPreview() {
  const t = useTranslations('team');
  const locale = useLocale() as Locale;
  const members = getTeamMembers();

  return (
    <section id="team" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {members.map((member) => (
            <div key={member.slug} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-semibold text-muted-foreground">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground mb-3">
                {getLocalizedValue(member.title, locale)}
              </p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                {getLocalizedValue(member.bio, locale)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
