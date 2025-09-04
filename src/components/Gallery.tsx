import { motion } from 'framer-motion';
import { GALLERY, GalleryItem } from '../data/gallery';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Before & After Gallery
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            See the transformation of luxury interior components from worn and sticky to pristine condition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY.map((item: GalleryItem, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-surface rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 bg-brand-surface">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.model} restoration`}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUExQTFBIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE2MCAyMTBIMjQwTDIwMCAxNTBaIiBmaWxsPSIjRDcxOTIwIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiNENzE5MjAiLz4KPHR5cGUgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRURFREVEIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSIyMDAiIHk9IjI2MCI+SW1hZ2UgQ29taW5nIFNvb248L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-brand-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-accent font-medium">
                    {item.model}
                  </p>
                </div>
                
                <p className="text-brand-text/80 leading-relaxed">
                  {item.caption}
                </p>
                
                <div className="mt-4 pt-4 border-t border-brand-bg">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-accent/10 text-brand-accent">
                    Before & After
                  </span>
                </div>
              </div>
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
          <p className="text-brand-text/70 mb-6">
            Ready to restore your luxury interior?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('estimate');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-accent text-white px-8 py-3 rounded-2xl font-semibold hover:bg-brand-accent/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
          >
            Get Your Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
