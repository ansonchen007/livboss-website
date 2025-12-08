import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${siteUrl}${localePath}/terms`;
  
  const alternateLanguages: Record<string, string> = {};
  ['en', 'zh', 'ja'].forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${siteUrl}${path}/terms`;
  });
  
  const metaTitle = t('metaTitle');
  const metaDescription = t('metaDescription');
  
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: currentUrl,
      siteName: 'LivBoss',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`${siteUrl}/og-image.jpg`],
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

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-white pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-4">
            {t('title')}
          </h1>
        <p className="text-lg text-gray-600 mb-8">{t('subtitle')}</p>
        <p className="text-sm text-gray-500 mb-12">{t('lastUpdated')}</p>

        <div className="space-y-10">
          {sections.map((num) => (
            <div key={num}>
              <h2 className="text-2xl font-light text-deep-brown mb-3">
                {t(`section${num}.title`)}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {t(`section${num}.body`)}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
