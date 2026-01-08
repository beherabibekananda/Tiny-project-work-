import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-500 group-hover:scale-110 border border-primary/10">
            <img src="/logo.webp" alt="Tiny Triumph Logo" className="h-full w-full object-cover scale-[1.2] rounded-full" />
          </div>
          <span className="font-display text-lg font-semibold text-foreground md:text-2xl">
            Tiny Triumph
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onMouseEnter={() => setHoveredPath(link.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
            >
              {isActive(link.path) && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 z-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              {hoveredPath === link.path && !isActive(link.path) && (
                <motion.div
                  layoutId="hover-nav"
                  className="absolute inset-0 z-0 rounded-full bg-secondary/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="lg" className="rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background md:hidden overflow-hidden"
          >
            <nav className="container flex flex-col gap-2 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-lg font-medium transition-all duration-300 rounded-2xl hover:bg-primary/5 hover:text-primary ${isActive(link.path)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full rounded-full h-14 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
