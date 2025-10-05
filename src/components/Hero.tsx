import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="inline-block animate-float">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-foreground">
                BM
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bereket Muniye
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A Full-Stack Developer passionate about building scalable web
              applications and exploring new technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent"
              asChild
            >
              <a
                href="https://github.com/Bereketmuniye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/bereket-muniye-039273294/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent"
              asChild
            >
              <a href="mailto:bereketmuniye@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
