'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function BuySection() {
  const t = useTranslations('buy');

  const marketplaces = [
    {
      key: 'sea',
      name: t('marketplaces.sea.name'),
      platforms: t('marketplaces.sea.platforms'),
      status: t('marketplaces.sea.status')
    },
    {
      key: 'cn',
      name: t('marketplaces.cn.name'),
      platforms: t('marketplaces.cn.platforms'),
      status: t('marketplaces.cn.status')
    },
    {
      key: 'jp',
      name: t('marketplaces.jp.name'),
      platforms: t('marketplaces.jp.platforms'),
      status: t('marketplaces.jp.status')
    }
  ];

  return (
    <section id="buy" className="py-24 px-6 bg-gradient-to-br from-paper-bg via-white to-champagne-gold/10">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-deep-brown mb-4 tracking-wide">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-text-primary/70 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-white hover:bg-primary-dark rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-semibold text-center transition-all duration-300"
          >
            {t('ctaSecondary')}
          </Link>
        </div>

        {/* Marketplace Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {marketplaces.map((marketplace) => (
            <div
              key={marketplace.key}
              className="bg-white rounded-2xl p-8 border border-champagne-gold/30 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30"
            >
              {/* Region Icon Placeholder */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-champagne-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Region Name */}
              <h3 className="text-xl font-semibold text-deep-brown text-center mb-3">
                {marketplace.name}
              </h3>

              {/* Platforms */}
              <p className="text-sm text-text-primary/60 text-center mb-4 font-light">
                {marketplace.platforms}
              </p>

              {/* Status Badge */}
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {marketplace.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-primary/60 max-w-2xl mx-auto leading-relaxed">
            More regions and platforms coming soon. For wholesale or distribution inquiries, please contact our team.
          </p>
        </div>
      </div>
    </section>
  );
}
