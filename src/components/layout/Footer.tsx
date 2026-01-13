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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bhan AS. {t('rights')}.
          </p>
          <p className="text-xl font-semibold tracking-tight">
            Bhan
          </p>
        </div>
      </Container>
    </footer>
  );
}
