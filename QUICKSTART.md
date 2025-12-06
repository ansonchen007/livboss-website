# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```powershell
npm install
```

This will install:
- Next.js 15
- React 18
- next-intl (for multilingual support)
- Tailwind CSS
- TypeScript dependencies

## Step 2: Run Development Server

```powershell
npm run dev
```

The server will start at `http://localhost:3000`

## Step 3: Test All Languages

Open these URLs in your browser:

- **English**: http://localhost:3000
- **Chinese**: http://localhost:3000/zh  
- **Japanese**: http://localhost:3000/ja

## Step 4: Test Language Switcher

1. Look for the globe icon (🌐) in the header
2. Click it to see the language dropdown
3. Select a different language
4. The page will switch and your preference will be saved

## ✅ What's Working

- ✅ Automatic language detection based on browser settings
- ✅ Manual language switching with globe icon
- ✅ Language preference stored in cookies
- ✅ SEO metadata for each language
- ✅ hreflang tags for search engines
- ✅ Sitemap with all language versions
- ✅ Responsive design
- ✅ LV-orange luxury theme

## 📁 Project Structure

```
app/
  [locale]/           ← Dynamic route for languages
    layout.tsx        ← Wraps pages with i18n provider
    page.tsx          ← Home page with metadata
  robots.ts           ← SEO robots.txt
  sitemap.ts          ← SEO sitemap.xml

components/
  LanguageSwitcher.tsx  ← Globe + dropdown selector
  Header.tsx            ← Navigation with language switcher
  [other components]

locales/
  en/common.json      ← English translations
  zh-CN/common.json   ← Chinese translations  
  ja/common.json      ← Japanese translations

middleware.ts         ← Language detection logic
i18n.ts              ← i18n configuration
```

## 🔧 Troubleshooting

### Module not found errors?
Make sure you ran `npm install` first.

### Page not loading?
1. Check that the dev server is running (`npm run dev`)
2. Make sure you're using the correct URL format:
   - ✅ `http://localhost:3000`
   - ✅ `http://localhost:3000/zh`
   - ❌ `http://localhost:3000/zh-CN` (use `/zh` instead)

### Language switcher not working?
1. Make sure JavaScript is enabled in your browser
2. Check browser console for errors
3. Clear cookies and try again

## 🎨 Customizing Content

Edit the translation files in `locales/[language]/common.json` to change text content.

Example:
```json
{
  "hero": {
    "title": "Your Custom Title Here"
  }
}
```

## 📦 Building for Production

```powershell
npm run build
npm start
```

Or for static export:
```powershell
npm run build
```
The static files will be in the `out/` directory.

## 🌐 Deployment

The site is ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting
- Static hosting (if using static export)

Remember to set the environment variable:
```
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com
```

---

Need help? Check the main README.md for full documentation.
