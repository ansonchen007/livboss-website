import {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {locales} from '@/i18n';
import HomePageClient from './HomePageClient';

type Props = {
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Props): Promise<Metadata> {
  const t = await getTranslations({locale});
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}`;
  
  // Define alternate languages
  const alternateLanguages: Record<string, string> = {};
  locales.forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${baseUrl}${path}`;
  });
  
  return {
    title: `${t('brand.name')} ${t('brand.tagline')} - ${t('hero.subtitle').split('\n')[0]}`,
    description: t('about.intro'),
    keywords: 'liver health, liver support, supplement, 肝脏健康, 护肝, 营养补充品, 肝パワー, サプリメント',
    authors: [{name: 'LivBoss'}],
    openGraph: {
      title: `${t('brand.name')} ${t('brand.tagline')}`,
      description: t('about.intro'),
      url: currentUrl,
      siteName: 'LivBoss',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${t('brand.name')} ${t('brand.tagline')}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('brand.name')} ${t('brand.tagline')}`,
      description: t('about.intro'),
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function Page() {
  return <HomePageClient />;
}
