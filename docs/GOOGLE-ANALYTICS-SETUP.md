# Google Analytics 4 集成指南

## 📊 功能说明

已集成 Google Analytics 4 (GA4) 用于追踪：
- ✅ **访问量**: 页面浏览、独立访客、会话
- ✅ **用户行为**: 按钮点击、表单提交、外链点击
- ✅ **转化率**: 购买意向、联系表单、语言切换

---

## 🚀 快速配置

### 1. 创建 Google Analytics 4 账号

1. 访问 https://analytics.google.com
2. 点击 **"开始衡量"** 创建账号
3. 填写账号名称：`LivBoss`
4. 创建媒体资源：`LivBoss Website`
5. 选择行业：`Health & Fitness`
6. 选择报告时区：`Asia/Hong Kong`

### 2. 获取 Measurement ID

1. 在 GA4 中，进入 **管理** (左下角齿轮图标)
2. 选择 **数据流** → **网站**
3. 添加新数据流：
   - **网站网址**: `https://www.livboss.com`
   - **数据流名称**: `LivBoss Production`
4. 创建后，复制 **衡量 ID** (格式：`G-XXXXXXXXXX`)

### 3. 配置环境变量

#### 本地开发 (.env.local)
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID
```

#### Cloudflare Pages
1. 登录 Cloudflare Dashboard
2. 进入 Pages 项目 → **Settings** → **Environment variables**
3. 添加变量：
   ```
   名称: NEXT_PUBLIC_GA_MEASUREMENT_ID
   值: G-YOUR-MEASUREMENT-ID
   环境: Production (勾选)
   ```
4. 保存并重新部署

---

## 📈 追踪的事件

### 自动追踪
- ✅ 页面浏览 (page_view)
- ✅ 会话开始 (session_start)
- ✅ 首次访问 (first_visit)

### 自定义事件

#### 1. 购买按钮点击 (`buy_now_click`)
**位置**: 首页、产品页的 "立即购买" 按钮

**参数**:
```typescript
{
  event_category: 'ecommerce',
  event_label: 'WhatsApp',
  product_name: 'LivBoss Broccoli Sprout Extract',
  value: 1
}
```

#### 2. 联系表单提交 (`contact_form_submit`)
**位置**: 联系页面表单

**参数**:
```typescript
{
  event_category: 'engagement',
  event_label: 'success' | 'failed',
  value: 1 | 0
}
```

#### 3. 外部链接点击 (`external_link_click`)
**位置**: WhatsApp、邮箱、电话链接

**参数**:
```typescript
{
  event_category: 'engagement',
  event_label: 'whatsapp' | 'email' | 'phone',
  link_url: 'destination_url'
}
```

#### 4. 语言切换 (`language_change`)
**位置**: 语言切换器

**参数**:
```typescript
{
  event_category: 'user_preference',
  from_language: 'en',
  to_language: 'zh'
}
```

#### 5. 产品浏览 (`view_item`)
**位置**: 产品页

**参数**:
```typescript
{
  items: [{
    item_name: 'LivBoss Broccoli Sprout Extract',
    item_category: 'Health Supplements',
    item_brand: 'LivBoss'
  }]
}
```

---

## 📊 在 GA4 中查看数据

### 实时报告
1. GA4 → **报告** → **实时**
2. 查看当前在线用户、活跃页面、事件

### 事件报告
1. GA4 → **报告** → **参与度** → **事件**
2. 查看所有自定义事件的触发次数

### 转化设置
1. GA4 → **配置** → **事件**
2. 将关键事件标记为转化：
   - ✅ `contact_form_submit`
   - ✅ `buy_now_click`
   - ✅ `newsletter_signup` (未来添加)

### 创建自定义报告
1. GA4 → **浏览** → **创建自定义报告**
2. 推荐报告：
   - **电商漏斗**: view_item → buy_now_click
   - **联系转化**: page_view → contact_form_submit
   - **用户旅程**: 首页 → 产品页 → 联系页

---

## 🔧 高级配置

### 1. 增强型衡量（Enhanced Measurement）

在 GA4 数据流设置中启用：
- ✅ 滚动 (Scrolls)
- ✅ 出站点击 (Outbound clicks)
- ✅ 站内搜索 (Site search)
- ✅ 视频互动 (Video engagement)
- ✅ 文件下载 (File downloads)

### 2. 用户属性（User Properties）

可以在 `lib/analytics.ts` 中添加：
```typescript
window.gtag('set', 'user_properties', {
  preferred_language: locale,
  user_type: 'visitor' | 'customer',
});
```

### 3. 电商追踪（Ecommerce）

已预留 `trackPurchaseConversion` 函数，当添加购物车功能时可使用：
```typescript
trackPurchaseConversion('Shopify', 49.99, 'USD');
```

---

## 🎯 关键指标（KPIs）

### 访问量指标
- **总用户数**: 独立访客数量
- **新用户数**: 首次访问用户
- **会话数**: 用户会话总数
- **平均会话时长**: 用户停留时间
- **跳出率**: 单页会话比例

### 行为指标
- **页面浏览量**: 各页面访问次数
- **热门页面**: /products, /contact, /health-center
- **按钮点击率**: buy_now_click 事件数
- **表单提交率**: contact_form_submit 成功率

### 转化指标
- **联系转化率**: (表单提交 / 总访客) × 100%
- **购买意向率**: (buy_now_click / 总访客) × 100%
- **用户参与度**: 活跃用户占比

---

## 🚨 隐私合规

### GDPR / Cookie 政策
如果面向欧盟用户，需要：
1. 添加 Cookie 同意横幅
2. 允许用户拒绝 Analytics
3. 更新隐私政策

### 数据保留
在 GA4 设置中：
1. **管理** → **数据设置** → **数据保留**
2. 建议设置：14 个月

---

## 📞 故障排查

### 问题 1: GA4 不记录数据

**检查**:
1. `NEXT_PUBLIC_GA_MEASUREMENT_ID` 是否配置正确
2. Measurement ID 格式是否为 `G-XXXXXXXXXX`
3. 浏览器开发者工具 → Network → 搜索 `google-analytics`
4. 检查是否有广告拦截插件

### 问题 2: 自定义事件未显示

**检查**:
1. GA4 → **配置** → **事件** 查看事件列表
2. 新事件可能需要 24-48 小时才会出现在报告中
3. 使用 **DebugView** 实时查看事件（需要安装 GA4 Debug Chrome 扩展）

### 问题 3: 本地开发看不到数据

**解决**:
1. 确保 `.env.local` 中配置了 Measurement ID
2. 重启开发服务器
3. GA4 实时报告可能有 1-2 分钟延迟

---

## 📚 相关资源

- **GA4 官方文档**: https://support.google.com/analytics/answer/9304153
- **Next.js Analytics**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **事件命名规范**: https://support.google.com/analytics/answer/9267735

---

**最后更新**: 2025-12-08  
**文档版本**: 1.0
