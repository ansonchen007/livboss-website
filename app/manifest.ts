import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LivBoss - Premium Liver Wellness',
    short_name: 'LivBoss',
    description: 'Premium liver health supplement with broccoli sprout formula for optimal liver support',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F7F4',
    theme_color: '#D97706',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    categories: ['health', 'lifestyle', 'wellness'],
    lang: 'en',
    dir: 'ltr',
  };
}
