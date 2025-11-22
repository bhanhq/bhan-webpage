import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { language, setLanguage, t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      {/* Language Switcher Button - Top Right */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <div className="flex gap-2">
          <Button
            variant={language === 'no' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('no')}
            className={language === 'no' 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-background/80 backdrop-blur-sm text-primary-foreground hover:bg-background/90 border-primary-foreground/20'
            }
          >
            Norsk
          </Button>
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('en')}
            className={language === 'en' 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-background/80 backdrop-blur-sm text-primary-foreground hover:bg-background/90 border-primary-foreground/20'
            }
          >
            English
          </Button>
        </div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground">
              Bhan AS
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-primary-foreground/90 font-medium">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;