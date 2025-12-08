// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'consent',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views (automatically handled by @next/third-parties)
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Predefined conversion events for LivBoss

// Track when user clicks "Buy Now" button
export const trackBuyNowClick = (platform: string, product: string = 'LivBoss Broccoli Sprout Extract') => {
  event('buy_now_click', {
    event_category: 'ecommerce',
    event_label: platform,
    product_name: product,
    value: 1,
  });
};

// Track when user submits contact form
export const trackContactFormSubmit = (success: boolean) => {
  event('contact_form_submit', {
    event_category: 'engagement',
    event_label: success ? 'success' : 'failed',
    value: success ? 1 : 0,
  });
};

// Track when user clicks external links (e.g., WhatsApp, Email)
export const trackExternalLinkClick = (linkType: 'whatsapp' | 'email' | 'phone' | 'other', destination: string) => {
  event('external_link_click', {
    event_category: 'engagement',
    event_label: linkType,
    link_url: destination,
  });
};

// Track when user changes language
export const trackLanguageChange = (fromLang: string, toLang: string) => {
  event('language_change', {
    event_category: 'user_preference',
    from_language: fromLang,
    to_language: toLang,
  });
};

// Track when user views product details
export const trackProductView = (productName: string) => {
  event('view_item', {
    event_category: 'ecommerce',
    items: [{
      item_name: productName,
      item_category: 'Health Supplements',
      item_brand: 'LivBoss',
    }],
  });
};

// Track when user scrolls to specific sections
export const trackSectionView = (sectionName: string) => {
  event('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
};

// Track newsletter signup (if you add this feature later)
export const trackNewsletterSignup = (email: string) => {
  event('newsletter_signup', {
    event_category: 'engagement',
    event_label: 'success',
  });
};

// Track outbound purchase conversions
export const trackPurchaseConversion = (platform: string, value: number, currency: string = 'USD') => {
  event('purchase', {
    event_category: 'ecommerce',
    transaction_id: `${Date.now()}-${platform}`,
    value: value,
    currency: currency,
    items: [{
      item_name: 'LivBoss Broccoli Sprout Extract',
      item_category: 'Health Supplements',
      item_brand: 'LivBoss',
      price: value,
      quantity: 1,
    }],
  });
};

// Track when user views health article
export const trackArticleView = (articleTitle: string, articleSlug: string) => {
  event('article_view', {
    event_category: 'content',
    event_label: articleTitle,
    article_slug: articleSlug,
  });
};
