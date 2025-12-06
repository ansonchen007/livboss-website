import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'glossary' });
  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'glossary' });

  const ingredients = [
    'broccoli',
    'bcomplex',
    'milkthistle',
    'turmeric',
    'nac',
    'alphalipoic',
    'selenium',
    'zinc',
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 mb-12">{t('subtitle')}</p>

        <div className="space-y-8">
          {ingredients.map((key) => (
            <div key={key} className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-light text-deep-brown mb-3">
                {t(`items.${key}.name`)}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
