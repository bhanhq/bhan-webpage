'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { localeNames, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === 'no' ? 'en' : 'no';

  const handleSwitch = () => {
    router.replace(pathname, { locale: otherLocale, scroll: false });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="text-sm font-medium"
    >
      {localeNames[otherLocale]}
    </Button>
  );
}
