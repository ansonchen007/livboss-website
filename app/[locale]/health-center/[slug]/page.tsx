import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Link from 'next/link';
import { healthArticles } from '@/data/healthArticles';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return healthArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  
  // Find the article by slug
  const article = healthArticles.find((a) => a.slug === slug);
  if (!article) return {};
  
  const t = await getTranslations({ locale, namespace: `health.articles.${article.id}` });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePath}/health-center/${slug}`;
  
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

export default async function ArticleDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  
  // Find the article by slug
  const article = healthArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: `health.articles.${article.id}` });

  // Dynamically import content based on slug and locale
  let ArticleContent;
  
  if (slug === 'broccoli-sprouts-liver-support') {
    // Use the full detailed content we already created
    try {
      if (locale === 'zh') {
        const module = await import('../broccoli-sprouts-liver-support/content-zh');
        ArticleContent = module.default;
      } else if (locale === 'ja') {
        const module = await import('../broccoli-sprouts-liver-support/content-ja');
        ArticleContent = module.default;
      } else {
        const module = await import('../broccoli-sprouts-liver-support/content-en');
        ArticleContent = module.default;
      }
    } catch (error) {
      console.error('Error loading article content:', error);
      // Fallback to placeholder if content doesn't exist
      ArticleContent = () => (
        <div>
          <header className="mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
              {t('tag')}
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-text-primary/70 text-lg leading-relaxed mb-8">
              {t('excerpt')}
            </p>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-900">
                <strong>Content loading error</strong>
              </p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    // For other articles, use a placeholder component
    ArticleContent = () => (
      <div>
        <header className="mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
            {t('tag')}
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-deep-brown mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-text-primary/70 text-lg leading-relaxed mb-8">
            {t('excerpt')}
          </p>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-amber-900">
              <strong>
                {locale === 'zh' && '更多内容即将推出'}
                {locale === 'ja' && 'より詳細なコンテンツは近日公開予定です'}
                {locale === 'en' && 'More detailed content coming soon'}
              </strong>
            </p>
            <p className="text-amber-800 mt-3">
              {locale === 'zh' && '我们正在为这篇文章准备深入的科学内容。敬请期待！'}
              {locale === 'ja' && 'この記事の詳細な科学的コンテンツを準備中です。お楽しみに！'}
              {locale === 'en' && 'We are preparing in-depth scientific content for this article. Stay tuned!'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Localized back button text
  const backText = locale === 'zh' ? '返回健康中心' 
    : locale === 'ja' ? '健康センターに戻る' 
    : 'Back to Health Center';

  const healthCenterPath = locale === 'en' ? '/health-center' : `/${locale}/health-center`;

  return (
    <>
      <Header isActive={true} />
      <article className="min-h-screen bg-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href={healthCenterPath}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backText}
          </Link>

          <ArticleContent />
        </div>
      </article>
    </>
  );
}
