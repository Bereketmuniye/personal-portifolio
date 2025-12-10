import { Code2, Rocket, Users, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Exploring cutting-edge technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player and hackathon enthusiast",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 font-mono">
              <span>$</span>
              <h2>cat about_me.md</h2>
            </div>
            <div className="w-full h-px bg-primary/30" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 border-primary bg-black/50 rounded-none relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                <p className="text-lg leading-relaxed text-primary/80 font-mono">
                  <span className="text-primary opacity-50 mr-4">1</span>
                  I'm a developer who enjoys turning complex ideas into elegant
                  digital products. I've built systems in{" "}
                  <span className="text-white font-bold">Laravel</span>,{" "}
                  <span className="text-white font-bold">Node.js</span>,{" "}
                  <span className="text-white font-bold">Vue.js</span>, and{" "}
                  <span className="text-white font-bold">Angular</span>.
                  <br />
                  <span className="text-primary opacity-50 mr-4">2</span>
                  Recently started exploring{" "}
                  <span className="text-white font-bold">Rust</span> and{" "}
                  <span className="text-white font-bold">
                    AI-powered tools
                  </span>
                  .
                  <br />
                  <span className="text-primary opacity-50 mr-4">3</span>
                  I love hackathons, problem solving, and building tech that
                  matters.
                </p>
              </Card>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="p-6 border-primary bg-black/50 hover:bg-primary/10 transition-colors group h-full rounded-none font-mono">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                        <h3 className="font-bold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-sm text-primary/70 border-l-2 border-primary/30 pl-3">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
