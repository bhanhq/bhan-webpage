import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground">Bhan AS</p>
            <p className="text-xs text-muted-foreground mt-1">Org.nr: 936 333 982</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bhan AS. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;