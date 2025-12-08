# 开发决策日志

> 记录重要的技术和业务决策及其原因

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
