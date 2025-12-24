import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-black/80 backdrop-blur-sm border-t border-primary/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0011_1px,transparent_1px),linear-gradient(to_bottom,#00ff0011_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
            opacity: 0,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm"
        >
          <motion.p 
            className="text-primary/80 text-glow"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-primary mr-2 inline-block text-glow-strong"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $
            </motion.span>
            echo "© {new Date().getFullYear()} Bereket Muniye. All rights reserved."
          </motion.p>
          <p className="text-xs text-primary/60 mt-3 flex items-center justify-center gap-2">
            <span className="text-primary/40">//</span>
            Built with 
            <motion.span 
              className="text-primary font-bold"
              whileHover={{ scale: 1.1 }}
            >
              React
            </motion.span>
            , 
            <motion.span 
              className="text-primary font-bold"
              whileHover={{ scale: 1.1 }}
            >
              TailwindCSS
            </motion.span>
            & 
            <motion.span 
              className="text-primary font-bold"
              whileHover={{ scale: 1.1 }}
            >
              Framer Motion
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
