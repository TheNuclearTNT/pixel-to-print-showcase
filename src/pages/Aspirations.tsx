import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award, Rocket, BookOpen } from "lucide-react";

const aspirations = [
  {
    icon: Target,
    title: "Professional Fabrication Studio",
    description: "Establish a fully-equipped studio offering professional 3D printing services and consultation",
    timeframe: "1-2 Years"
  },
  {
    icon: Lightbulb,
    title: "Product Line Development",
    description: "Create and launch my own line of innovative 3D-printed products for the maker community",
    timeframe: "2-3 Years"
  },
  {
    icon: Users,
    title: "Collaborative Projects",
    description: "Partner with designers, artists, and engineers on large-scale creative installations",
    timeframe: "Ongoing"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Showcase work at maker faires and 3D printing exhibitions to gain industry recognition",
    timeframe: "1-3 Years"
  },
  {
    icon: Rocket,
    title: "Advanced Materials Research",
    description: "Experiment with cutting-edge materials and printing technologies including metal and ceramic printing",
    timeframe: "3-5 Years"
  },
  {
    icon: BookOpen,
    title: "Teaching & Mentoring",
    description: "Share knowledge through workshops, tutorials, and mentoring aspiring 3D creators",
    timeframe: "Ongoing"
  }
];

const Aspirations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Future Vision
          </h1>
          <p className="text-xl text-muted-foreground">
            Goals and aspirations driving my journey forward in 3D creation
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                My Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                I envision a future where 3D creation becomes more accessible and sustainable, enabling makers 
                and creators worldwide to bring their ideas to life. My goal is to push the boundaries of what's 
                possible with additive manufacturing while building a community that shares knowledge and inspires 
                innovation. I want to bridge the gap between digital design and physical reality, creating pieces 
                that are both functional and beautiful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Goals & <span className="text-primary">Ambitions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Concrete objectives guiding my path forward
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aspirations.map((aspiration, index) => {
              const Icon = aspiration.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,209,197,0.2)]"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="mb-3 inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                      {aspiration.timeframe}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{aspiration.title}</h3>
                    <p className="text-muted-foreground">{aspiration.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build the <span className="text-primary">Future Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on innovative projects or discussing opportunities? 
            I'm always excited to connect with fellow creators and visionaries.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Aspirations;
