import Link from 'next/link';
import Header from '@/components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NotFound({ params }: Props) {
  const { locale } = await params;

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

          {/* 404 Content */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-9xl font-light text-primary mb-4">404</h1>
            <h2 className="text-3xl font-light text-deep-brown mb-6">
              {locale === 'zh' ? '页面未找到' : locale === 'ja' ? 'ページが見つかりません' : 'Page Not Found'}
            </h2>
            <p className="text-lg text-text-primary/70 mb-8">
              {locale === 'zh' ? '抱歉，您访问的页面不存在。' : locale === 'ja' ? '申し訳ございません。お探しのページは存在しません。' : 'Sorry, the page you are looking for does not exist.'}
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {locale === 'zh' ? '返回首页' : locale === 'ja' ? 'ホームに戻る' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
