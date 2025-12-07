import {MetadataRoute} from 'next';
import {locales} from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  
  // Define all routes
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/health-center', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/glossary', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/help', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
  ];
  
  // Generate sitemap entries for all language versions
  const pages: MetadataRoute.Sitemap = [];
  
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const localePath = locale === 'en' ? '' : `/${locale}`;
      const fullPath = `${localePath}${route.path}`;
      
      // Build alternate languages for this route
      const alternateLanguages: Record<string, string> = {};
      locales.forEach((loc) => {
        const altPath = loc === 'en' ? '' : `/${loc}`;
        alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${siteUrl}${altPath}${route.path}`;
      });
      
      pages.push({
        url: `${siteUrl}${fullPath}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternateLanguages,
        },
      });
    });
  });

  return pages;
}
