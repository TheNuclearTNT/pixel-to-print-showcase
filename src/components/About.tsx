import { Card, CardContent } from "@/components/ui/card";
import { Layers, Printer, Box } from "lucide-react";

const skills = [
  {
    icon: Layers,
    title: "3D Modeling",
    description: "Expert in CAD software and 3D design workflows for both functional and artistic creations"
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Proficient in FDM and resin printing with expertise in material selection and post-processing"
  },
  {
    icon: Box,
    title: "Prototyping",
    description: "Rapid prototyping from concept to physical product with iterative design refinement"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate 3D creator specializing in bringing digital designs to life through modeling and printing. 
            My work spans from intricate artistic pieces to functional mechanical parts, always pushing the boundaries 
            of what's possible with modern fabrication technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,209,197,0.2)] animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
