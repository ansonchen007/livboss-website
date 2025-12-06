import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'help' });
  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default async function HelpPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'help' });

  const faqItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
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
  );
}
