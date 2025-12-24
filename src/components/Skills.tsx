import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Proficient in multiple programming languages for diverse application development.",
      skills: ["C++", "Java", "Python", "C#", "Javascript", "PHP", "Golang", "Rust"],
    },
    {
      title: "Frameworks & Libraries",
      description: "Expertise in modern frameworks for building scalable web applications and APIs.",
      skills: ["React", "Angular", "Laravel", "Django", "Next.js", "Nest.js", "Vue.js", "Gin", "Elysia.js", "ASP.NET", "Livewire"],
    },
    {
      title: "Database Management",
      description: "Designing schemas, optimizing queries, and managing data persistence across various database systems.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      title: "API Design & Development",
      description: "Building robust RESTful APIs and integrating third-party services.",
      skills: ["RESTful APIs", "API Integration", "Microservice Design"],
    },
    {
      title: "Project Management & Architecture",
      description: "SDLC expertise, requirement analysis, and software architecture design.",
      skills: ["SDLC", "UML & Modelling", "Jira", "Stakeholder Management", "Microservice Design"],
    },
    {
      title: "DevOps & Tools",
      description: "Version control, containerization, CI/CD, and deployment automation.",
      skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Continuous Integration"],
    },
    {
      title: "Web Development",
      description: "Full-stack web development with responsive design principles.",
      skills: ["Front-End Development", "Back-End Development", "Responsive Web Design", "TailwindCSS", "Bootstrap"],
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
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/80 transition-all group h-full flex flex-col rounded-none font-mono relative overflow-hidden hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] fancy-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shimmer effect */}
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
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-primary/80 text-sm leading-relaxed border-l-2 border-primary/30 group-hover:border-primary pl-3 transition-colors">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs border-primary text-primary rounded-none hover:bg-primary hover:text-black transition-all cursor-default hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] relative overflow-hidden group/badge"
                          >
                            <span className="relative z-10">{skill}</span>
                            <motion.div
                              className="absolute inset-0 bg-primary/20 opacity-0 group-hover/badge:opacity-100"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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

export default Skills;
