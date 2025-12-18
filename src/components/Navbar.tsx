import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = "#" + section;
        }
      }
      if (current && current !== activeHash) {
        setActiveHash(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeHash]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
      setActiveHash(href);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-bold tracking-tighter hover:text-white/80 transition-colors z-50 relative"
        >
          Portfolio<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative text-sm font-medium tracking-wide transition-colors ${
                activeHash === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeHash === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[1px] bg-blue-500"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white cursor-pointer z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center p-6"
          >
             <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-4xl font-bold tracking-tighter ${
                    activeHash === link.href ? 'text-blue-500' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
