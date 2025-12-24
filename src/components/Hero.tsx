import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const initialHistory = [
    {
      command: "whoami",
      output: (
        <div className="space-y-2">
          <motion.p 
            className="text-white font-bold text-lg text-glow-strong animate-neon-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Bereket Muniye
          </motion.p>
          <p className="text-primary/90">
            Full Stack Software Engineer
          </p>
        </div>
      ),
    },
    {
      command: "cat intro.txt",
      output: (
        <p className="max-w-2xl text-primary/90 leading-relaxed">
          I am a software developer with a strong foundation in system design, database management, and network administration. I excel at building efficient, innovative solutions and tackling complex technical challenges with precision and attention to detail.
        </p>
      ),
    },
  ];

  useEffect(() => {
    // Simulate initial boot sequence
    const timer = setTimeout(() => {
      setHistory(initialHistory);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">about</span>
              <span className="text-primary/60">- View about me</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">skills</span>
              <span className="text-primary/60">- List technical skills</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">projects</span>
              <span className="text-primary/60">- View portfolio</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">contact</span>
              <span className="text-primary/60">- Get in touch</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">clear</span>
              <span className="text-primary/60">- Clear terminal</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="flex gap-2 items-center group/help"
            >
              <span className="text-primary/50 group-hover/help:text-primary transition-colors">$</span>
              <span className="text-white font-bold group-hover/help:text-primary transition-colors">whoami</span>
              <span className="text-primary/60">- User info</span>
            </motion.div>
          </div>
        );
        break;
      case "about":
        output = (
          <span className="text-primary/90">
            <span className="animate-pulse">▶</span> Navigating to About section...
          </span>
        );
        setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 500);
        break;
      case "skills":
        output = (
          <span className="text-primary/90">
            <span className="animate-pulse">▶</span> Navigating to Skills page...
          </span>
        );
        setTimeout(() => navigate("/skills"), 500);
        break;
      case "projects":
        output = (
          <span className="text-primary/90">
            <span className="animate-pulse">▶</span> Navigating to Projects page...
          </span>
        );
        setTimeout(() => navigate("/projects"), 500);
        break;
      case "contact":
        output = (
          <span className="text-primary/90">
            <span className="animate-pulse">▶</span> Opening communication channels...
          </span>
        );
        setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 500);
        break;
      case "clear":
        setHistory([]);
        return;
      case "whoami":
        output = "Bereket Muniye - Full Stack Developer";
        break;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-red-400">
            <span className="text-primary/70">Error:</span> Command not found: <span className="text-white font-bold">{trimmedCmd}</span>. Type <span className="text-primary font-bold">'help'</span> for available commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Animated background grid with enhanced effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0022_1px,transparent_1px),linear-gradient(to_bottom,#00ff0022_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-rotate-gradient" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto border-2 border-primary bg-black/90 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,0,0.3),inset_0_0_60px_rgba(0,255,0,0.1)] min-h-[60vh] flex flex-col rounded-none relative overflow-hidden group fancy-card animate-glow-pulse"
        >
          {/* Animated border glow with rotation */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-gradient" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          
          {/* Terminal Header */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 p-3 border-b-2 border-primary flex items-center justify-between backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Terminal className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]" />
              </motion.div>
              <span className="text-xs font-mono text-primary font-bold drop-shadow-[0_0_4px_rgba(0,255,0,0.6)]">
                root@bereket: ~
              </span>
            </div>
            <div className="flex gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500/70 shadow-[0_0_8px_rgba(255,0,0,0.6)]"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500/70 shadow-[0_0_8px_rgba(255,255,0,0.6)]"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500/70 shadow-[0_0_8px_rgba(0,255,0,0.6)]"
                whileHover={{ scale: 1.2 }}
              />
            </div>
          </motion.div>

          {/* Terminal Content */}
          <div
            ref={contentRef}
            className="flex-1 p-6 font-mono text-sm sm:text-base overflow-y-auto max-h-[60vh] scrollbar-hide relative"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Scanline effect overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px]" />
            
            <div className="space-y-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-primary/60 text-xs mb-4 font-mono"
              >
                Last login: {new Date().toUTCString()} on ttys000
              </motion.div>

              {history.map((entry, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-1 group/entry"
                >
                  <div className="flex gap-2 items-center text-primary">
                    <span className="font-bold drop-shadow-[0_0_4px_rgba(0,255,0,0.5)]">root@bereket:~#</span>
                    <span className="text-white font-medium">{entry.command}</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary/90 pl-4 whitespace-pre-wrap leading-relaxed"
                  >
                    {entry.output}
                  </motion.div>
                </motion.div>
              ))}

              <motion.form 
                onSubmit={handleSubmit} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-2 items-center text-primary group/input relative"
              >
                <span className="font-bold shrink-0 drop-shadow-[0_0_4px_rgba(0,255,0,0.5)] text-glow">root@bereket:~#</span>
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent border-none outline-none text-white w-full focus:ring-0 p-0 font-mono caret-primary placeholder:text-primary/30 relative z-10"
                    placeholder="Type a command..."
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                  {/* Input glow effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: input.length > 0 ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-5 bg-primary ml-1 drop-shadow-[0_0_4px_rgba(0,255,0,0.8)]"
                />
              </motion.form>
            </div>
          </div>

          {/* Hint Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-3 border-t border-primary/30 bg-gradient-to-r from-black via-primary/5 to-black text-xs text-primary/60 font-mono text-center backdrop-blur-sm"
          >
            <span className="inline-block animate-pulse">▶</span> Type 'help' to see available commands
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
