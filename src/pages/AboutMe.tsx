import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Printer, Box, Code, Wrench, Palette } from "lucide-react";

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
  },
  {
    icon: Code,
    title: "CAD Software",
    description: "Skilled in industry-standard tools like Fusion 360, Blender, and SolidWorks"
  },
  {
    icon: Wrench,
    title: "Post-Processing",
    description: "Expert in finishing techniques including sanding, painting, and assembly"
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Balance between aesthetic appeal and functional engineering in every project"
  }
];

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a passionate 3D creator specializing in bringing digital designs to life through modeling and printing. 
            My work spans from intricate artistic pieces to functional mechanical parts, always pushing the boundaries 
            of what's possible with modern fabrication technology.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            My <span className="text-primary">Journey</span>
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              My fascination with 3D creation began when I first discovered the intersection of digital design 
              and physical manufacturing. The ability to conceptualize an idea, model it in software, and then 
              hold the tangible result in my hands sparked a passion that continues to drive my work today.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, I've honed my skills across various aspects of the 3D creation pipeline—from 
              mastering CAD software and understanding material properties to perfecting post-processing 
              techniques. Each project presents unique challenges that push me to learn and innovate.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it's designing functional mechanical components, creating artistic sculptures, or 
              prototyping new product ideas, I approach every project with attention to detail and a 
              commitment to quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for bringing ideas from concept to reality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,209,197,0.2)]"
                >
                  <CardContent className="p-6">
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

      {/* Contact Section */}
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutMe;
