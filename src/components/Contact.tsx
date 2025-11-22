import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Kontakt Oss
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            La oss diskutere hvordan vi kan hjelpe deg å nå dine mål
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border bg-card p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
                <div className="flex items-center gap-3 group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">E-post</p>
                    <a 
                      href="mailto:bhanhq3@gmail.com" 
                      className="text-lg font-medium text-card-foreground hover:text-primary transition-colors"
                    >
                      bhanhq3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-border" />

                <div className="flex items-center gap-3 group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Org.nr</p>
                    <p className="text-lg font-medium text-card-foreground">936 333 982</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.location.href = 'mailto:bhanhq3@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send oss en e-post
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Vi svarer normalt innen 24 timer
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;