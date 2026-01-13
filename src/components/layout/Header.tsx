'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Container } from '@/components/shared/Container';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const scrollItems = [
  { id: 'team', labelKey: 'team' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setOpen(false);
    if (pathname !== '/') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className={`text-2xl font-bold tracking-tight hover:text-primary transition-colors ${audiowide.className}`}
          >
            Bhan
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {scrollItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
              >
                {t(item.labelKey)}
              </button>
            ))}
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {scrollItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-lg font-medium transition-colors hover:text-foreground text-muted-foreground text-left"
                    >
                      {t(item.labelKey)}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
