import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2018",
    title: "First 3D Printer",
    description: "Acquired my first 3D printer and began experimenting with basic prints and designs",
    highlight: false
  },
  {
    year: "2019",
    title: "CAD Software Mastery",
    description: "Dedicated time to learning professional CAD software including Fusion 360 and Blender",
    highlight: false
  },
  {
    year: "2020",
    title: "First Commission",
    description: "Completed my first commissioned project—a functional mechanical prototype for a local inventor",
    highlight: true
  },
  {
    year: "2021",
    title: "Advanced Techniques",
    description: "Expanded skills to include resin printing and advanced post-processing techniques",
    highlight: false
  },
  {
    year: "2022",
    title: "Portfolio Launch",
    description: "Created online portfolio and began sharing work with the maker community",
    highlight: true
  },
  {
    year: "2023",
    title: "Workshop Setup",
    description: "Established dedicated workshop space with multiple printers and professional finishing tools",
    highlight: false
  },
  {
    year: "2024",
    title: "Collaborative Projects",
    description: "Partnered with designers and engineers on complex multi-disciplinary projects",
    highlight: true
  },
  {
    year: "2025",
    title: "Ongoing Innovation",
    description: "Continuing to push boundaries and explore new materials and techniques",
    highlight: false
  }
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            Milestones and moments that shaped my 3D creation path
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-primary">{event.year}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} pl-20 md:pl-0`}>
                    <Card 
                      className={`bg-card border-border/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,209,197,0.2)] ${
                        event.highlight ? "border-primary/50" : "hover:border-primary/50"
                      }`}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                          {event.title}
                          {event.highlight && (
                            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          )}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Timeline;
