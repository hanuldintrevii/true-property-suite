import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/proprietati", label: "Proprietăți" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre", label: "Despre noi" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-dark-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="True Imobiliare" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-secondary-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40700000000"
              className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +40 700 000 000
            </a>
            <Link
              to="/vinde-proprietate"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gold-dark transition-colors"
            >
              Vinde Proprietatea
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-secondary-foreground p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-dark-light/30"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-secondary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/vinde-proprietate"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-medium text-center mt-2"
              >
                Vinde Proprietatea
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
