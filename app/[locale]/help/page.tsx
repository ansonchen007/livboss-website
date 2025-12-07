import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'help' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}/help`;
  
  const alternateLanguages: Record<string, string> = {};
  ['en', 'zh', 'ja'].forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${baseUrl}${path}/help`;
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

export default async function HelpPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'help' });

  const faqItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-white pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 mb-12">{t('subtitle')}</p>

          <div className="space-y-10">
            {faqItems.map((num) => (
              <div key={num} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-medium text-deep-brown mb-3">
                  {t(`faq.q${num}`)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t(`faq.a${num}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
