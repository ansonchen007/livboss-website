'use client';

import {useTranslations} from 'next-intl';
import DoubleFrameCard from './DoubleFrameCard';

export default function ProductsSection() {
  const t = useTranslations('products');

  const badges = [
    t('badges.broccoli'),
    t('badges.bvitamins'),
    t('badges.antioxidant'),
    t('badges.sugarfree'),
    t('badges.caffeinefree')
  ];

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4 tracking-wide">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-text-primary/70 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Product Card */}
        <DoubleFrameCard>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Product Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-paper-bg to-champagne-gold/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-sm text-deep-brown/60 font-light tracking-wide">
                  Product Visualization
                </p>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-deep-brown mb-4 tracking-wide">
                  {t('main.name')}
                </h3>
                <p className="text-text-primary/80 leading-relaxed">
                  {t('main.description')}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <p className="text-text-primary/80 text-sm leading-relaxed">
                      {t(`main.benefit${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DoubleFrameCard>

        {/* Ingredient Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="px-5 py-2.5 bg-paper-bg border border-champagne-gold/30 rounded-full text-sm text-deep-brown/80 font-light tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
