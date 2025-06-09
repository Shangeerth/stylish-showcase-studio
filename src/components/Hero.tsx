
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creative Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-cosmic rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="block text-foreground/90">Hello, I'm a</span>
            <span className="gradient-text min-h-[1.2em] block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            I craft beautiful digital experiences with code, creativity, and attention to detail. 
            Specializing in modern web development and user interface design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animate-delay-300">
            <Button size="lg" className="bg-gradient-purple hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6">
              View My Work
            </Button>
            
            <div className="flex space-x-6">
              <a href="#" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="animate-bounce animate-delay-400">
            <a href="#about" className="inline-block p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
