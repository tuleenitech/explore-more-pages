import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Tours", to: "/tours" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-background text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+255685808332" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +255 685 808332
            </a>
            <a href="mailto:info@privateexplorers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@privateexplorers.com
            </a>
          </div>
          <span className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
            East Africa's Premier Safari Company
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Private Explorers" className="w-10 h-10" />
            <span className="font-display text-2xl font-bold tracking-tight text-foreground">
              Private<span className="text-primary">Explorers</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                      location.pathname === link.to ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" size="sm" className="w-fit mt-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
