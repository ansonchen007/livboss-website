import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });

  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://livboss.com${locale === 'en' ? '' : `/${locale}`}/contact`,
      siteName: 'LivBoss',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg', // TODO: Replace with actual OG image
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'], // TODO: Replace with actual OG image
    },
    alternates: {
      canonical: `https://livboss.com${locale === 'en' ? '' : `/${locale}`}/contact`,
      languages: {
        en: 'https://livboss.com/contact',
        'zh-CN': 'https://livboss.com/zh/contact',
        ja: 'https://livboss.com/ja/contact',
      },
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

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  return <ContactForm locale={locale} />;
}
