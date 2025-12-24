import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Settings, GitBranch, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      description: "Proficient in multiple programming languages for diverse application development.",
      skills: ["C++", "Java", "Python", "C#", "Javascript", "PHP", "Golang", "Rust"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      description: "Expertise in modern frameworks for building scalable web applications and APIs.",
      skills: ["React", "Angular", "Laravel", "Django", "Next.js", "Nest.js", "Vue.js", "Gin", "Elysia.js", "ASP.NET", "Livewire"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing schemas, optimizing queries, and managing data persistence across various database systems.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
    },
    {
      icon: Zap,
      title: "API Design & Development",
      description: "Building robust RESTful APIs and integrating third-party services.",
      skills: ["RESTful APIs", "API Integration", "Microservice Design"],
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
    },
    {
      icon: Settings,
      title: "Project Management & Architecture",
      description: "SDLC expertise, requirement analysis, and software architecture design.",
      skills: ["SDLC", "UML & Modelling", "Jira", "Stakeholder Management", "Microservice Design"],
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/50",
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      description: "Version control, containerization, CI/CD, and deployment automation.",
      skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Continuous Integration"],
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/50",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web development with responsive design principles.",
      skills: ["Front-End Development", "Back-End Development", "Responsive Web Design", "TailwindCSS", "Bootstrap"],
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/50",
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
    <section id="skills" className="py-20 sm:py-32">
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
              <h2>./list_skills.sh</h2>
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
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`p-6 border-2 ${category.borderColor} bg-gradient-to-br ${category.color} backdrop-blur-sm hover:border-primary transition-all group h-full flex flex-col rounded-none font-mono relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] fancy-card`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none" />
                    
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="space-y-4 flex-1 relative z-10">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="p-2 bg-primary/10 rounded-none border border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all"
                              >
                                <Icon className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]" />
                              </motion.div>
                              <h3 className="text-xl font-bold text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)] transition-all">
                                {category.title}
                              </h3>
                            </div>
                            <p className="text-primary/80 text-sm leading-relaxed border-l-2 border-primary/40 group-hover:border-primary pl-4 transition-colors">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-primary/20 group-hover:border-primary/40 transition-colors">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.15, y: -2 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs border-primary/50 text-primary/90 bg-black/40 hover:bg-primary hover:text-black hover:border-primary transition-all cursor-default hover:shadow-[0_0_12px_rgba(0,255,0,0.6)] relative overflow-hidden group/badge backdrop-blur-sm"
                            >
                              <span className="relative z-10 font-medium">{skill}</span>
                              <motion.div
                                className="absolute inset-0 bg-primary/30 opacity-0 group-hover/badge:opacity-100"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.4 }}
                              />
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
