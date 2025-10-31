import { ProjectCard } from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    title: "Geometric Sculpture",
    description: "Intricate lattice design showcasing precision 3D printing capabilities",
    image: project1,
    category: "3D Print"
  },
  {
    title: "Mechanical Design",
    description: "Technical CAD modeling for functional mechanical components",
    image: project2,
    category: "3D Model"
  },
  {
    title: "Miniature Collection",
    description: "Detailed miniatures demonstrating multi-color printing techniques",
    image: project3,
    category: "3D Print"
  },
  {
    title: "Character Render",
    description: "Full character modeling with wireframe to final render workflow",
    image: project4,
    category: "3D Model"
  },
  {
    title: "Architectural Model",
    description: "Complex architectural prototype with intricate structural details",
    image: project5,
    category: "3D Print"
  },
  {
    title: "Functional Assembly",
    description: "Working mechanical parts with precision-engineered tolerances",
    image: project6,
    category: "3D Print"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of 3D modeling and printing work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
  );
};
