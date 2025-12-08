# ⚡ Resend 邮件服务 - 5分钟快速配置

## 📋 配置清单

### ✅ 第一步：获取 Resend API Key（2分钟）

1. 访问 https://resend.com 并注册/登录
2. 前往 https://resend.com/api-keys
3. 点击 "Create API Key"
4. 命名：`LivBoss Production`
5. 复制生成的 Key（格式：`re_xxxxxxxxx`）

### ✅ 第二步：配置 Cloudflare Pages（1分钟）

1. 登录 Cloudflare Dashboard
2. 选择你的 Pages 项目（livboss-website）
3. 进入 **Settings** → **Environment variables**
4. 点击 **Add variable**
5. 配置：
   ```
   Variable name: RESEND_API_KEY
   Value: [粘贴你的 API Key]
   Environment: Production (勾选)
   ```
6. 点击 **Save**

### ✅ 第三步：验证域名（2分钟设置 + 等待生效）

#### 在 Resend 添加域名

1. 前往 https://resend.com/domains
2. 点击 **Add Domain**
3. 输入：`livboss.com`
4. 点击 **Add**

#### 获取 DNS 记录

Resend 会显示需要添加的 DNS 记录，类似：

```
SPF Record:
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

DKIM Record:
Type: TXT  
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GN... [长字符串]

MX Record (可选):
Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
```

#### 在你的域名服务商添加 DNS 记录

**如果使用 Cloudflare DNS：**

1. Cloudflare Dashboard → 选择域名 `livboss.com`
2. 点击 **DNS** → **Records**
3. 添加以下记录：

**TXT 记录 #1 (SPF):**
```
Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all
TTL: Auto
```

**TXT 记录 #2 (DKIM):**
```
Type: TXT
Name: resend._domainkey
Content: [从 Resend 复制的完整值]
TTL: Auto
```

**MX 记录（可选但推荐）:**
```
Type: MX
Name: @
Content: feedback-smtp.us-east-1.amazonses.com
Priority: 10
TTL: Auto
```

4. 点击 **Save** 保存每条记录

#### 等待验证

- DNS 生效时间：1-24 小时（通常 10-30 分钟）
- 返回 Resend 控制台查看验证状态
- 状态变为 **Verified** ✅ 即可使用

---

## 🧪 测试邮件功能

### 方法一：使用网站联系表单

1. 访问 https://www.livboss.com/contact
2. 填写表单并提交
3. 检查：
   - ✅ hello@livboss.com 收到团队通知
   - ✅ 你的测试邮箱收到自动回复

### 方法二：使用 Resend 测试工具

1. 前往 https://resend.com/emails
2. 点击 **Send test email**
3. 选择验证的域名
4. 发送测试邮件

---

## 📊 监控邮件

### Resend 控制台

访问 https://resend.com/emails 查看：
- ✅ 所有发送的邮件
- ✅ 发送状态（delivered/failed）
- ✅ 打开率和点击率
- ✅ 错误日志

### Cloudflare Pages 日志

1. Cloudflare Dashboard → Pages
2. 选择项目 → **Functions**
3. 查看 **Logs** 标签
4. 搜索 `/api/contact` 查看邮件 API 调用

---

## ⚠️ 重要提醒

### 域名验证前

在域名验证完成前，你可以：
- ✅ 使用 Resend 的测试邮箱（onboarding@resend.dev）
- ❌ 无法从 `@livboss.com` 发送邮件

### 域名验证后

验证成功后，可以使用：
- ✅ `noreply@livboss.com`
- ✅ `hello@livboss.com`
- ✅ 任何 `*@livboss.com` 地址

### 免费额度

- **每月**: 3,000 封邮件
- **每天**: 100 封邮件
- 足够中小型网站使用

---

## 🔧 故障排查

### 问题 1: 邮件未发送

**检查：**
1. Cloudflare Pages 环境变量是否配置
2. Resend API Key 是否正确
3. 域名是否已验证
4. 查看 Cloudflare Functions 日志

### 问题 2: 邮件进入垃圾箱

**解决：**
1. 确保 SPF 和 DKIM 记录已添加且验证成功
2. 等待 DNS 完全生效
3. 检查 Resend 域名验证状态

### 问题 3: 收不到自动回复

**检查：**
1. 检查你的垃圾邮件文件夹
2. 在 Resend 控制台查看邮件状态
3. 确认客户邮箱地址正确

---

## 📞 需要帮助？

- **Resend 文档**: https://resend.com/docs
- **Resend 支持**: support@resend.com
- **Resend 状态**: https://status.resend.com

---

## ✅ 配置完成确认

完成以下步骤后，邮件服务即可正常工作：

- [ ] Resend 账号已创建
- [ ] API Key 已生成
- [ ] Cloudflare Pages 环境变量已配置
- [ ] livboss.com 域名已添加到 Resend
- [ ] DNS 记录已添加（SPF + DKIM）
- [ ] 域名验证状态为 **Verified**
- [ ] 测试邮件发送成功

🎉 **恭喜！邮件服务集成完成！**

---

**预计总时间**: 5-10 分钟（设置）+ 等待 DNS 生效  
**难度**: ⭐⭐ 简单  
**最后更新**: 2025-12-08
