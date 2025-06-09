
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and mobile-first design.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "AI Dashboard",
      description: "An analytics dashboard featuring AI-powered insights, real-time data visualization, and predictive analytics for business intelligence.",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Design System",
      description: "A comprehensive design system and component library used across multiple products, ensuring consistency and scalability.",
      tech: ["React", "Storybook", "Figma", "TypeScript"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application for fitness tracking with social features, built using React Native and Firebase.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-background to-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A collection of projects that showcase my skills in development, design, and problem-solving.
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card border-border/50 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="glass-card">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="glass-card">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
