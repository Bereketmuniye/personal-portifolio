import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      description: "Server-side logic, database management, and API development using modern frameworks and languages.",
      skills: ["Laravel", "Node.js", "ASP.NET", "Rust"],
    },
    {
      title: "Frontend Development",
      description: "Building responsive, interactive, and user-friendly interfaces with component-based architectures.",
      skills: ["Vue.js", "Angular", "React", "Livewire"],
    },
    {
      title: "Database Management",
      description: "Designing schemas, optimizing queries, and managing data persistence across various database systems.",
      skills: ["MySQL", "MongoDB", "Sqlite"],
    },
    {
      title: "DevOps & Tools",
      description: "Version control, containerization, and operating system management for efficient deployment and workflows.",
      skills: ["Docker", "Git", "Linux", "TailwindCSS", "Bootstrap"],
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
                <Card className="p-6 border-primary bg-black/50 hover:bg-primary/10 transition-all group h-full flex flex-col rounded-none font-mono">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary/50">{`>`}</span>
                        <h3 className="text-xl font-bold text-primary group-hover:underline decoration-primary/50 underline-offset-4 transition-all">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-primary/70 text-sm leading-relaxed border-l-2 border-primary/20 pl-3">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary text-primary rounded-none hover:bg-primary hover:text-black transition-colors"
                        >
                          {skill}
                        </Badge>
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
