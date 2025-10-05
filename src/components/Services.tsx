import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'sticky-trim',
      title: 'Sticky Trim Restoration',
      description: 'Remove deteriorated soft-touch coatings and restore to factory-like finish, including buttons, switches, and control knobs',
      icon: '🔧',
    },
    {
      id: 'stencil-recreation',
      title: 'Stencil & Icon Recreation',
      description: 'Precision recreation of worn or missing iconography and stencils',
      icon: '🎨',
    },
    {
      id: 'mobile-service',
      title: 'Mobile Appointments',
      description: 'Convenient on-site service throughout Georgia',
      icon: '🚗',
    },
    {
      id: 'mail-in',
      title: 'Mail-In Program',
      description: 'Nationwide mail-in service for remote customers',
      icon: '📦',
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Comprehensive restoration services for luxury vehicle interiors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-bg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-brand-text mb-4 group-hover:text-brand-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-brand-text/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-brand-bg rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-text mb-4">
              Why Choose Le Reserve Motorworks?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-brand-accent text-2xl font-bold mb-2">Ferrari Certified</div>
                <div className="text-brand-text/70">Master Technician</div>
              </div>
              <div className="text-center">
                <div className="text-brand-accent text-2xl font-bold mb-2">Factory-Level Quality</div>
                <div className="text-brand-text/70">Professional restoration</div>
              </div>
              <div className="text-center">
                <div className="text-brand-accent text-2xl font-bold mb-2">Nationwide</div>
                <div className="text-brand-text/70">Mobile + Mail-in service</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
