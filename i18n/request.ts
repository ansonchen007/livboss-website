import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  const mappedLocale = locale === 'zh' ? 'zh-CN' : locale;

  return {
    locale,
    messages: (await import(`../locales/${mappedLocale}/common.json`)).default
  };
});
