import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: { label: string; id: string; path?: string }) => {
    if (item.path) {
      navigate(item.path);
    } else {
      // If we're not on the home page, navigate there first, then scroll
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "~/home", id: "hero" },
    { label: "./about", id: "about" },
    { label: "./skills", id: "skills", path: "/skills" },
    { label: "./projects", id: "projects", path: "/projects" },
    { label: "./contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary/50 bg-background/95 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,0,0.1)] ${
        isScrolled ? 'shadow-[0_0_30px_rgba(0,255,0,0.2)] border-primary' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-bold text-primary hover:text-primary transition-all flex items-center gap-2 tracking-wider group/logo"
            style={{ textShadow: "0 0 10px rgba(0, 255, 0, 0.7)" }}
          >
            <motion.span 
              className="text-primary group-hover/logo:drop-shadow-[0_0_8px_rgba(0,255,0,1)] transition-all"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [
            </motion.span>
            <motion.span 
              className="text-white group-hover/logo:text-primary transition-colors text-glow"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(0, 255, 0, 0.5)",
                  "0 0 15px rgba(0, 255, 0, 0.8)",
                  "0 0 5px rgba(0, 255, 0, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              BM
            </motion.span>
            <motion.span 
              className="animate-blink text-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
            <motion.span 
              className="text-primary group-hover/logo:drop-shadow-[0_0_8px_rgba(0,255,0,1)] transition-all"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ]
            </motion.span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation(item)}
                  className="text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all font-mono relative group/nav"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/10 scale-x-0 group-hover/nav:scale-x-100 origin-left transition-transform duration-300"
                    layoutId={`nav-${item.id}`}
                  />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "open" : "closed"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavigation(item)}
                    className="w-full justify-start text-left hover:bg-primary/10 hover:text-primary transition-colors font-mono"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
