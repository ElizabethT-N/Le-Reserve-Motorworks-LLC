import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'estimate', label: 'Estimate' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'services', 'estimate'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-brand-text hover:text-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg rounded-lg px-2 py-1"
          >
            Le Reserve Motorworks
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg ${
                  activeSection === item.id
                    ? 'text-brand-accent bg-brand-surface'
                    : 'text-brand-text hover:text-brand-accent hover:bg-brand-surface/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection('estimate')}
              className="bg-brand-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg"
            >
              Get Estimate
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
