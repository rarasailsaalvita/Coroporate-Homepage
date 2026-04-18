import { motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'bg-brand border-brand-dark shadow-lg py-[12px]' : 'bg-white border-light-gray py-[24px]'
      }`} 
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-1">
              <span className={`font-sans font-extrabold text-[20px] tracking-[-0.5px] uppercase transition-colors ${scrolled ? 'text-white' : 'text-dark'}`}>
                PT Rumah Inovasi <span className={`${scrolled ? 'text-dark/40' : 'text-brand'}`}>Jet</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  scrolled 
                    ? 'text-white/80 hover:text-white' 
                    : (link.name === "Services" ? "text-brand" : "text-gray hover:text-brand")
                }`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-[10px] rounded-[4px] text-[14px] font-semibold transition-all ${
                scrolled 
                  ? 'bg-white text-brand hover:bg-white/90 shadow-md' 
                  : 'bg-brand text-white hover:bg-brand-dark'
              }`}
              id="nav-cta"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-white' : 'text-zinc-600'}`}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-100 py-6 px-4 space-y-4"
          id="mobile-nav-panel"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-zinc-900 border-b border-zinc-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-3 bg-brand text-white rounded-xl text-md font-semibold"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
}
