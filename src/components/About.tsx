
import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "text-blue-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, Prototyping",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimization, SEO, Core Web Vitals",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Agile, Git, Team Leadership, Mentoring",
      color: "text-green-400"
    }
  ];

  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that bridge the gap between design and technology. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-purple/20 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 glass-card rounded-2xl animate-scale-in animate-delay-400">
            <p className="text-2xl font-display text-foreground/90 mb-4">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="text-primary font-medium">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
