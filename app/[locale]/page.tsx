import {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {locales} from '@/i18n';
import HomePageClient from './HomePageClient';
import {generateOrganizationSchema, generateProductSchema, generateWebsiteSchema} from '@/lib/schema';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'home'});
  const brandT = await getTranslations({locale, namespace: 'brand'});
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${siteUrl}${localePath}`;
  
  // Define alternate languages
  const alternateLanguages: Record<string, string> = {};
  locales.forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${siteUrl}${path}`;
  });
  
  const metaTitle = t('metaTitle');
  const metaDescription = t('metaDescription');
  
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: 'liver health, liver support, broccoli sprout, sulforaphane, 肝脏健康, 护肝, 西兰花芽, 肝パワー, ブロッコリースプラウト',
    authors: [{name: 'LivBoss'}],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: currentUrl,
      siteName: brandT('name'),
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

export default async function Page({params}: Props) {
  const {locale} = await params;
  
  // Generate JSON-LD structured data
  const organizationSchema = generateOrganizationSchema(locale);
  const productSchema = generateProductSchema(locale);
  const websiteSchema = generateWebsiteSchema(locale);
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HomePageClient />
    </>
  );
}
