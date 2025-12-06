import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
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
  );
}
