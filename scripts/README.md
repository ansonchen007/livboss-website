# 白皮书 PDF 生成指南
# Whitepaper PDF Generation Guide

## 概述 / Overview

本目录包含用于将 Markdown 白皮书转换为 PDF 的脚本和样式文件。

This directory contains scripts and styles for converting the markdown whitepaper to PDF.

## 文件说明 / Files

- `generate-whitepaper-pdf.js` - PDF 生成脚本 / PDF generation script
- `whitepaper-pdf-styles.css` - PDF 样式定义 / PDF styling definitions

## 如何生成 PDF / How to Generate PDF

### 方法 1：使用 npm 脚本（推荐）

```bash
npm run generate-pdf
```

### 方法 2：直接运行脚本

```bash
node scripts/generate-whitepaper-pdf.js
```

## 输出位置 / Output Location

生成的 PDF 文件将保存在：
The generated PDF will be saved to:

```
public/docs/livboss-broccoli-liver-whitepaper.pdf
```

此路径可通过以下 URL 访问：
This path is accessible via the following URL:

```
https://www.livboss.com/docs/livboss-broccoli-liver-whitepaper.pdf
```

或在本地开发环境：
Or in local development:

```
http://localhost:3000/docs/livboss-broccoli-liver-whitepaper.pdf
```

## 自定义样式 / Customizing Styles

如需修改 PDF 外观，请编辑 `whitepaper-pdf-styles.css` 文件。

To customize the PDF appearance, edit the `whitepaper-pdf-styles.css` file.

### 当前样式特点 / Current Style Features

- **纸张大小 / Paper Size**: A4
- **页边距 / Margins**: 2cm
- **品牌色 / Brand Colors**: 
  - 主色 / Primary: #D97706 (LivBoss Orange)
  - 深色 / Dark: #92400E
- **字体 / Fonts**: Segoe UI, Arial, Microsoft YaHei
- **字号 / Font Sizes**: 
  - 正文 / Body: 11pt
  - 标题 / Headings: 12pt-28pt

## 更新白皮书 / Updating the Whitepaper

1. 编辑 Markdown 源文件：
   Edit the markdown source file:
   ```
   docs/livboss-broccoli-liver-whitepaper.md
   ```

2. 重新生成 PDF：
   Regenerate the PDF:
   ```bash
   npm run generate-pdf
   ```

3. 生成的 PDF 会自动覆盖旧文件
   The generated PDF will automatically replace the old file

## 依赖项 / Dependencies

- `markdown-pdf` - Markdown 到 PDF 转换工具 / Markdown to PDF converter
- PhantomJS (自动安装) / PhantomJS (installed automatically)

## 故障排除 / Troubleshooting

### 问题：PDF 生成失败
**Problem: PDF generation fails**

解决方案：
Solutions:

1. 确保已安装所有依赖：
   Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. 检查 Markdown 文件是否存在：
   Check if the markdown file exists:
   ```bash
   ls docs/livboss-broccoli-liver-whitepaper.md
   ```

3. 确保有写入权限：
   Ensure write permissions:
   ```bash
   ls -la public/docs/
   ```

### 问题：样式未应用
**Problem: Styles not applied**

检查 CSS 文件路径是否正确：
Check if CSS file path is correct:
```bash
ls scripts/whitepaper-pdf-styles.css
```

## 高级选项 / Advanced Options

### 更改纸张大小 / Change Paper Size

在 `generate-whitepaper-pdf.js` 中修改：
Modify in `generate-whitepaper-pdf.js`:

```javascript
const options = {
  paperFormat: 'Letter', // 或 'A4', 'Legal', etc.
  paperBorder: '2cm',
};
```

### 添加页眉页脚 / Add Headers/Footers

在配置中添加：
Add to configuration:

```javascript
const options = {
  // ... existing options
  runningsPath: path.join(__dirname, 'pdf-running-elements.js'),
};
```

## 注意事项 / Notes

- PDF 生成使用 PhantomJS，这是一个较旧但稳定的无头浏览器
- 中英文混排已优化，确保正确显示
- 文件大小约为 290KB（取决于内容长度）
- 生成时间通常 < 5 秒

---

**LivBoss 肝动力** | 守护现代人的肝脏健康 🧡
