import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}/privacy`;
  
  const alternateLanguages: Record<string, string> = {};
  ['en', 'zh', 'ja'].forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${baseUrl}${path}/privacy`;
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
    },
    twitter: {
      card: 'summary',
      title: metaTitle,
      description: metaDescription,
    },
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

          <div className="border-t border-gray-300 pt-10 mt-12">
            <h2 className="text-2xl font-light text-deep-brown mb-3">
              {t('contact.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('contact.body')}
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
