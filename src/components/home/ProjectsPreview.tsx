import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/shared/Container';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProjects } from '@/lib/content';
import { getLocalizedValue } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/lib/types';

export function ProjectsPreview() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;
  const projects = getProjects();

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.slug} className="border-0 shadow-sm bg-background overflow-hidden gap-0 p-8">
              <div className="flex items-center gap-3 mb-2">
                {project.icon ? (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  {project.status && project.status !== 'live' && (
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {t(`status.${project.status}`)}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {getLocalizedValue(project.description, locale)}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
                >
                  {t('visitProject')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
