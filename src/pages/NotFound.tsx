import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been
            moved or doesn't exist.
          </p>

          <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
