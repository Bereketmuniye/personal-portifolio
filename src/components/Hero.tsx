import { ArrowRight, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer | System Architect | Tech Enthusiast";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border border-primary bg-black/50 p-6 rounded-none shadow-[0_0_20px_rgba(0,255,0,0.1)]"
          >
            <div className="flex items-center gap-2 border-b border-primary/30 pb-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-xs text-primary/50 font-mono">bash -- login</span>
            </div>

            <div className="space-y-6 font-mono">
              <div className="space-y-2">
                <p className="text-primary/80">Last login: {new Date().toDateString()} on ttys000</p>
                <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  <span className="text-primary">$</span>
                  <h1>whoami</h1>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-white pl-6">
                  Bereket Muniye
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg sm:text-xl text-primary font-bold">
                  <span>$</span>
                  <h2>cat skills.txt</h2>
                </div>
                <p className="text-lg sm:text-xl text-primary/80 pl-6 min-h-[3rem]">
                  {text}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>_</span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg sm:text-xl text-primary font-bold">
                  <span>$</span>
                  <h2>./init_contact.sh</h2>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pl-6 pt-2">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("projects")}
                    className="group bg-primary text-black hover:bg-primary/90 rounded-none font-mono font-bold"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-primary text-primary hover:bg-primary/10 rounded-none font-mono"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-primary/30 mt-8">
                <p className="text-xs text-primary/50 mb-4"># Connect via SSH (Social Shell Handlers)</p>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10 rounded-none"
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
                    className="hover:text-primary hover:bg-primary/10 rounded-none"
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
                    className="hover:text-primary hover:bg-primary/10 rounded-none"
                    asChild
                  >
                    <a href="mailto:bereketmuniye@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
