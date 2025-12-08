# 📧 Resend 邮件服务集成指南

## 🚀 快速开始

### 1. 创建 Resend 账号

访问 [https://resend.com](https://resend.com) 注册账号

### 2. 获取 API Key

1. 登录 Resend 控制台
2. 前往 [API Keys](https://resend.com/api-keys)
3. 点击 "Create API Key"
4. 复制生成的 API Key（格式：`re_xxxxxxxxxxxxx`）

### 3. 配置 API Key

#### 本地开发
在 `.env.local` 文件中添加：
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### Cloudflare Pages 生产环境
1. 前往 Cloudflare Pages 项目设置
2. 选择 "Settings" → "Environment variables"
3. 添加变量：
   - 名称：`RESEND_API_KEY`
   - 值：你的实际 API Key
   - 环境：Production（和 Preview 如果需要）

### 4. 验证域名（重要！）

#### 在 Resend 中添加域名

1. 前往 Resend 控制台的 [Domains](https://resend.com/domains)
2. 点击 "Add Domain"
3. 输入 `livboss.com`
4. 按照指示添加 DNS 记录到你的域名提供商

#### 需要添加的 DNS 记录

Resend 会提供以下记录（示例）：

**SPF 记录（TXT）：**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

**DKIM 记录（TXT）：**
```
Type: TXT
Name: resend._domainkey
Value: [Resend 提供的值]
```

**MX 记录：**
```
Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
```

**DMARC 记录（可选但推荐）：**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:hello@livboss.com
```

### 5. 等待验证

- DNS 记录添加后，通常需要 1-24 小时生效
- 在 Resend 控制台检查验证状态
- 验证成功后才能从 `@livboss.com` 发送邮件

---

## 📨 使用说明

### 发件地址配置

验证域名后，你可以使用以下发件地址：

- **团队通知邮件**：`noreply@livboss.com`
- **客户回复邮件**：`hello@livboss.com`
- **自定义**：`any-name@livboss.com`

### 当前邮件流程

#### 1. 用户提交联系表单
```
用户填写：
- 姓名
- 邮箱
- 地区（可选）
- 留言
```

#### 2. 发送到团队
```
发件人：noreply@livboss.com
收件人：hello@livboss.com
主题：New Contact Form Submission from [姓名]
内容：使用 ContactEmailTemplate 模板
```

#### 3. 自动回复客户
```
发件人：hello@livboss.com
收件人：[客户邮箱]
主题：Thank you for contacting LivBoss
内容：使用 ContactAutoReplyTemplate 模板
```

---

## 🎨 邮件模板

### 团队通知模板（ContactEmailTemplate）

包含：
- LivBoss 品牌头部
- 客户信息表格（姓名、邮箱、地区）
- 完整留言内容
- 品牌化底部

### 客户自动回复模板（ContactAutoReplyTemplate）

包含：
- 专业问候
- 感谢信息
- 回复时间说明（24-48 小时）
- WhatsApp 联系方式
- 访问网站 CTA 按钮
- 完整联系信息

---

## 🧪 测试邮件发送

### 本地测试

1. 确保 `.env.local` 配置了 API Key
2. 启动开发服务器：
   ```bash
   npm run dev
   ```

3. 访问联系页面并提交表单
4. 检查：
   - 终端日志（是否有错误）
   - Resend 控制台（邮件发送状态）
   - 收件箱（team 和 customer）

### 使用 Resend 测试模式

开发时，Resend 会自动使用测试模式，邮件不会真实发送但会显示在控制台。

---

## ⚙️ API 配置

### 当前实现

文件：`app/api/contact/route.ts`

```typescript
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. 发送给团队
await resend.emails.send({
  from: 'LivBoss Contact Form <noreply@livboss.com>',
  to: ['hello@livboss.com'],
  replyTo: email, // 用户邮箱
  subject: `New Contact Form Submission from ${name}`,
  react: ContactEmailTemplate({...}),
});

// 2. 自动回复客户
await resend.emails.send({
  from: 'LivBoss <hello@livboss.com>',
  to: [email],
  subject: 'Thank you for contacting LivBoss',
  react: ContactAutoReplyTemplate({name}),
});
```

### 错误处理

- ✅ 团队邮件失败 → 返回 500 错误
- ✅ 自动回复失败 → 记录日志但不影响请求
- ✅ 验证失败 → 返回 400 错误

---

## 📊 Resend 免费额度

- **每月**: 3,000 封邮件
- **每天**: 100 封邮件
- **适合**: 中小型网站起步

升级计划：
- **Pro**: $20/月，50,000 封/月
- **Business**: 更多自定义

---

## 🔍 监控和日志

### Resend 控制台

访问 [Resend Logs](https://resend.com/logs) 查看：
- 所有发送的邮件
- 发送状态（delivered, bounced, failed）
- 打开率和点击率
- 错误详情

### Cloudflare Pages 日志

检查函数日志：
```
Cloudflare Pages → Functions → Logs
```

---

## 🛠️ 故障排查

### 问题：邮件未发送

**检查项：**
1. ✅ API Key 是否正确配置
2. ✅ 域名是否已验证
3. ✅ DNS 记录是否生效
4. ✅ 是否超出每日限额
5. ✅ 查看 Resend 控制台错误日志

### 问题：邮件进入垃圾箱

**解决方案：**
1. 确保 SPF、DKIM、DMARC 记录正确
2. 使用已验证的域名
3. 避免垃圾邮件关键词
4. 提供退订链接（如果发送营销邮件）

### 问题：自动回复未收到

**检查：**
1. 客户邮箱是否有效
2. 检查客户垃圾箱
3. Resend 日志中的发送状态
4. 代码中自动回复是否被禁用

---

## 📝 下一步优化

### 可选功能

- [ ] 添加邮件队列（处理大量提交）
- [ ] 多语言邮件模板
- [ ] 邮件追踪（打开率、点击率）
- [ ] 附件支持
- [ ] Newsletter 订阅功能
- [ ] 自定义邮件模板编辑器

### 安全增强

- [ ] 添加速率限制（防止滥用）
- [ ] 验证码（reCAPTCHA）
- [ ] IP 黑名单
- [ ] 内容过滤

---

## 📞 支持

**Resend 文档**: https://resend.com/docs  
**Resend 状态**: https://status.resend.com  
**Resend 支持**: support@resend.com

**LivBoss 技术支持**: hello@livboss.com

---

**最后更新**: 2025-12-08  
**版本**: 1.0.0
