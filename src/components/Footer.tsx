import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-primary/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm"
        >
          <p className="text-primary/70">
            <span className="text-primary mr-2">$</span>
            echo "© {new Date().getFullYear()} Bereket Muniye. All rights reserved."
          </p>
          <p className="text-xs text-primary/50 mt-2">
            // Built with React, TailwindCSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
