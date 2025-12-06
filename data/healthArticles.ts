export interface HealthArticle {
  id: string;
  slug: string;
  tagKey: string;
  titleKey: string;
  excerptKey: string;
  href: string;
}

export const healthArticles: HealthArticle[] = [
  {
    id: 'article1',
    slug: 'understanding-your-liver',
    tagKey: 'health.articles.article1.tag',
    titleKey: 'health.articles.article1.title',
    excerptKey: 'health.articles.article1.excerpt',
    href: '/health-center/understanding-your-liver'
  },
  {
    id: 'article2',
    slug: 'sleep-deprivation-liver',
    tagKey: 'health.articles.article2.tag',
    titleKey: 'health.articles.article2.title',
    excerptKey: 'health.articles.article2.excerpt',
    href: '/health-center/sleep-deprivation-liver'
  },
  {
    id: 'article3',
    slug: 'broccoli-sprouts-science',
    tagKey: 'health.articles.article3.tag',
    titleKey: 'health.articles.article3.title',
    excerptKey: 'health.articles.article3.excerpt',
    href: '/health-center/broccoli-sprouts-science'
  }
];
