import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n';
import Footer from '@/components/Footer';
import Script from 'next/script';
import '../globals.css';

export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';

  // Organization schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LivBoss Group Limited",
    "alternateName": "力博斯集团有限公司",
    "url": siteUrl,
    "logo": `${siteUrl}/logo/livboss-logo.svg`,
    "brand": {
      "@type": "Brand",
      "name": "LivBoss"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@livboss.com",
        "availableLanguage": ["en", "zh-CN", "ja"]
      }
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
