# 开发决策日志

> 记录重要的技术和业务决策及其原因

---

## 2025-12-08 - 用户体验和性能微优化

### 1. 滚动到顶部按钮

**决策**: 添加浮动的"返回顶部"按钮

**实现**:
- 创建 `ScrollToTop` 组件
- 滚动超过 500px 自动显示
- 平滑滚动动画
- 淡入淡出过渡效果

**用户体验**:
- 方便长页面快速返回顶部
- 视觉反馈清晰
- 不干扰主要内容

---

### 2. 全局样式优化

**决策**: 增强 CSS 全局配置

**添加功能**:
```css
html {
  scroll-behavior: smooth;  // 平滑滚动
}

body {
  -webkit-font-smoothing: antialiased;  // 字体平滑
  -moz-osx-font-smoothing: grayscale;
}
```

**自定义动画**:
- Shimmer 效果（加载占位符）
- Aspect ratio box（防止布局偏移）

**原因**:
- 提升整体视觉质量
- 防止 CLS（累积布局偏移）
- 更流畅的滚动体验

---

### 3. PWA 支持和移动优化

**决策**: 添加 Progressive Web App 支持

**实现**:
- 创建 `app/manifest.ts` 动态生成 manifest
- 创建 `public/manifest.json` 静态备份
- 添加完整的 PWA meta 标签

**配置**:
```json
{
  "name": "LivBoss - Premium Liver Wellness",
  "display": "standalone",
  "theme_color": "#D97706",
  "background_color": "#F9F7F4"
}
```

**Meta 标签**:
- viewport 优化（maximum-scale: 5）
- theme-color
- apple-mobile-web-app-capable
- mobile-web-app-capable

**原因**:
- 支持添加到主屏幕
- 提升移动端体验
- 原生应用般的感觉
- 离线访问准备

---

### 4. 性能预连接优化

**决策**: 添加资源预连接

**实现**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
```

**原因**:
- 减少字体加载延迟
- 提前建立连接
- 提升 First Contentful Paint (FCP)

---

### 5. 微交互增强

**决策**: 为按钮添加缩放反馈

**实现**:
```css
transform hover:scale-105 active:scale-95
```

**效果**:
- 悬停时放大 5%
- 点击时缩小 5%
- 触觉反馈清晰

**原因**:
- 增强交互反馈
- 提升用户信心
- 现代化的 UI 感受

---

## 2025-12-08 - 高级动画特效实现

### 1. 首页渐入动画系统

**决策**: 实现高级的滚动触发渐入动画

**实现**:
- 创建 `FadeInSection` 通用动画组件
- 使用 Intersection Observer API 检测元素可见性
- Hero 区域自动播放动画
- 其他区块滚动触发动画

**动画特效**:
- ✅ Hero 文案分层渐入（label → title → subtitle → CTAs）
- ✅ 延迟交错动画（200ms-700ms 梯度）
- ✅ 多方向支持（up, down, left, right, scale）
- ✅ 产品区块卡片缩放渐入
- ✅ 徽章按钮逐个飞入
- ✅ 平滑过渡（duration: 1000ms, ease-out）

**用户体验提升**:
- 专业奢华感（类 LV/Rolex 官网）
- 视觉层次清晰
- 引导用户注意力
- 降低信息过载感

**性能优化**:
- Intersection Observer（原生 API，性能优秀）
- 动画触发后自动断开 observer
- 纯 CSS transition（硬件加速）
- 无第三方动画库依赖

**原因**:
- 提升品牌高级感
- 增强用户沉浸体验
- 符合现代 Web 设计趋势
- 优雅的内容呈现方式

---

## 2025-12-08 - SEO 和性能优化完整实现

### 1. JSON-LD 结构化数据

**决策**: 添加完整的 Schema.org 结构化数据

**实现**:
- 创建 `lib/schema.ts` 统一管理 JSON-LD
- Organization Schema（组织信息）
- Product Schema（产品信息）
- Website Schema（网站信息）
- BreadcrumbList Schema（面包屑）

**包含字段**:
- ✅ 组织名称、Logo、联系方式
- ✅ 产品价格、可用性、评分
- ✅ 多语言支持
- ✅ 搜索功能配置

**原因**:
- 提升 Google 搜索结果展示（富媒体摘要）
- 提高搜索引擎理解和索引效率
- 支持语音搜索和智能助手

---

### 2. 错误和加载页面

**决策**: 添加统一的错误处理和加载状态

**实现文件**:
- `app/[locale]/error.tsx` - 错误页面
- `app/[locale]/loading.tsx` - 加载动画
- `app/[locale]/not-found.tsx` - 404 页面

**功能**:
- ✅ 品牌化的错误提示
- ✅ 优雅的加载动画（双层旋转圈）
- ✅ 用户友好的 404 页面
- ✅ 开发环境显示详细错误信息
- ✅ 快速导航链接

**原因**:
- 提升用户体验
- 专业的品牌形象
- 减少用户流失
- 提供友好的错误恢复方式

---

### 3. Next.js 配置优化

**决策**: 增强 `next.config.js` 安全和性能配置

**添加配置**:
```javascript
// 性能优化
compress: true,              // Gzip 压缩
poweredByHeader: false,      // 移除 X-Powered-By 头

// 图片优化
formats: ['image/webp'],     // WebP 格式

// 安全头
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-DNS-Prefetch-Control: on
Referrer-Policy: origin-when-cross-origin
```

**原因**:
- 提升网站加载速度
- 增强安全性防护
- 符合 Web 最佳实践
- 通过安全审计

---

## 2025-12-08 - 联系表单 API 实现

### 1. 创建联系表单后端 API

**决策**: 实现 `/api/contact` REST API 端点处理表单提交

**实现**:
- 创建 `app/api/contact/route.ts` API 路由
- 添加表单验证（必填字段、邮箱格式）
- 实现错误处理和成功响应
- 更新 `ContactForm.tsx` 集成 API 调用

**功能**:
- ✅ 表单字段验证（name, email, message 必填）
- ✅ 邮箱格式验证（regex）
- ✅ 加载状态显示（isSubmitting）
- ✅ 错误提示显示
- ✅ 成功提示自动消失

**待实现**:
- 📧 邮件服务集成（Resend/SendGrid）
- 当前使用 console.log 记录提交（生产环境需替换）

**原因**:
- 提供完整的用户反馈体验
- 为后续邮件服务集成做好准备
- 遵循 RESTful API 设计规范

---

## 2025-12-08 - 环境变量配置

**决策**: 创建 `.env.local` 文件配置生产环境 URL

**配置**:
```
NEXT_PUBLIC_SITE_URL=https://www.livboss.com
```

**原因**:
- SEO 元数据需要完整 URL
- OG Image 需要绝对路径
- Sitemap 和 Robots.txt 生成

**注意**: `.env.local` 已添加到 `.gitignore`，不会提交到仓库

---

## 2025-12-08 - OG Image 生成与配置

### 1. 创建自动化 OG Image 生成脚本

**决策**: 使用 Sharp 库生成 1200x630px 的 SVG-to-JPEG OG 图片

**实现**:
- 创建 `scripts/generate-og-image.js` 脚本
- 添加 npm script: `npm run generate-og-image`
- 设计采用品牌双框架风格和香槟金配色

**原因**:
- 自动化生成，方便未来更新和维护
- SVG 保证高质量渲染
- 尺寸符合 Facebook、Twitter、LinkedIn 等平台要求

**生成的文件**: `public/og-image.jpg` (1200x630px, JPEG 90% 质量)

**移除的 TODO**:
- ✅ 所有页面的 "TODO: Replace with final OG image asset" 已清理
- ✅ 影响文件: terms, privacy, help, health-center, glossary, contact 页面

---

## 2025-12-08 - 产品上线前准备

### 1. Product Schema - 库存状态设置为 PreOrder

**决策**: `availability: "https://schema.org/PreOrder"`

**原因**:
- 产品即将上市，但尚未正式开售
- PreOrder 状态符合当前业务实际情况
- 避免用户误以为可以立即购买

**后续调整**:
产品正式上市后，需修改为 `InStock`，位置：`app/[locale]/products/page.tsx`

---

### 2. 所有购买按钮临时指向 WhatsApp

**决策**: 购买相关按钮都链接到 `https://wa.me/85251997110`

**影响范围**:
- Header 顶部"购买"按钮
- BuySection 两个主 CTA 按钮
- Hero 区域两个 CTA 按钮链接到 `/products`

**原因**:
- 产品预售期间，通过 WhatsApp 人工处理订单
- 灵活处理早期客户需求
- 避免开发完整电商系统的前期成本

**后续调整**:
正式上市后可改为购物车系统或第三方电商平台链接

---

### 3. Product JSON-LD unitCode 使用 "d" 而非 "DAY"

**决策**: `unitCode: "d"` 表示天数

**原因**:
- "d" 是 ISO 8601 标准格式
- Google 更好地识别标准格式
- 更简洁且符合国际惯例

**位置**: `app/[locale]/products/page.tsx` - deliveryTime 配置

---

### 4. 价格有效期设置到 2026-12-31

**决策**: `priceValidUntil: "2026-12-31"`

**原因**:
- 避免频繁更新维护
- 给予充足的价格稳定期
- 产品上市初期价格不太可能调整

**后续调整**:
如有价格变动，需同步更新此字段

---

### 5. Favicon 使用动态生成 + 静态文件双重策略

**决策**: 
- `app/icon.tsx` 动态生成 512x512 PNG
- `public/` 目录存放多尺寸静态 PNG

**原因**:
- 动态生成满足 Next.js App Router 规范
- 静态文件确保 Google 搜索能抓取 `/favicon.ico`
- 多尺寸适配不同设备和平台

**关键文件**:
- 动态：`app/icon.tsx` (Edge Runtime)
- 静态：`public/favicon.ico`, `public/favicon-*.png`
- 生成脚本：`scripts/generate-favicons.js`

---

### 6. 中文 Hero 副标题两行显示

**决策**: 在中文逗号（，）处分割副标题为两行

**实现方式**:
- 翻译文件保持纯文本（不含 HTML 标签）
- 组件中判断语言环境，中文时按逗号分割
- 英文和日文保持单行自然换行

**原因**:
- 提升中文阅读体验
- 视觉平衡，更美观
- 避免在翻译文件中硬编码 HTML

**位置**: `components/HeroSection.tsx` + `locales/zh-CN/common.json`

---

### 7. 环境变量统一为 NEXT_PUBLIC_SITE_URL

**决策**: 使用 `NEXT_PUBLIC_SITE_URL` 而非 `NEXT_PUBLIC_BASE_URL`

**原因**:
- 语义更明确（SITE_URL 表示网站 URL）
- 符合 Next.js 社区惯例
- 与 Sitemap、Robots 配置一致

**影响范围**:
- `.env.local.example`
- 所有页面的 metadata 生成
- JSON-LD 结构化数据
- Sitemap 和 Robots.txt

---

### 8. 联系邮箱标准化为 hello@livboss.com

**决策**: 全站使用 `hello@livboss.com` 作为官方联系邮箱

**原因**:
- hello@ 前缀更友好、更国际化
- 统一品牌形象
- 避免多个邮箱造成混乱

**替换位置**:
- Organization JSON-LD
- 联系表单
- Footer
- 白皮书文档

---

### 9. Product JSON-LD 包含完整商家信息

**决策**: 在产品页添加完整的 shippingDetails 和 hasMerchantReturnPolicy

**包含字段**:
- ✅ 配送费用（免费）
- ✅ 配送国家（HK, US, CN, JP）
- ✅ 处理时间（1-3天）
- ✅ 运输时间（5-10天）
- ✅ 退货期限（30天）
- ✅ 退货方式（邮寄）
- ✅ 退货费用（免费）

**原因**:
- 满足 Google Merchant Center 要求
- 减少 Search Console 警告
- 提升搜索结果中的产品信息展示

**验证结果**:
通过 Google Rich Results Test，无红色错误

---

### 10. 白皮书 PDF 自动生成系统

**决策**: 使用 `markdown-pdf` 将 Markdown 转换为品牌化 PDF

**技术选择**:
- 使用 `markdown-pdf` 而非 Pandoc（无需额外安装）
- 自定义 CSS 样式（品牌色、字体）
- npm 脚本自动化

**文件结构**:
- 源文件：`docs/livboss-broccoli-liver-whitepaper.md`
- 样式：`scripts/whitepaper-pdf-styles.css`
- 脚本：`scripts/generate-whitepaper-pdf.js`
- 输出：`public/docs/livboss-broccoli-liver-whitepaper.pdf`

**原因**:
- 方便内容更新后重新生成
- 保持品牌视觉一致性
- 可在网站上直接下载

---

## 技术债务与待优化项

### 1. Next-intl 配置警告
**问题**: 使用 `i18n.ts` 已被标记为 deprecated
**影响**: 不影响功能，但有警告信息
**优化方向**: 迁移到 `i18n/request.ts` 配置方式

### 2. Review 和 AggregateRating
**状态**: Product Schema 缺少这两个推荐字段
**影响**: Google Rich Results Test 显示非严重警告
**优化时机**: 产品上市后收集真实用户评论再添加

### 3. 产品图片占位符
**状态**: 部分产品图片使用 hero 图片作为占位
**优化方向**: 产品上市前准备专业产品照片

---

## 业务里程碑

- ✅ 2025-12-07: 环境变量标准化、联系邮箱确定
- ✅ 2025-12-07: 白皮书内容扩展、真实学术引用
- ✅ 2025-12-07: PDF 生成系统完成
- ✅ 2025-12-08: Product JSON-LD 完善、通过 Google 测试
- ✅ 2025-12-08: Favicon 基础设施完成
- ⏳ 待定: 产品正式上市日期
- ⏳ 待定: 从 WhatsApp 切换到正式购物系统

---

**维护说明**: 
- 每次重要决策后更新此文档
- 记录决策原因和后续调整方向
- 便于团队协作和新成员了解项目背景

**最后更新**: 2025-12-08
