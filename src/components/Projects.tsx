import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "ABookRental",
      description:
        "Laravel-based book rental platform with role-based dashboards for admins and users. Features inventory management, rental tracking, and automated notifications.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Bereketmuniye/book_rental_application",
      demo: "#",
    },
    {
      title: "Knowledge Portal",
      description:
        "Internal team communication platform integrating Chatify and Botman. Enables real-time messaging, knowledge sharing, and AI-assisted responses.",
      tags: ["Laravel", "Chatify", "Botman"],
      github:
        "https://github.com/Bereketmuniye/knowledge-portal-using-laravel-",
      demo: "#",
    },
    {
      title: "Fertilizer Distribution App",
      description:
        "Hackathon-winning project built in 24 hours using Laravel. Streamlines fertilizer distribution management for agricultural cooperatives.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Queue Display System",
      description:
        "Real-time queue management system with Livewire. Features audio announcements, digital displays, and administrative controls for efficient service.",
      tags: ["Laravel", "Livewire", "WebSockets"],
      github: "#",
      demo: "#",
    },

    {
      title: "LMIS",
      description:
        "Automate school grading systemwith quiz and assignment. Features audio announcements, digital displays, and administrative controls for efficient service.",
      tags: ["Laravel", "MySQL", "TailwindCSS"],
      github: "https://github.com/Bereketmuniye/LMIS",
      demo: "#",
    },
    {
      title: "File Encryption",
      description:
        "Rust-based command-line tool for encrypting and decrypting files. Securely encrypts files using AES-256 encryption and provides command-line interface for easy file management.",
      tags: ["Rust"],
      github: "github.com/Bereketmuniye/rust-file-encryption",
      demo: "#",
    },
  ];
//
https: return (
  <section id="projects" className="py-20 sm:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built, from hackathon wins to
            production systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:border-accent hover:shadow-xl transition-all group"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:border-accent hover:text-accent"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default Projects;
