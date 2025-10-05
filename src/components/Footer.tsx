import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Bereket Muniye BM</span>
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
