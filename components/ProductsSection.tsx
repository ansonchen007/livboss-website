'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import DoubleFrameCard from './DoubleFrameCard';
import FadeInSection from './FadeInSection';

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
        <FadeInSection direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4 tracking-wide">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-text-primary/70 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeInSection>

        {/* Main Product Card */}
        <FadeInSection direction="scale" delay={200}>
          <DoubleFrameCard>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-paper-bg">
              <Image 
                src="/images/product-formula-visualization.jpg" 
                alt="LivBoss Broccoli Sprout Formula"
                fill
                unoptimized
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
        </FadeInSection>

        {/* Ingredient Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {badges.map((badge, index) => (
            <FadeInSection 
              key={index}
              direction="up"
              delay={300 + index * 100}
              className="inline-block"
            >
              <div 
                className="px-5 py-2.5 bg-paper-bg border border-champagne-gold/30 rounded-full text-sm text-deep-brown/80 font-light tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
              {badge}
            </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
