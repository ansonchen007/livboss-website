'use client';

import React, { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  isActive: boolean;
  onHoverChange?: (hovered: boolean) => void;
}

export default function Header({isActive, onHoverChange}: HeaderProps) {
  const t = useTranslations('nav');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mobile always shows white header, desktop shows transparent or white based on isActive
  const headerBg = isMobile || isActive ? 'bg-white' : 'bg-transparent';
  const textColor = isMobile || isActive ? 'text-deep-brown' : 'text-white';
  const shadowStyle = isMobile || isActive ? 'shadow-sm' : '';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${shadowStyle}`}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div className="mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('products')}
              className={`text-sm tracking-wider uppercase hover:text-primary transition-colors font-light ${textColor}`}
            >
              {t('products')}
            </button>
            <button 
              onClick={() => scrollToSection('health-center')}
              className={`text-sm tracking-wider uppercase hover:text-primary transition-colors font-light ${textColor}`}
            >
              {t('healthCenter')}
            </button>
          </nav>

          {/* Mobile: Left nav */}
          <nav className="flex lg:hidden items-center gap-3">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-xs tracking-wider uppercase text-deep-brown hover:text-primary transition-colors font-light whitespace-nowrap"
            >
              {t('products')}
            </button>
            <button 
              onClick={() => scrollToSection('health-center')}
              className="text-xs tracking-wider uppercase text-deep-brown hover:text-primary transition-colors font-light whitespace-nowrap"
            >
              {t('healthCenter')}
            </button>
          </nav>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <div className="text-center">
              <h1 className={`text-2xl md:text-3xl tracking-[0.2em] font-light uppercase transition-colors ${textColor}`}>
                LIVBOSS
              </h1>
              <p className={`text-[10px] tracking-[0.3em] uppercase mt-0.5 transition-colors ${isMobile || isActive ? 'text-deep-brown/60' : 'text-white/80'}`}>
                Liver Wellness
              </p>
            </div>
          </div>

          {/* Mobile: Center brand */}
          <div className="flex lg:hidden items-center justify-center flex-1">
            <div className="text-center">
              <h1 className="text-lg tracking-[0.15em] font-light uppercase text-deep-brown">
                LIVBOSS
              </h1>
              <p className="text-[8px] tracking-[0.3em] uppercase text-deep-brown/60">
                Liver Wellness
              </p>
            </div>
          </div>

          {/* Right: Buy Button + Language Switcher */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a 
              href="#buy"
              className={`px-4 lg:px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                isMobile || isActive 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-paper-bg'
              }`}
            >
              {t('buy')}
            </a>
            
            <LanguageSwitcher isLight={!isMobile && !isActive} showLabel={true} />
          </div>
        </div>
      </div>
    </header>
  );
}
