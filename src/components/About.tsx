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
              <Card className="p-8 border-primary bg-black/60 backdrop-blur-sm rounded-none relative overflow-hidden group hover:border-primary/80 transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] fancy-card animate-glow-pulse">
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-primary/20 group-hover:bg-primary transition-all"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated corner decorations */}
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 border-t-2 border-l-2 border-primary/50 group-hover:border-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-primary/50 group-hover:border-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-primary/50 group-hover:border-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 border-b-2 border-r-2 border-primary/50 group-hover:border-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none" />
                <p className="text-lg leading-relaxed text-primary/90 font-mono relative z-10">
                  <span className="text-primary opacity-50 mr-4">1</span>
                  I am a software developer with a strong foundation in system design, database management, and network administration. I excel at building efficient, innovative solutions and tackling complex technical challenges with precision and attention to detail.
                  <br />
                  <span className="text-primary opacity-50 mr-4">2</span>
                  With experience at <span className="text-white font-bold">Tibeb Technology PLC</span>, <span className="text-white font-bold">XOKA IT Solution PLC</span>, and <span className="text-white font-bold">Authority for Civil Society Organization</span>, I've delivered scalable web applications and led digital transformation initiatives.
                  <br />
                  <span className="text-primary opacity-50 mr-4">3</span>
                  I specialize in full-stack development using <span className="text-white font-bold">Laravel</span>, <span className="text-white font-bold">Angular</span>, <span className="text-white font-bold">ASP.NET</span>, <span className="text-white font-bold">React</span>, and <span className="text-white font-bold">Nest.js</span>, with expertise in database optimization, API design, and DevOps practices.
                  <br />
                  <span className="text-primary opacity-50 mr-4">4</span>
                  <span className="text-primary/60 italic">// Fun fact: I've spent more time debugging than coding. It's a lifestyle choice. 🐛</span>
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
                    <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/80 transition-all group h-full rounded-none font-mono relative overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] fancy-card float-element">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating icon glow */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]" />
                          </motion.div>
                          <h3 className="font-bold text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.6)] transition-all">{item.title}</h3>
                        </div>
                        <p className="text-sm text-primary/80 border-l-2 border-primary/40 group-hover:border-primary pl-3 transition-colors">
                          {item.description}
                        </p>
                      </div>
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
