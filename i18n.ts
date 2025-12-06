import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'zh', 'ja'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
};

export const localeMapping: Record<string, Locale> = {
  'en': 'en',
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-Hans': 'zh',
  'zh-Hant': 'zh',
  'ja': 'ja',
};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  const mappedLocale = locale === 'zh' ? 'zh-CN' : locale;

  return {
    messages: (await import(`./locales/${mappedLocale}/common.json`)).default
  };
});
