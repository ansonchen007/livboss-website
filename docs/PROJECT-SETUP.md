# LivBoss Website - 项目配置总结

> 最后更新：2025年12月8日

---

## 🎉 项目完成状态

**状态**: ✅ 生产就绪  
**版本**: 1.0.0  
**最后构建**: 2025-12-08

---

## 📋 项目概述

- **项目名称**: LivBoss Website
- **技术栈**: Next.js 15 + TypeScript + next-intl
- **部署平台**: Cloudflare Pages
- **生产域名**: https://www.livboss.com
- **仓库地址**: https://github.com/ansonchen007/livboss-website

---

## 🚀 快速开始（新电脑设置）

### 1. 环境要求
```bash
Node.js: v18 或更高
Git: 最新版本
VS Code: 推荐安装
```

### 2. 克隆项目
```bash
git clone https://github.com/ansonchen007/livboss-website.git
cd livboss-website
```

### 3. 安装依赖
```bash
npm install
```

### 4. 配置环境变量
创建 `.env.local` 文件：
```bash
NEXT_PUBLIC_SITE_URL=https://www.livboss.com
```

### 5. 启动开发服务器
```bash
npm run dev
# 访问 http://localhost:3000
```

### 6. 构建生产版本
```bash
npm run build
npm run start
```

---

## 🌐 多语言配置

### 支持的语言
- **English (en)**: 默认语言，路由 `/`
- **简体中文 (zh-CN)**: 路由 `/zh-CN/`
- **日本語 (ja)**: 路由 `/ja/`

### 翻译文件位置
```
locales/
├── en/common.json       # 英文翻译
├── zh-CN/common.json    # 中文翻译
└── ja/common.json       # 日文翻译
```

### 国际化配置
- 使用 `next-intl` 库
- 配置文件：`i18n.ts`
- 中间件：`middleware.ts`（处理语言路由）

---

## 📧 联系方式配置

### 官方联系邮箱
```
hello@livboss.com
```

### WhatsApp 联系（用于所有"购买"按钮）
```
https://wa.me/85251997110
```

### 更改位置
- **邮箱**: 搜索 `hello@livboss.com` 全局替换
- **WhatsApp**: 
  - `components/Header.tsx` - 顶部"购买"按钮
  - `components/BuySection.tsx` - 两个主 CTA 按钮

---

## 🎨 品牌资源

### Logo 文件
```
public/logo/livboss-logo.svg    # 主 Logo
```

### Favicon 文件
```
public/favicon.ico              # 浏览器图标
public/favicon-16x16.png        # 小尺寸
public/favicon-32x32.png        # 标准尺寸
public/android-chrome-192x192.png  # Android
public/apple-touch-icon.png     # iOS
public/livboss-icon-square.svg  # 源文件（方形L图标）
```

### 品牌色彩
```css
--primary: #D97706          /* 香槟金 */
--primary-dark: #92400E     /* 深棕色 */
--champagne-gold: #C6A664   /* 香槟金（备用）*/
--deep-brown: #4A3728       /* 深棕色 */
--paper-bg: #F9F7F4         /* 纸质背景 */
```

---

## 📄 重要页面

### 首页 (/)
- **文件**: `app/[locale]/page.tsx`
- **客户端组件**: `app/[locale]/HomePageClient.tsx`
- **功能**: Hero 区域、产品展示、健康中心、购买区域

### 产品页 (/products)
- **文件**: `app/[locale]/products/page.tsx`
- **包含**: Product JSON-LD（结构化数据）
- **SEO**: 完整的商家信息、价格、配送、退货政策

### 健康中心 (/health-center)
- **文章列表**: `app/[locale]/health-center/page.tsx`
- **文章详情**: `app/[locale]/health-center/[slug]/page.tsx`
- **主要文章**: 西兰花芽护肝支持（包含完整白皮书内容）

### 联系页面 (/contact)
- **文件**: `app/[locale]/contact/page.tsx`
- **表单**: `app/[locale]/contact/ContactForm.tsx`
- **邮箱**: hello@livboss.com

---

## 🔍 SEO 配置

### 环境变量
```bash
NEXT_PUBLIC_SITE_URL=https://www.livboss.com
```

### Sitemap
- **文件**: `app/sitemap.ts`
- **访问**: https://www.livboss.com/sitemap.xml

### Robots.txt
- **文件**: `app/robots.ts`
- **访问**: https://www.livboss.com/robots.txt

### 结构化数据（JSON-LD）

#### 全局 Organization Schema
**位置**: `app/[locale]/layout.tsx`
```json
{
  "@type": "Organization",
  "name": "LivBoss Group Limited",
  "alternateName": "力博斯集团有限公司",
  "email": "hello@livboss.com"
}
```

#### 产品页 Product Schema
**位置**: `app/[locale]/products/page.tsx`
```json
{
  "@type": "Product",
  "name": "LivBoss Broccoli Sprout Liver Support",
  "sku": "LIVBOSS-001",
  "price": "39.00",
  "priceCurrency": "USD",
  "availability": "PreOrder",
  "priceValidUntil": "2026-12-31"
}
```

**包含完整商家信息**：
- ✅ 价格和货币
- ✅ 配送详情（免费配送，1-3天处理，5-10天运输）
- ✅ 退货政策（30天免费退货）
- ✅ 适用国家：HK, US, CN, JP

### Google Rich Results Test
- ✅ 已通过测试（无红色错误）
- ⚠️ 仅有两个非严重警告（review, aggregateRating - 可选字段）

---

## 📦 白皮书系统

### Markdown 源文件
```
docs/livboss-broccoli-liver-whitepaper.md
```

### PDF 生成
```bash
# 生成 PDF
npm run generate-pdf

# 输出位置
public/docs/livboss-broccoli-liver-whitepaper.pdf

# 访问地址
https://www.livboss.com/docs/livboss-broccoli-liver-whitepaper.pdf
```

### PDF 样式配置
- **样式文件**: `scripts/whitepaper-pdf-styles.css`
- **生成脚本**: `scripts/generate-whitepaper-pdf.js`
- **依赖**: `markdown-pdf` 包

---

## 🖼️ Favicon 系统

### 生成 Favicon
```bash
npm run generate-favicons
```

### 源文件
```
public/livboss-icon-square.svg
```

### 生成的文件
- `public/favicon.ico` - 浏览器图标
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/android-chrome-192x192.png`
- `public/apple-touch-icon.png`

### 生成脚本
- **位置**: `scripts/generate-favicons.js`
- **依赖**: `sharp` 包

---

## 🎯 Hero 区域配置

### 中文副标题（两行显示）
**文件**: `locales/zh-CN/common.json`
```json
"subtitle": "以西兰花芽为核心的高端营养配方，专为熬夜、应酬、压力生活中的肝脏提供日常支持。"
```

**渲染逻辑**: `components/HeroSection.tsx`
- 中文语言环境下，在中文逗号（，）处分割成两行
- 英文和日文保持单行显示

### CTA 按钮
**文件**: `components/HeroSection.tsx`
- 两个按钮都链接到 `/products` 页面
- 使用 `getLocalizedPath()` 生成区域化路径

---

## 🛒 购买流程

### 所有"购买"入口 → WhatsApp
**当前设置**: 所有购买按钮临时指向 WhatsApp 联系

#### 1. Header 购买按钮
**文件**: `components/Header.tsx`
```tsx
href="https://wa.me/85251997110"
target="_blank"
rel="noopener noreferrer"
```

#### 2. BuySection 主 CTA（两个按钮）
**文件**: `components/BuySection.tsx`
- 主按钮："联系购买渠道"
- 次按钮："申请代理合作"
- 都指向同一个 WhatsApp 链接

#### 未来调整
产品正式上市后，可改为：
- 链接到购物车系统
- 或链接到电商平台
- 或保持 WhatsApp 联系方式

---

## 📱 运行时配置

### Edge Runtime
**配置位置**: `app/[locale]/layout.tsx`
```tsx
export const runtime = 'edge';
```

### Icon 路由
**文件**: `app/icon.tsx`
- 使用 Next.js ImageResponse API
- 动态生成 512x512 PNG
- 配置为 Edge Runtime

---

## 🔧 NPM 脚本

```json
{
  "dev": "next dev",                    // 开发服务器
  "build": "next build",                 // 生产构建
  "start": "next start",                 // 启动生产服务器
  "lint": "next lint",                   // 代码检查
  "generate-pdf": "node scripts/generate-whitepaper-pdf.js",      // 生成白皮书 PDF
  "generate-favicons": "node scripts/generate-favicons.js"        // 生成 favicon 文件
}
```

---

## 📂 项目结构

```
livboss-website/
├── app/
│   ├── [locale]/              # 多语言路由
│   │   ├── layout.tsx         # 主布局（含 favicon 链接）
│   │   ├── page.tsx           # 首页
│   │   ├── products/          # 产品页
│   │   ├── health-center/     # 健康中心
│   │   ├── contact/           # 联系页面
│   │   └── ...
│   ├── icon.tsx               # 动态生成 icon
│   ├── sitemap.ts             # Sitemap 生成
│   └── robots.ts              # Robots.txt
├── components/                # React 组件
│   ├── Header.tsx             # 顶部导航
│   ├── HeroSection.tsx        # 首页 Hero
│   ├── BuySection.tsx         # 购买区域
│   └── ...
├── locales/                   # 翻译文件
│   ├── en/common.json
│   ├── zh-CN/common.json
│   └── ja/common.json
├── public/                    # 静态资源
│   ├── docs/                  # PDF 文档
│   ├── images/                # 图片
│   ├── logo/                  # Logo 文件
│   ├── favicon.ico
│   └── ...
├── scripts/                   # 工具脚本
│   ├── generate-whitepaper-pdf.js
│   ├── generate-favicons.js
│   └── whitepaper-pdf-styles.css
├── docs/                      # 文档
│   ├── livboss-broccoli-liver-whitepaper.md
│   └── PROJECT-SETUP.md       # 本文档
├── .env.local.example         # 环境变量示例
├── i18n.ts                    # 国际化配置
├── middleware.ts              # Next.js 中间件
├── next.config.js             # Next.js 配置
├── tailwind.config.ts         # Tailwind CSS 配置
└── package.json               # 项目依赖
```

---

## 🚨 重要注意事项

### 1. 产品状态
- **当前**: `PreOrder`（预售）
- **上市后**: 需将 `availability` 改为 `InStock`
- **修改位置**: `app/[locale]/products/page.tsx`

### 2. WhatsApp 临时方案
- 所有购买按钮指向 WhatsApp 联系
- 产品上市后需要调整为实际购买链接

### 3. 价格有效期
- **当前**: 2026-12-31
- **建议**: 产品上市时确认价格是否需要调整

### 4. 图片资源
- Hero 图片: `/images/hero-livboss-broccoli.jpg`
- 如需更换，确保同时更新 JSON-LD 中的图片路径

---

## 📊 Google Search Console

### 验证状态
- ✅ 产品 JSON-LD 已优化
- ✅ Rich Results Test 通过
- ⏳ 等待 Google 重新抓取验证

### 下一步
1. 在 Search Console 点击"验证修复"
2. 等待 Google 重新抓取（数小时到数天）
3. 检查商品列表问题是否减少

---

## 🔄 部署流程

### 自动部署
1. 本地修改代码
2. `git add -A`
3. `git commit -m "描述"`
4. `git push`
5. Cloudflare Pages 自动构建部署（约 2-5 分钟）

### 手动验证
部署完成后访问：
- https://www.livboss.com
- https://www.livboss.com/products
- https://www.livboss.com/favicon.ico

---

## 📞 技术支持

### 开发相关问题
- 查看本文档
- 查看代码注释
- 查看 Git 提交历史

### 业务相关问题
- 邮箱：hello@livboss.com
- WhatsApp：+852 5199 7110

---

## 📝 更新日志

### 2025-12-08
- ✅ 完善 Product JSON-LD（商家信息、价格、配送、退货）
- ✅ 优化 unitCode 为标准格式（"d" 替代 "DAY"）
- ✅ 延长价格有效期至 2026-12-31
- ✅ 添加完整 favicon 基础设施
- ✅ 通过 Google Rich Results Test 验证

### 2025-12-07
- ✅ 标准化环境变量为 `NEXT_PUBLIC_SITE_URL`
- ✅ 更新联系邮箱为 `hello@livboss.com`
- ✅ 扩展白皮书内容，添加真实学术引用
- ✅ 创建 PDF 生成系统
- ✅ 更新 Hero 区域中文副标题为两行显示
- ✅ 所有购买入口重定向到 WhatsApp
- ✅ 修复 icon 路由 Edge Runtime 配置

---

## 🎉 完成清单

新电脑设置完成后，确认以下项目：

- [ ] Node.js 已安装
- [ ] Git 已安装
- [ ] VS Code 已安装并登录
- [ ] 项目已克隆
- [ ] 依赖已安装（`npm install`）
- [ ] `.env.local` 已创建
- [ ] 开发服务器能运行（`npm run dev`）
- [ ] 能成功构建（`npm run build`）
- [ ] 阅读完本文档

---

**最后更新**: 2025年12月8日  
**维护者**: LivBoss Team  
**版本**: 1.0
