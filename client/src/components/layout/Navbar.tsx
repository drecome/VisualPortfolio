import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-primary shadow-lg' : ''
    )}>
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-white flex items-center">
          <span className="text-secondary mr-1">A</span>lexander
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={cn(
                "nav-link relative text-white hover:text-secondary transition-colors text-sm uppercase font-accent tracking-wider",
                location === link.href && "text-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 bg-secondary hover:bg-secondary-light transition-colors px-4 py-2 rounded-md text-white text-sm uppercase font-accent tracking-wider">
            Hire Me
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-primary-light absolute w-full left-0 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={cn(
                    "text-white hover:text-secondary transition-colors text-lg font-accent",
                    location === link.href && "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="bg-secondary hover:bg-secondary-light transition-colors px-4 py-3 rounded-md text-white text-base uppercase font-accent tracking-wider w-full text-center">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
