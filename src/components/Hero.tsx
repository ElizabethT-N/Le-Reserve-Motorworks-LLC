import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-tight"
          >
            Le Reserve Motorworks
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-brand-accent">
              Luxury Interior Trim Restoration
            </h2>
            <p className="text-lg md:text-xl text-brand-text/80 max-w-3xl mx-auto">
              Ferrari • Exotics • Collectibles — Mobile + Nationwide Mail-In
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-brand-text/70 max-w-2xl mx-auto leading-relaxed"
          >
            Professional restoration of sticky trim, buttons, and interior components. 
            Bringing your luxury vehicle's cabin back to pristine condition with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={() => scrollToSection('gallery')}
              className="bg-brand-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-accent/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50 shadow-lg hover:shadow-xl"
            >
              View Gallery
            </button>
            <button
              onClick={() => scrollToSection('estimate')}
              className="bg-transparent border-2 border-brand-accent text-brand-accent px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
            >
              Get Estimate
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-16"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-brand-text/60 hover:text-brand-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg rounded-lg p-2"
              aria-label="Scroll to about section"
            >
              <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
