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
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${siteUrl}${localePath}/health-center/${slug}`;
  
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
  const commonT = await getTranslations({ locale, namespace: 'health' });

  // Get related articles (exclude current article, show max 2)
  const relatedArticles = healthArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

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
      // Fallback to placeholder
      ArticleContent = () => (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <p className="text-amber-900">
            <strong>Content loading error</strong>
          </p>
        </div>
      );
    }
  } else {
    // For other articles, use a placeholder component
    ArticleContent = () => (
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
    );
  }

  // Localized paths
  const healthCenterPath = locale === 'en' ? '/health-center' : `/${locale}/health-center`;
  const productsPath = locale === 'en' ? '/products' : `/${locale}/products`;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === 'zh') {
      return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
    } else if (locale === 'ja') {
      return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <Header isActive={true} />
      <article className="min-h-screen bg-gradient-to-b from-paper-bg to-white pt-32 pb-20 px-6">
        {/* Breadcrumb */}
        <div className="max-w-[800px] mx-auto mb-8">
          <Link 
            href={healthCenterPath}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {commonT('article.backToList')}
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-[800px] mx-auto mb-12">
          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              {t('tag')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-deep-brown mb-6 leading-tight">
            {t('title')}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-primary/60 border-b border-champagne-gold/20 pb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{commonT('article.published')} {formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime} {commonT('article.readTime')}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-[750px] mx-auto prose prose-lg prose-headings:font-light prose-headings:text-deep-brown prose-p:text-text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-brown prose-strong:font-semibold">
          <ArticleContent />
        </div>

        {/* CTA Section */}
        <div className="max-w-[800px] mx-auto mt-16 mb-16">
          <div className="bg-gradient-to-br from-primary/5 via-champagne-gold/10 to-paper-bg border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-light text-deep-brown mb-4">
              {commonT('articleCta.title')}
            </h3>
            <Link
              href={productsPath}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary-dark rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{commonT('articleCta.button')}</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-[1000px] mx-auto mt-20">
            <h2 className="text-3xl font-light text-deep-brown mb-8 text-center">
              {commonT('related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => {
                const relatedT = commonT;
                const articlePath = locale === 'en' 
                  ? `/health-center/${relatedArticle.slug}` 
                  : `/${locale}/health-center/${relatedArticle.slug}`;
                
                return (
                  <Link
                    key={relatedArticle.id}
                    href={articlePath}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-paper-bg to-champagne-gold/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tag */}
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {relatedT(`articles.${relatedArticle.id}.tag`)}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-deep-brown mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedT(`articles.${relatedArticle.id}.title`)}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {relatedT(`articles.${relatedArticle.id}.excerpt`)}
                      </p>

                      {/* Read More Link */}
                      <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>{relatedT('readMore')}</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
