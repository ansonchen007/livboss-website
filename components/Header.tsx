'use client';

import React, { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  isActive: boolean;
  onHoverChange?: (hovered: boolean) => void;
}

export default function Header({isActive, onHoverChange}: HeaderProps) {
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');
  const params = useParams();
  const locale = params.locale as string || 'en';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getLocalizedPath = (path: string) => {
    return locale === 'en' ? path : `/${locale}${path}`;
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
            <Link 
              href={getLocalizedPath('/products')}
              className={`text-sm tracking-wider uppercase hover:text-primary transition-colors font-light ${textColor}`}
            >
              {t('products')}
            </Link>
            <Link 
              href={getLocalizedPath('/health-center')}
              className={`text-sm tracking-wider uppercase hover:text-primary transition-colors font-light ${textColor}`}
            >
              {t('healthCenter')}
            </Link>
          </nav>

          {/* Mobile: Left nav */}
          <nav className="flex lg:hidden items-center gap-3">
            <Link 
              href={getLocalizedPath('/products')}
              className="text-xs tracking-wider uppercase text-deep-brown hover:text-primary transition-colors font-light whitespace-nowrap"
            >
              {t('products')}
            </Link>
            <Link 
              href={getLocalizedPath('/health-center')}
              className="text-xs tracking-wider uppercase text-deep-brown hover:text-primary transition-colors font-light whitespace-nowrap"
            >
              {t('healthCenter')}
            </Link>
          </nav>

          {/* Center: Brand Logo */}
          <Link href={getLocalizedPath('/')} className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <Image
              src="/logo/livboss-logo.svg"
              alt={tHeader('logoAlt')}
              width={200}
              height={133}
              className={`transition-all duration-300 ${isMobile || isActive ? '' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Mobile: Center brand */}
          <Link href={getLocalizedPath('/')} className="flex lg:hidden items-center justify-center flex-1">
            <Image
              src="/logo/livboss-logo.svg"
              alt={tHeader('logoAlt')}
              width={120}
              height={80}
              priority
            />
          </Link>

          {/* Right: Buy Button + Language Switcher */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a 
              href="https://wa.me/85251997110"
              target="_blank"
              rel="noopener noreferrer"
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
