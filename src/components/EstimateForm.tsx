import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { estimateSchema } from '../lib/validation';
import { sendEstimateForm } from '../lib/email';
import { useState } from 'react';
import { z } from 'zod';

type EstimateFormData = z.infer<typeof estimateSchema>;

const EstimateForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateSchema),
  });

  const onSubmit = async (data: EstimateFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData();
      
      // Add hidden subject for Formspree
      formData.append('_subject', 'New Estimate – Le Reserve');
      
      // Add form fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      // Get honeypot value from form event
      const form = document.getElementById('estimate-form') as HTMLFormElement;
      const honeypot = new FormData(form).get('website') as string;
      if (honeypot) {
        throw new Error('Spam detected');
      }

      await sendEstimateForm(formData);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send estimate request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Sticky Trim Restoration',
    'Stencil & Icon Recreation',
    'Mobile Service',
    'Mail-In Service',
    'Other (specify in details)',
  ];

  return (
    <section id="estimate" className="py-20 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Get Your Estimate
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Tell us about your restoration needs and we'll provide a detailed estimate
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-brand-surface rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-center">
                Thank you! Your estimate request has been sent. We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-center">
                {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="estimate-form">
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-brand-text mb-2">
                  Location *
                </label>
                <input
                  {...register('location')}
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                  placeholder="City, State"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-400">{errors.location.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-brand-text mb-2">
                Vehicle Information *
              </label>
              <input
                {...register('vehicle')}
                type="text"
                id="vehicle"
                className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                placeholder="Make / Model / Year (e.g., Ferrari F430 2005)"
              />
              {errors.vehicle && (
                <p className="mt-1 text-sm text-red-400">{errors.vehicle.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brand-text mb-2">
                Service Needed *
              </label>
              <select
                {...register('service')}
                id="service"
                className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-brand-text mb-2">
                Project Details *
              </label>
              <textarea
                {...register('details')}
                id="details"
                rows={4}
                className="w-full px-4 py-3 bg-brand-bg border border-brand-bg rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Please describe the condition of your trim, specific issues, and any other relevant details..."
              />
              {errors.details && (
                <p className="mt-1 text-sm text-red-400">{errors.details.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">
                Preferred Contact Method *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    {...register('contact')}
                    type="radio"
                    value="email"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border-2 border-brand-accent rounded-full mr-2 flex items-center justify-center peer-checked:bg-brand-accent/20">
                    <div className="w-2 h-2 bg-brand-accent rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-brand-text">Email</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    {...register('contact')}
                    type="radio"
                    value="phone"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border-2 border-brand-accent rounded-full mr-2 flex items-center justify-center peer-checked:bg-brand-accent/20">
                    <div className="w-2 h-2 bg-brand-accent rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-brand-text">Phone</span>
                </label>
              </div>
              {errors.contact && (
                <p className="mt-1 text-sm text-red-400">{errors.contact.message}</p>
              )}
            </div>

            <div className="flex items-start">
              <input
                {...register('consent')}
                type="checkbox"
                id="consent"
                className="mt-1 mr-3 w-4 h-4 text-brand-accent bg-brand-bg border-brand-accent rounded focus:ring-brand-accent focus:ring-2"
              />
              <label htmlFor="consent" className="text-sm text-brand-text/80">
                I consent to being contacted about my restoration project and understand that Le Reserve Motorworks will use my information solely for providing estimates and project communication. *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-400">{errors.consent.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-accent text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-brand-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
            >
              {isSubmitting ? 'Sending...' : 'Send Estimate Request'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EstimateForm;
