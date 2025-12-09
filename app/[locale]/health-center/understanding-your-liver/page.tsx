import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'health.articles.article1' });
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${siteUrl}${localePath}/health-center/understanding-your-liver`;
  
  return {
    title: t('title'),
    description: t('excerpt'),
    openGraph: {
      title: t('title'),
      description: t('excerpt'),
      url: currentUrl,
      type: 'article',
    },
  };
}

export default async function UnderstandingYourLiverArticle({ params }: Props) {
  const { locale } = await params;

  // Import locale-specific content
  let ArticleContent: React.ComponentType;
  
  if (locale === 'zh') {
    const ContentZH = (await import('./content-zh')).default;
    ArticleContent = ContentZH;
  } else if (locale === 'ja') {
    const ContentJA = (await import('./content-ja')).default;
    ArticleContent = ContentJA;
  } else {
    const ContentEN = (await import('./content-en')).default;
    ArticleContent = ContentEN;
  }

  return (
    <>
      <Header isActive={true} />
      <article className="min-h-screen bg-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/health-center"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'zh' ? '返回健康中心' : locale === 'ja' ? '健康センターに戻る' : 'Back to Health Center'}
          </Link>

          <ArticleContent />
        </div>
      </article>
    </>
  );
}
