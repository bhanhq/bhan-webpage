import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/Container';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/30">
      <Container>
        <Separator className="mb-8" />
        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Bhan AS. {t('rights')}.
        </p>
      </Container>
    </footer>
  );
}
