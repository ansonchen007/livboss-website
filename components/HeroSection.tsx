'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-livboss-broccoli.jpg"
          alt={t('imageAlt')}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        
        {/* Gradient overlay - stronger on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 md:to-black/40" />
      </div>

      {/* Text overlay - bottom center */}
      <div className="relative min-h-screen lg:min-h-[90vh] flex items-end justify-center pb-12 sm:pb-16 md:pb-20 lg:pb-32">
        <div className="text-center px-4 sm:px-6 max-w-5xl w-full">
          {/* Small label */}
          <p className="text-white/90 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-light">
            {t('label')}
          </p>

          {/* Main title - responsive sizing and line breaks */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide md:tracking-wider mb-4 sm:mb-6 leading-tight px-2">
            {t('title')}
          </h2>

          {/* Subtitle - responsive sizing */}
          {t('subtitle') && (
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-light tracking-wide max-w-3xl mx-auto px-2">
              {t('subtitle')}
            </p>
          )}

          {/* CTA Links - stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#learn-more"
              className="group inline-flex items-center gap-2 text-white text-xs sm:text-sm md:text-base tracking-widest uppercase border-b border-white/50 pb-1 hover:border-white transition-all duration-300"
            >
              {t('ctaPrimary')}
              <svg 
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <span className="hidden sm:block text-white/50 text-sm">|</span>
            <a
              href="#ingredients"
              className="group inline-flex items-center gap-2 text-white text-xs sm:text-sm md:text-base tracking-widest uppercase border-b border-white/50 pb-1 hover:border-white transition-all duration-300"
            >
              {t('ctaSecondary')}
              <svg 
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
