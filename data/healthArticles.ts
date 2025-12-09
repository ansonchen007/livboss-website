export interface HealthArticle {
  id: string;
  slug: string;
  tagKey: string;
  titleKey: string;
  excerptKey: string;
  href: string;
  publishDate: string;
  readTime: string; // e.g., "8-10 min"
  image?: string; // Optional image path
}

export const healthArticles: HealthArticle[] = [
  // Featured article - Broccoli science review appears first
  {
    id: 'article4',
    slug: 'broccoli-sprouts-liver-support',
    tagKey: 'health.articles.article4.tag',
    titleKey: 'health.articles.article4.title',
    excerptKey: 'health.articles.article4.excerpt',
    href: '/health-center/broccoli-sprouts-liver-support',
    publishDate: '2024-11-15',
    readTime: '8-10 min',
    image: '/images/broccoli-science-hero.jpg'
  },
  {
    id: 'article1',
    slug: 'understanding-your-liver',
    tagKey: 'health.articles.article1.tag',
    titleKey: 'health.articles.article1.title',
    excerptKey: 'health.articles.article1.excerpt',
    href: '/health-center/understanding-your-liver',
    publishDate: '2024-10-20',
    readTime: '5 min',
    image: '/images/liver-anatomy-hero.jpg'
  },
  {
    id: 'article2',
    slug: 'sleep-deprivation-liver',
    tagKey: 'health.articles.article2.tag',
    titleKey: 'health.articles.article2.title',
    excerptKey: 'health.articles.article2.excerpt',
    href: '/health-center/sleep-deprivation-liver',
    publishDate: '2024-10-28',
    readTime: '6 min',
    image: '/images/sleep-liver-hero.jpg'
  },
  {
    id: 'article3',
    slug: 'broccoli-sprouts-science',
    tagKey: 'health.articles.article3.tag',
    titleKey: 'health.articles.article3.title',
    excerptKey: 'health.articles.article3.excerpt',
    href: '/health-center/broccoli-sprouts-science',
    publishDate: '2024-11-05',
    readTime: '7 min',
    image: '/images/broccoli-sprouts-nature.jpg'
  }
];
