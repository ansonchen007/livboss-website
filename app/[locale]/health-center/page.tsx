import { getTranslations } from 'next-intl/server';
import { healthArticles } from '@/data/healthArticles';
import Link from 'next/link';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'health' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}/health-center`;
  
  const alternateLanguages: Record<string, string> = {};
  ['en', 'zh', 'ja'].forEach((loc) => {
    const path = loc === 'en' ? '' : `/${loc}`;
    alternateLanguages[loc === 'zh' ? 'zh-CN' : loc] = `${baseUrl}${path}/health-center`;
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
      // TODO: Replace with final OG image asset
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

export default async function HealthCenterPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'healthPage' });
  const articlesT = await getTranslations({ locale, namespace: 'health.articles' });

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

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {healthArticles.map((article) => {
            const articlePath = locale === 'en' 
              ? `/health-center/${article.slug}` 
              : `/${locale}/health-center/${article.slug}`;
            
            return (
              <Link
                key={article.id}
                href={articlePath}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 block"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-paper-bg to-champagne-gold/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tag */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {articlesT(`${article.id}.tag`)}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-light text-deep-brown mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {articlesT(`${article.id}.title`)}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {articlesT(`${article.id}.excerpt`)}
                  </p>

                  {/* Read More Link */}
                  <div className="inline-flex items-center text-primary text-sm font-medium group-hover:text-primary-dark transition-colors">
                    <span>{articlesT('readMore', { default: 'Read more' })}</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>

          {/* Disclaimer Note */}
          <div className="max-w-4xl mx-auto mt-16 p-6 bg-paper-bg/50 border border-champagne-gold/20 rounded-lg">
          <p className="text-sm text-text-primary/70 leading-relaxed text-center">
            {t('note')}
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
