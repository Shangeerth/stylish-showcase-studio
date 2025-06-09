
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      // Handle anchor links on home page
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass-card shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="font-display text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group text-sm"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group text-sm"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass-card"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
