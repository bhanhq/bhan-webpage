import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Øystein Bruce",
      role: "Konsulent & Utvikler",
      linkedin: "https://www.linkedin.com/in/oystein-bruce/",
    },
    {
      name: "Bendik Nyheim",
      role: "Konsulent & Utvikler",
      linkedin: "https://www.linkedin.com/in/bendik-nyheim-b60257223/",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Møt Teamet
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            To dedikerte eksperter klar til å realisere dine digitale visjoner
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-card-foreground">{member.name}</h3>
                  <p className="text-muted-foreground font-medium">{member.role}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 group/btn border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profil
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;