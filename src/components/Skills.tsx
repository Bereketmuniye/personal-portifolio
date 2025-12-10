import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "Laravel", category: "Backend", usage: 92, pid: 1024 },
    { name: "Vue.js", category: "Frontend", usage: 88, pid: 1025 },
    { name: "Angular", category: "Frontend", usage: 85, pid: 1026 },
    { name: "Node.js", category: "Backend", usage: 90, pid: 1027 },
    { name: "MySQL", category: "Database", usage: 87, pid: 1028 },
    { name: "MongoDB", category: "Database", usage: 82, pid: 1029 },
    { name: "Rust", category: "Systems", usage: 75, pid: 1030 },
    { name: "Tailwind", category: "Styling", usage: 95, pid: 1031 },
    { name: "Docker", category: "DevOps", usage: 80, pid: 1032 },
    { name: "Linux", category: "OS", usage: 85, pid: 1033 },
    { name: "Git", category: "Tools", usage: 90, pid: 1034 },
    { name: "React", category: "Frontend", usage: 89, pid: 1035 },
  ];

  // Simulate fluctuating values
  const [cpuUsage, setCpuUsage] = useState(skills.map(s => s.usage));

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => prev.map(usage => {
        const change = (Math.random() - 0.5) * 2; // Random change between -1 and 1
        return Math.min(100, Math.max(0, usage + change));
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const ProgressBar = ({ label, value, color = "bg-green-500" }: { label: string, value: number, color?: string }) => (
    <div className="flex items-center gap-2 font-mono text-sm mb-1">
      <span className="w-16 text-primary font-bold">{label}</span>
      <div className="flex-1 text-xs text-primary/50 relative">
        <span className="absolute left-0 top-0 text-primary">[</span>
        <div className="mx-2 h-4 bg-primary/10 relative overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-500`}
            style={{ width: `${value}%` }}
          />
        </div>
        <span className="absolute right-0 top-0 text-primary">]</span>
      </div>
      <span className="w-12 text-right text-primary">{value.toFixed(1)}%</span>
    </div>
  );

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 font-mono">
              <span>$</span>
              <h2>htop</h2>
            </div>

            {/* System Stats Header */}
            <div className="bg-black/50 border border-primary/30 p-4 font-mono text-sm mb-6 shadow-[0_0_10px_rgba(0,255,0,0.1)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <ProgressBar label="CPU [0]" value={45.2} color="bg-green-500" />
                <ProgressBar label="CPU [1]" value={32.8} color="bg-green-500" />
                <ProgressBar label="Mem" value={64.5} color="bg-yellow-500" />
                <ProgressBar label="Swp" value={12.0} color="bg-red-500" />
              </div>
              <div className="mt-4 flex gap-4 text-xs text-primary/70 border-t border-primary/20 pt-2">
                <span>Tasks: {skills.length} total</span>
                <span>Load average: 0.45 0.52 0.48</span>
                <span>Uptime: 1024 days</span>
              </div>
            </div>
          </motion.div>

          {/* Process List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto border border-primary/30 bg-black/50 shadow-[0_0_10px_rgba(0,255,0,0.1)]"
          >
            <table className="w-full font-mono text-sm text-left">
              <thead className="bg-primary/10 text-primary font-bold">
                <tr>
                  <th className="p-2">PID</th>
                  <th className="p-2">USER</th>
                  <th className="p-2">PRI</th>
                  <th className="p-2">NI</th>
                  <th className="p-2">VIRT</th>
                  <th className="p-2">RES</th>
                  <th className="p-2">SHR</th>
                  <th className="p-2">S</th>
                  <th className="p-2 text-green-400">%CPU</th>
                  <th className="p-2 text-green-400">%MEM</th>
                  <th className="p-2 text-green-400">TIME+</th>
                  <th className="p-2">Command</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {skills.map((skill, index) => (
                  <tr key={skill.name} className="hover:bg-primary/5 transition-colors text-primary/80">
                    <td className="p-2 text-green-400">{skill.pid}</td>
                    <td className="p-2">root</td>
                    <td className="p-2">20</td>
                    <td className="p-2">0</td>
                    <td className="p-2">{(Math.random() * 1000).toFixed(0)}M</td>
                    <td className="p-2">{(Math.random() * 500).toFixed(0)}M</td>
                    <td className="p-2">{(Math.random() * 100).toFixed(0)}M</td>
                    <td className="p-2">S</td>
                    <td className="p-2 text-green-400">{cpuUsage[index]?.toFixed(1)}</td>
                    <td className="p-2 text-green-400">{(skill.usage * 0.1).toFixed(1)}</td>
                    <td className="p-2">10:24.55</td>
                    <td className="p-2 font-bold text-white">
                      <span className="text-green-500">/usr/bin/</span>
                      {skill.name.toLowerCase()}
                      <span className="text-primary/50 ml-2">--category={skill.category}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-4 flex justify-between text-xs font-mono text-primary/50 bg-black p-1">
            <div className="flex gap-4">
              <span>F1Help</span>
              <span>F2Setup</span>
              <span>F3Search</span>
              <span>F4Filter</span>
              <span>F5Tree</span>
              <span>F6SortBy</span>
              <span>F7Nice -</span>
              <span>F8Nice +</span>
              <span>F9Kill</span>
              <span>F10Quit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
