'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations('contactPage');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // TODO: Implement API integration for form submission
    console.log('Form data:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', region: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-gradient-to-b from-paper-bg to-white pt-32">
      {/* Header section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-deep-brown/80 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Three info sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Business & distribution */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-deep-brown mb-4">
              {t('sections.businessTitle')}
            </h3>
            <p className="text-deep-brown/70 leading-relaxed">
              {t('sections.businessBody')}
            </p>
          </div>

          {/* Healthcare & professional */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-deep-brown mb-4">
              {t('sections.medicalTitle')}
            </h3>
            <p className="text-deep-brown/70 leading-relaxed">
              {t('sections.medicalBody')}
            </p>
          </div>

          {/* Consumer enquiries */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-deep-brown mb-4">
              {t('sections.consumerTitle')}
            </h3>
            <p className="text-deep-brown/70 leading-relaxed">
              {t('sections.consumerBody')}
            </p>
          </div>
        </div>

        {/* Business email display */}
        <div className="bg-gradient-to-r from-primary/5 to-champagne-gold/10 rounded-2xl p-8 mb-16 text-center">
          <p className="text-deep-brown/70 mb-2">{t('emailLabel')}</p>
          <a 
            href="mailto:hello@livboss.com" 
            className="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            hello@livboss.com
          </a>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-deep-brown mb-2">
                {t('form.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-deep-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-deep-brown mb-2">
                {t('form.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-deep-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Region field */}
            <div>
              <label htmlFor="region" className="block text-sm font-semibold text-deep-brown mb-2">
                {t('form.regionLabel')}
              </label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-deep-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-deep-brown mb-2">
                {t('form.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-deep-brown/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                  isSubmitted
                    ? 'bg-green-500 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 hover:shadow-lg'
                }`}
              >
                {isSubmitted ? t('form.successMessage') : t('form.submit')}
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-sm text-deep-brown/60 text-center leading-relaxed">
              {t('form.note')}{' '}
              <Link 
                href={`/${locale}/privacy`} 
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
