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

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en';
  }

  const mappedLocale = locale === 'zh' ? 'zh-CN' : locale;

  return {
    locale,
    messages: (await import(`./locales/${mappedLocale}/common.json`)).default
  };
});
