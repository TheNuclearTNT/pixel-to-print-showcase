import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const allProjects = [
  {
    title: "Geometric Sculpture",
    description: "Intricate lattice design showcasing precision 3D printing capabilities with complex internal structures",
    image: project1,
    category: "3D Print"
  },
  {
    title: "Mechanical Design",
    description: "Technical CAD modeling for functional mechanical components with precise engineering tolerances",
    image: project2,
    category: "3D Model"
  },
  {
    title: "Miniature Collection",
    description: "Detailed miniatures demonstrating multi-color printing techniques and fine detail resolution",
    image: project3,
    category: "3D Print"
  },
  {
    title: "Character Render",
    description: "Full character modeling workflow showcasing the process from wireframe to final rendered output",
    image: project4,
    category: "3D Model"
  },
  {
    title: "Architectural Model",
    description: "Complex architectural prototype with intricate structural details and accurate scale representation",
    image: project5,
    category: "3D Print"
  },
  {
    title: "Functional Assembly",
    description: "Working mechanical parts with precision-engineered tolerances and moving components",
    image: project6,
    category: "3D Print"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<"All" | "3D Print" | "3D Model">("All");

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my portfolio of 3D modeling and printing work—from concept to creation
          </p>
          
          {/* Filter Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setFilter("All")}
              variant={filter === "All" ? "default" : "outline"}
              className={filter === "All" 
                ? "bg-primary text-primary-foreground" 
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              All Projects
            </Button>
            <Button
              onClick={() => setFilter("3D Print")}
              variant={filter === "3D Print" ? "default" : "outline"}
              className={filter === "3D Print" 
                ? "bg-primary text-primary-foreground" 
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              3D Prints
            </Button>
            <Button
              onClick={() => setFilter("3D Model")}
              variant={filter === "3D Model" ? "default" : "outline"}
              className={filter === "3D Model" 
                ? "bg-primary text-primary-foreground" 
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              3D Models
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Projects;
