import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get from localStorage, default to Norwegian
    const saved = localStorage.getItem('language') as Language;
    return saved === 'en' || saved === 'no' ? saved : 'no';
  });

  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Hero
      'hero.subtitle': 'Consulting and app development',
      
      // Services
      'services.title': 'Our Services',
      'services.subtitle': 'We offer comprehensive solutions tailored to your needs',
      'services.appDev.title': 'App Development',
      'services.appDev.description': 'We build modern, scalable applications with the latest technologies. From concept to launch - we create digital experiences that engage and convert.',
      'services.appDev.item1': 'Mobile and web applications',
      'services.appDev.item2': 'Cloud-native solutions',
      'services.appDev.item3': 'API integrations',
      'services.appDev.item4': 'Scalable architecture',
      'services.consulting.title': 'Consulting',
      'services.consulting.description': 'Experienced consultants delivering insights and strategy to optimize your digital processes. We help you make the right technological choices for long-term success.',
      'services.consulting.item1': 'Technical advisory',
      'services.consulting.item2': 'Digital transformation',
      'services.consulting.item3': 'Process optimization',
      'services.consulting.item4': 'Strategic guidance',
      
      // Team
      'team.title': 'Team',
      'team.role': 'Consultant & Developer',
      'team.linkedin': 'LinkedIn Profile',
      
      // Contact
      'contact.title': 'Contact Us',
      'contact.email': 'Email',
      'contact.orgNr': 'Org.nr',
      'contact.sendEmail': 'Send us an email',
      
      // Footer
      'footer.rights': 'All rights reserved.',
    },
    no: {
      // Hero
      'hero.subtitle': 'Konsulentvirksomhet og apputvikling',
      
      // Services
      'services.title': 'Våre Tjenester',
      'services.subtitle': 'Vi tilbyr omfattende løsninger tilpasset dine behov',
      'services.appDev.title': 'Apputvikling',
      'services.appDev.description': 'Vi bygger moderne, skalerbare applikasjoner med de nyeste teknologiene. Fra konsept til lansering - vi skaper digitale opplevelser som engasjerer og konverterer.',
      'services.appDev.item1': 'Mobile og web-applikasjoner',
      'services.appDev.item2': 'Cloud-native løsninger',
      'services.appDev.item3': 'API-integrasjoner',
      'services.appDev.item4': 'Skalerbar arkitektur',
      'services.consulting.title': 'Konsultasjon',
      'services.consulting.description': 'Erfarne konsulenter som leverer innsikt og strategi for å optimalisere dine digitale prosesser. Vi hjelper deg å ta de riktige teknologiske valgene for langsiktig suksess.',
      'services.consulting.item1': 'Teknisk rådgivning',
      'services.consulting.item2': 'Digital transformasjon',
      'services.consulting.item3': 'Prosessoptimalisering',
      'services.consulting.item4': 'Strategisk veiledning',
      
      // Team
      'team.title': 'Team',
      'team.role': 'Konsulent & Utvikler',
      'team.linkedin': 'LinkedIn Profil',
      
      // Contact
      'contact.title': 'Kontakt Oss',
      'contact.email': 'E-post',
      'contact.orgNr': 'Org.nr',
      'contact.sendEmail': 'Send oss en e-post',
      
      // Footer
      'footer.rights': 'Alle rettigheter reservert.',
    },
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

