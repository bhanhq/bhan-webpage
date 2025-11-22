import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground">
              Bhan AS
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Ekspert konsulentvirksomhet og apputvikling for fremtiden
            </p>
          </div>
          <div className="space-y-4 animate-fade-in">
            <p className="mx-auto max-w-[600px] text-muted md:text-lg text-primary-foreground/80">
              Vi leverer skreddersydde digitale løsninger som driver din bedrift fremover. 
              Med spisskompetanse innen konsultasjon og moderne apputvikling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Kom i gang
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
              >
                Les mer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;