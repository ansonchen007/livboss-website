'use client';

import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {healthArticles} from '@/data/healthArticles';

export default function HealthCenterSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="health-center" className="py-24 px-6 bg-gradient-to-br from-paper-bg to-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4 tracking-wide">
            {t('health.title')}
          </h2>
          <p className="text-lg md:text-xl text-text-primary/70 max-w-3xl mx-auto">
            {t('health.subtitle')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {healthArticles.map((article) => {
            const articlePath = locale === 'en' 
              ? `/health-center/${article.slug}` 
              : `/${locale}/health-center/${article.slug}`;
            
            return (
              <Link
                key={article.id}
                href={articlePath}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-champagne-gold/20 hover:border-primary/30"
              >
              {/* Cover Image */}
              <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/10 via-champagne-gold/20 to-paper-bg">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={t(article.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase tracking-wider">
                    {t(article.tagKey)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-deep-brown mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {t(article.titleKey)}
                </h3>

                {/* Excerpt */}
                <p className="text-text-primary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(article.excerptKey)}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>{t('health.readMore')}</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href={locale === 'en' ? '/health-center' : `/${locale}/health-center`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>View All Articles</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
