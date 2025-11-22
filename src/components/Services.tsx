import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import appDevIcon from "@/assets/app-dev-icon.jpg";
import consultingIcon from "@/assets/consulting-icon.jpg";
import { Code2, Users } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {t('services.title')}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <img 
                  src={appDevIcon} 
                  alt={t('services.appDev.title')} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">{t('services.appDev.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.appDev.description')}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 pt-4">
                <li>• {t('services.appDev.item1')}</li>
                <li>• {t('services.appDev.item2')}</li>
                <li>• {t('services.appDev.item3')}</li>
                <li>• {t('services.appDev.item4')}</li>
              </ul>
            </div>
          </Card>

          <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <img 
                  src={consultingIcon} 
                  alt={t('services.consulting.title')} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">{t('services.consulting.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.consulting.description')}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 pt-4">
                <li>• {t('services.consulting.item1')}</li>
                <li>• {t('services.consulting.item2')}</li>
                <li>• {t('services.consulting.item3')}</li>
                <li>• {t('services.consulting.item4')}</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;