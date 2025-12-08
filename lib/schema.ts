export function generateOrganizationSchema(locale: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LivBoss',
    alternateName: '肝动力',
    url: siteUrl,
    logo: `${siteUrl}/logo/livboss-logo.svg`,
    description: locale === 'zh' 
      ? '高端护肝补充剂品牌，采用西兰花芽精华配方' 
      : locale === 'ja'
      ? '高級肝臓サポートサプリメント、ブロッコリースプラウト配合'
      : 'Premium liver health supplement brand with broccoli sprout formula',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@livboss.com',
      availableLanguage: ['English', 'Chinese', 'Japanese'],
    },
    sameAs: [
      // Add social media links when available
    ],
  };
}

export function generateProductSchema(locale: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  const localePath = locale === 'en' ? '' : `/${locale}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'LivBoss Broccoli Sprout Formula',
    description: locale === 'zh'
      ? '高浓度西兰花芽提取物，含有效护肝成分萝卜硫素'
      : locale === 'ja'
      ? '高濃度ブロッコリースプラウトエキス、スルフォラファン配合'
      : 'High-concentration broccoli sprout extract with sulforaphane for liver support',
    image: `${siteUrl}/images/hero-livboss-broccoli.jpg`,
    brand: {
      '@type': 'Brand',
      name: 'LivBoss',
    },
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}${localePath}/products`,
      priceCurrency: 'USD',
      price: '49.99',
      availability: 'https://schema.org/PreOrder',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };
}

export function generateWebsiteSchema(locale: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.livboss.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LivBoss',
    url: siteUrl,
    description: locale === 'zh'
      ? 'LivBoss 肝动力 - 专业护肝健康品牌'
      : locale === 'ja'
      ? 'LivBoss - プロフェッショナル肝臓ウェルネスブランド'
      : 'LivBoss - Professional Liver Wellness Brand',
    inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja-JP' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
