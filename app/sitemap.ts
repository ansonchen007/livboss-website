import {MetadataRoute} from 'next';
import {locales} from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  
  // Generate sitemap for all language versions
  const pages = locales.map((locale) => {
    const path = locale === 'en' ? '' : `/${locale}`;
    
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          'zh-CN': `${baseUrl}/zh`,
          ja: `${baseUrl}/ja`,
        },
      },
    };
  });

  return pages;
}
