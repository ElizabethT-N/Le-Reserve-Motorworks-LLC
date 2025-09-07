import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Import the markdown content directly
const aboutContent = `# About Le Reserve Motorworks

I'm Elizabeth Nguyen, a Ferrari Master Technician turned restoration specialist.
While rooted in Ferrari expertise, I provide interior trim restoration for Lamborghini, Maserati, and other rare exotics and collectible vehicles.

**What I do**
- Restore sticky/soft-touch trims to factory-like finish
- Refinish buttons, switches, and bezels
- Precision stenciling and iconography recreation
- Mobile + nationwide mail-in

My goal is simple: make your cabin feel right again—clean, precise, and built to last.`;

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            About Le Reserve Motorworks
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-brand-bg rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">
                    {children}
                  </h1>
                ),
                p: ({ children }) => (
                  <p className="text-brand-text/90 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-brand-accent font-semibold">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 mb-6 text-brand-text/90">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-3 mt-1">•</span>
                    <span className="text-lg">{children}</span>
                  </li>
                ),
              }}
            >
              {aboutContent}
            </ReactMarkdown>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
