import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

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

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto" />
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a developer who enjoys turning complex ideas into elegant
                digital products. I've built systems in{" "}
                <span className="text-accent font-medium">Laravel</span>,{" "}
                <span className="text-accent font-medium">Node.js</span>,{" "}
                <span className="text-accent font-medium">Vue.js</span>, and{" "}
                <span className="text-accent font-medium">Angular</span>, and
                recently started exploring{" "}
                <span className="text-accent font-medium">Rust</span> and{" "}
                <span className="text-accent font-medium">AI-powered tools</span>
                . I love hackathons, problem solving, and building tech that
                matters.
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center border-border hover:border-accent transition-colors group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
