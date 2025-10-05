import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Laravel", category: "Backend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Sqlite", category: "Database" },
    { name: "Rust", category: "Systems" },
    { name: "ASP.NET", category: "Backend" },
    { name: "Livewire", category: "Framework" },
    { name: "TailwindCSS", category: "Styling" },
    { name: "Bootstrap", category: "Styling" },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to build modern, scalable applications
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <Card
                        key={index}
                        className="p-4 text-center border-border hover:border-accent hover:shadow-lg transition-all group cursor-default"
                      >
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <span className="text-2xl font-bold text-accent">
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                          <p className="font-medium text-sm">{skill.name}</p>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
