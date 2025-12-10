import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Hero = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const initialHistory = [
    {
      command: "whoami",
      output: (
        <div className="space-y-2">
          <p>Bereket Muniye</p>
          <p className="text-primary/80">Full-Stack Developer | Laravel & Vue.js Enthusiast</p>
        </div>
      ),
    },
    {
      command: "cat intro.txt",
      output: (
        <p className="max-w-2xl">
          I build robust, scalable web applications. Passionate about clean code,
          open source, and solving complex problems.
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex gap-2"><span className="text-white font-bold">about</span> - View about me</div>
            <div className="flex gap-2"><span className="text-white font-bold">skills</span> - List technical skills</div>
            <div className="flex gap-2"><span className="text-white font-bold">projects</span> - View portfolio</div>
            <div className="flex gap-2"><span className="text-white font-bold">contact</span> - Get in touch</div>
            <div className="flex gap-2"><span className="text-white font-bold">clear</span> - Clear terminal</div>
            <div className="flex gap-2"><span className="text-white font-bold">whoami</span> - User info</div>
          </div>
        );
        break;
      case "about":
        output = "Navigating to About section...";
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        output = "Navigating to Skills section...";
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        output = "Navigating to Projects section...";
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        output = "Opening communication channels...";
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
        output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto border-2 border-primary bg-black/80 shadow-[0_0_20px_rgba(0,255,0,0.2)] min-h-[60vh] flex flex-col rounded-none"
        >
          {/* Terminal Header */}
          <div className="bg-primary/20 p-2 border-b-2 border-primary flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-primary font-bold">
                root@bereket: ~
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
          </div>

          {/* Terminal Content */}
          <div
            className="flex-1 p-6 font-mono text-sm sm:text-base overflow-y-auto max-h-[60vh] scrollbar-hide"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="space-y-4">
              <div className="text-primary/50 text-xs mb-4">
                Last login: {new Date().toUTCString()} on ttys000
              </div>

              {history.map((entry, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex gap-2 items-center text-primary">
                    <span className="font-bold">root@bereket:~#</span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                  <div className="text-primary/80 pl-4 whitespace-pre-wrap">
                    {entry.output}
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex gap-2 items-center text-primary">
                <span className="font-bold shrink-0">root@bereket:~#</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 p-0 font-mono"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Hint Footer */}
          <div className="p-2 border-t border-primary/30 bg-black text-xs text-primary/50 font-mono text-center">
            Type 'help' to see available commands
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
