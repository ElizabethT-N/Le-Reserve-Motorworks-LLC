import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-text mb-2">
              Le Reserve Motorworks
            </h3>
            <p className="text-brand-text/70 text-lg">
              Luxury Interior Trim Restoration
            </p>
          </div>

          <div className="mb-8">
            <p className="text-brand-text/80 mb-4">
              Ready to restore your luxury interior? Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:lereservemw@gmail.com"
                className="text-brand-accent hover:text-brand-accent/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg rounded-lg px-2 py-1"
              >
                lereservemw@gmail.com
              </a>
              <span className="text-brand-text/50 hidden sm:block">•</span>
              <a
                href="tel:+16783604510"
                className="text-brand-accent hover:text-brand-accent/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg rounded-lg px-2 py-1"
              >
                (678) 360-4510
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-surface">
            <p className="text-brand-text/50 text-sm">
              © {new Date().getFullYear()} Le Reserve Motorworks LLC. All rights reserved.
            </p>
            <p className="text-brand-text/40 text-xs mt-2">
              Ferrari • Lamborghini • Maserati • Exotic Vehicle Restoration
            </p>
            <p className="text-brand-text/60 text-sm mt-3">
              Follow us on Instagram:{' '}
              <a
                href="https://www.instagram.com/le_reserve_motorworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-brand-accent/80 hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg rounded-lg px-1"
              >
                @le_reserve_motorworks
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
