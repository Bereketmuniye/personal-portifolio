import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Broker Marketplace Platform",
      description:
        "Designed a platform connecting brokers with clients, featuring secure communication and role-based access. Built with modern microservices architecture. BrokerHub Ethiopia - Find your perfect home with trusted brokers.",
      tags: ["Nest.js", "Golang", "Microservices"],
      github: "#",
      demo: "https://broker-marketplace-frontend.vercel.app/",
    },
    {
      title: "Real-Time Queue Management System",
      description:
        "Built a live queue display system with audio announcements, digital displays, and administrative controls. Features Ethiopian calendar support and WebSocket integration.",
      tags: ["Laravel", "WebSockets", "Livewire"],
      github: "#",
      demo: "#",
    },
    {
      title: "File Encryption Tool",
      description:
        "Developed a high-performance CLI tool for secure file encryption and decryption using Rust. Features AES-256 encryption with optimized performance.",
      tags: ["Rust", "CLI", "Security"],
      github: "https://github.com/Bereketmuniye/rust-file-encryption",
      demo: "#",
    },
    {
      title: "Book Rental Application",
      description:
        "Created a peer-to-peer book rental platform using Laravel and MySQL. Features inventory management, rental tracking, and automated notifications.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Bereketmuniye/book_rental_application",
      demo: "#",
    },
    {
      title: "LMIS - School Management System",
      description:
        "Designed a comprehensive school management system with modules for attendance, academics, registration, quiz and assignment management.",
      tags: ["Laravel", "MySQL", "TailwindCSS"],
      github: "https://github.com/Bereketmuniye/LMIS",
      demo: "#",
    },
    {
      title: "Knowledge Portal",
      description:
        "Industrial project featuring a comprehensive knowledge portal with posting, chatting, emailing, FAQs, and file sharing capabilities. Integrated Chatify and Botman.",
      tags: ["Laravel", "Chatify", "Botman"],
      github: "https://github.com/Bereketmuniye/knowledge-portal-using-laravel-",
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
                <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/80 transition-all group h-full flex flex-col rounded-none font-mono relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,0,0.25)] fancy-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated corner brackets */}
                  <motion.div
                    className="absolute top-2 left-2 text-primary/30 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {'{'}
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 right-2 text-primary/30 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {'}'}
                  </motion.div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none" />
                  <div className="space-y-4 flex-1 relative z-10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <motion.span 
                          className="text-primary/50 group-hover:text-primary transition-colors"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {`>`}
                        </motion.span>
                        <h3 className="text-xl font-bold text-primary group-hover:underline decoration-primary/50 underline-offset-4 transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-primary/80 text-sm leading-relaxed border-l-2 border-primary/30 group-hover:border-primary pl-3 transition-colors">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs border-primary text-primary rounded-none hover:bg-primary/20 transition-all cursor-default relative overflow-hidden group/badge"
                          >
                            <span className="relative z-10">{tag}</span>
                            <motion.div
                              className="absolute inset-0 bg-primary/30 opacity-0 group-hover/badge:opacity-100"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 mt-auto relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }} 
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-black rounded-none transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] relative overflow-hidden group/btn"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-primary/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }} 
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-black hover:bg-primary/90 rounded-none transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] relative overflow-hidden group/btn animate-glow-pulse"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </a>
                      </Button>
                    </motion.div>
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
