'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {useState, useTransition} from 'react';
import {locales, type Locale} from '@/i18n';

interface LanguageSwitcherProps {
  isLight?: boolean; // For transparent header mode
  showLabel?: boolean; // Show language label next to icon
}

export default function LanguageSwitcher({ isLight = false, showLabel = false }: LanguageSwitcherProps) {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const getLanguageLabel = (loc: string) => {
    switch (loc) {
      case 'en': return 'EN';
      case 'zh': return '中';
      case 'ja': return '日';
      default: return 'EN';
    }
  };

  const switchLocale = (newLocale: Locale) => {
    startTransition(() => {
      // Remove current locale from pathname
      const segments = pathname.split('/').filter(Boolean);
      const isLocaleInPath = locales.includes(segments[0] as Locale);
      
      let newPathname = pathname;
      if (isLocaleInPath) {
        segments.shift();
      }
      
      // Build new path
      if (newLocale === 'en') {
        newPathname = '/' + segments.join('/');
      } else {
        newPathname = '/' + newLocale + (segments.length ? '/' + segments.join('/') : '');
      }

      // Store language preference
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

      router.push(newPathname);
      setIsOpen(false);
    });
  };

  const textColor = isLight ? 'text-white' : 'text-deep-brown';
  const hoverBg = isLight ? 'hover:bg-white/10' : 'hover:bg-gray-50';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 transition-colors ${textColor}`}
        disabled={isPending}
      >
        {/* Globe icon */}
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        {showLabel && (
          <span className="text-sm font-medium tracking-wider">
            {getLanguageLabel(locale)}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-3 w-40 bg-white rounded-sm shadow-lg border border-gray-100 overflow-hidden z-50">
            <button
              onClick={() => switchLocale('en')}
              className={`w-full px-4 py-3 text-left text-sm tracking-wider uppercase transition-colors ${
                locale === 'en' ? 'text-primary font-medium bg-primary/5' : 'text-deep-brown font-light'
              } ${hoverBg}`}
              disabled={isPending}
            >
              {t('en')}
            </button>
            <button
              onClick={() => switchLocale('zh')}
              className={`w-full px-4 py-3 text-left text-sm tracking-wider uppercase transition-colors ${
                locale === 'zh' ? 'text-primary font-medium bg-primary/5' : 'text-deep-brown font-light'
              } ${hoverBg}`}
              disabled={isPending}
            >
              {t('zh')}
            </button>
            <button
              onClick={() => switchLocale('ja')}
              className={`w-full px-4 py-3 text-left text-sm tracking-wider uppercase transition-colors ${
                locale === 'ja' ? 'text-primary font-medium bg-primary/5' : 'text-deep-brown font-light'
              } ${hoverBg}`}
              disabled={isPending}
            >
              {t('ja')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
