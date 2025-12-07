import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import DoubleFrameCard from '@/components/DoubleFrameCard';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productsPage' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}/products`;
  
  // Define alternate languages
  const alternateLanguages: Record<string, string> = {};
  ['en', 'zh', 'ja'].forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${baseUrl}${path}/products`;
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
          url: `${baseUrl}/og-image.jpg`,
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
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
  };
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'productsPage' });

  const ingredientKeys = ['broccoli', 'bcomplex', 'milkthistle', 'nac', 'alphalipoic'];

  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-white pt-32 pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-deep-brown mb-6 tracking-wide">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-text-primary/70 max-w-4xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* What It Is Section */}
          <section className="mb-20">
          <DoubleFrameCard>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-light text-deep-brown mb-6">
                {t('whatItIs.title')}
              </h2>
              <p className="text-text-primary/80 leading-relaxed text-lg">
                {t('whatItIs.description')}
              </p>
            </div>
          </DoubleFrameCard>
          </section>

          {/* Who It's For Section */}
          <section className="mb-20">
          <h2 className="text-3xl font-light text-deep-brown mb-8 text-center">
            {t('whoItsFor.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-start gap-4 p-6 bg-paper-bg rounded-lg border border-champagne-gold/20">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-text-primary/80 leading-relaxed">
                  {t(`whoItsFor.item${num}`)}
                </p>
              </div>
            ))}
          </div>
          </section>

          {/* Ingredients Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-deep-brown mb-4">
                {t('ingredients.title')}
              </h2>
              <p className="text-lg text-text-primary/70 max-w-3xl mx-auto">
                {t('ingredients.subtitle')}
              </p>
            </div>
            <div className="space-y-6">
              {ingredientKeys.map((key) => (
                <div key={key} className="border-b border-gray-200 pb-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-deep-brown">
                        {t(`ingredients.items.${key}.name`)}
                      </h3>
                      <p className="text-sm text-primary mt-1">
                        {t(`ingredients.items.${key}.amount`)}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-text-primary/80 leading-relaxed">
                        {t(`ingredients.items.${key}.role`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Usage Section */}
          <section className="mb-20">
          <DoubleFrameCard>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-light text-deep-brown mb-8">
                {t('usage.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <h3 className="font-medium text-deep-brown">Dosage</h3>
                    </div>
                    <p className="text-text-primary/80 ml-4">{t('usage.dosage')}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <h3 className="font-medium text-deep-brown">Timing</h3>
                    </div>
                    <p className="text-text-primary/80 ml-4">{t('usage.timing')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <h3 className="font-medium text-deep-brown">Duration</h3>
                    </div>
                    <p className="text-text-primary/80 ml-4">{t('usage.duration')}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <h3 className="font-medium text-deep-brown">Storage</h3>
                    </div>
                    <p className="text-text-primary/80 ml-4">{t('usage.storage')}</p>
                  </div>
                </div>
              </div>
            </div>
          </DoubleFrameCard>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
          <h2 className="text-3xl font-light text-deep-brown mb-8 text-center">
            {t('faq.title')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-deep-brown mb-3">
                  {t(`faq.q${num}`)}
                </h3>
                <p className="text-text-primary/80 leading-relaxed">
                  {t(`faq.a${num}`)}
                </p>
              </div>
            ))}
          </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
          <div className="bg-gradient-to-br from-paper-bg to-champagne-gold/10 rounded-2xl p-12 border border-champagne-gold/30">
            <h2 className="text-3xl font-light text-deep-brown mb-6">
              {t('cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale === 'en' ? '' : locale + '/'}#buy`}
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                {t('cta.buy')}
              </Link>
              <Link
                href={`/${locale === 'en' ? '' : locale + '/'}help`}
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-paper-bg transition-colors font-medium border border-primary"
              >
                {t('cta.contact')}
              </Link>
            </div>
          </div>
          </section>
        </div>
      </div>
    </>
  );
}
