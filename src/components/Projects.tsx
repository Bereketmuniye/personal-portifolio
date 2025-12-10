import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 font-mono">
              <span>$</span>
              <h2>./list_projects.sh</h2>
            </div>
            <div className="w-full h-px bg-primary/30" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 border-primary bg-black/50 hover:bg-primary/10 transition-all group h-full flex flex-col rounded-none font-mono">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary/50">{`>`}</span>
                        <h3 className="text-xl font-bold text-primary group-hover:underline decoration-primary/50 underline-offset-4 transition-all">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-primary/70 text-sm leading-relaxed border-l-2 border-primary/20 pl-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-primary text-primary rounded-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-black rounded-none transition-colors"
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
                      className="flex-1 bg-primary text-black hover:bg-primary/90 rounded-none transition-colors"
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
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
