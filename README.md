# LivBoss 肝动力 - Multilingual Landing Page

A luxury liver health supplement brand website with full internationalization support.

## 🌍 Multilingual Support

This project supports 3 languages:
- **English (en)** - Default language at `/`
- **中文 (zh)** - Chinese version at `/zh`
- **日本語 (ja)** - Japanese version at `/ja`

## 🏗️ Project Structure

```
LiveBoss-webside/
├── app/
│   ├── [locale]/          # Dynamic locale routing
│   │   ├── layout.tsx     # Locale-specific layout with NextIntlClientProvider
│   │   └── page.tsx       # Home page with SEO metadata & hreflang
│   ├── robots.ts          # SEO: robots.txt generator
│   ├── sitemap.ts         # SEO: sitemap.xml with all language versions
│   └── globals.css        # Global styles with Tailwind
├── components/
│   ├── Header.tsx         # Navigation with language switcher
│   ├── LanguageSwitcher.tsx  # Globe icon + dropdown language selector
│   ├── DoubleFrameCard.tsx   # Luxury Rolls-Royce style double-frame
│   ├── Section.tsx
│   ├── SectionTitle.tsx
│   ├── BenefitCard.tsx
│   ├── IngredientCard.tsx
│   ├── TestimonialCard.tsx
│   └── Button.tsx
├── locales/
│   ├── en/
│   │   └── common.json    # English translations
│   ├── zh-CN/
│   │   └── common.json    # Chinese translations
│   └── ja/
│       └── common.json    # Japanese translations
├── i18n.ts               # i18n configuration
├── middleware.ts         # Next.js middleware for locale detection
├── tailwind.config.ts    # LV-orange theme colors
├── next.config.js        # Next.js config with next-intl plugin
└── package.json
```

## 🎨 Design System

### Colors (Tailwind Custom)
- **primary**: `#F28A1A` - LV-style orange
- **primary-dark**: `#D6730E` - Hover states
- **deep-brown**: `#4A2B1A` - Titles and text
- **champagne-gold**: `#D9C08F` - Borders and accents
- **paper-bg**: `#F7F4EE` - Background
- **text-primary**: `#2A2A2A` - Body text

### Signature Component
**DoubleFrameCard** - Rolls-Royce inspired luxury double-frame border with subtle offset for a 3D effect.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set your production URL:
```
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the English version.
- Chinese: [http://localhost:3000/zh](http://localhost:3000/zh)
- Japanese: [http://localhost:3000/ja](http://localhost:3000/ja)

### 4. Build for Production

```bash
npm run build
npm start
```

## 🌐 i18n Features

### Automatic Language Detection
- On first visit, the middleware detects the browser's `Accept-Language` header
- Redirects to the appropriate language version (`/`, `/zh`, or `/ja`)
- User's manual language selection is stored in cookies for future visits

### Language Switcher
- Globe icon + current language code in the header
- Dropdown with all available languages
- Stores preference in cookies to override browser detection
- Smooth client-side navigation between languages

### SEO Optimization
✅ **Metadata** - Each language has unique title, description, and Open Graph tags  
✅ **hreflang** - Proper alternate language links for search engines  
✅ **Sitemap** - All language versions included in `sitemap.xml`  
✅ **robots.txt** - Dynamically generated with sitemap reference  
✅ **Canonical URLs** - Each page has its canonical URL set

## 📝 Adding New Content

### To add new text:
1. Edit the JSON files in `locales/[locale]/common.json`
2. Add the same key to all language files
3. Use in components with `useTranslations()`:

```tsx
// Client component
'use client';
import {useTranslations} from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  return <h1>{t('your.key.here')}</h1>;
}

// Server component
import {getTranslations} from 'next-intl/server';

export default async function MyPage({params: {locale}}) {
  const t = await getTranslations({locale});
  return <h1>{t('your.key.here')}</h1>;
}
```

## 📄 Translations Structure

All translations are in `locales/[locale]/common.json`:

```json
{
  "brand": { "name": "...", "tagline": "..." },
  "nav": { "benefits": "...", "ingredients": "...", ... },
  "hero": { "title": "...", "subtitle": "...", ... },
  "benefits": { ... },
  "ingredients": { ... },
  "usage": { ... },
  "testimonials": { ... },
  "about": { ... },
  "cta": { ... },
  "footer": { ... },
  "language": { "en": "...", "zh": "...", "ja": "..." }
}
```

## 🎯 Next Steps (Future Enhancements)

This is **Step 1** - i18n foundation. Future steps could include:

- [ ] Full luxury UI implementation for all sections
- [ ] Add more pages (Product details, FAQ, Contact)
- [ ] E-commerce integration
- [ ] Admin panel for content management
- [ ] Analytics and tracking
- [ ] Performance optimization
- [ ] Animated transitions

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **Deployment**: Static export ready or Node.js host

## 🛠️ Key Files

| File | Purpose |
|------|---------|
| `middleware.ts` | Language detection and routing |
| `i18n.ts` | i18n configuration and locale mapping |
| `app/[locale]/layout.tsx` | Wraps pages with NextIntlClientProvider |
| `app/[locale]/page.tsx` | Home page with metadata generation |
| `components/LanguageSwitcher.tsx` | Language selector UI |
| `locales/*/common.json` | Translation files |

## 📧 Contact

For questions or support, contact: hello@livboss.com

---

**LivBoss 肝动力** - 守护现代人的肝脏健康 🧡
