# OpenCode 教程网站

![OpenCode Logo](https://img.shields.io/badge/OpenCode-AI%20编程助手-blue?style=for-the-badge&logo=terminal)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-部署就绪-brightgreen?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

这是一个基于 OpenCode 官方文档创建的静态教程网站，专为中文用户设计。OpenCode 是一个强大的 AI 编程代理工具，专为终端构建，提供与各种 AI 模型交互的 TUI（终端用户界面）。

## 🌟 项目亮点

- 📚 **完整的中文教程** - 基于官方文档完整翻译和整理
- 🎯 **用户友好** - 针对中文开发者优化的界面和内容组织
- 🚀 **开箱即用** - 静态网站，部署简单，访问快速
- 🔄 **持续更新** - 跟随 OpenCode 官方文档更新

## 📋 功能特性

### 🎨 用户界面
- 📱 **响应式设计** - 完美适配桌面、平板和手机
- 🎨 **现代化界面** - 专业的视觉设计和用户体验
- 🌙 **优雅主题** - 精心设计的配色方案和排版

### 🔧 交互功能
- 🔍 **智能搜索** - 目录搜索功能，快速定位内容
- 📋 **代码复制** - 一键复制代码块，支持语法高亮
- 🚀 **快速导航** - 固定导航栏和返回顶部按钮
- 📊 **阅读进度** - 顶部进度条显示阅读进度

### ⌨️ 键盘支持
- `ESC` - 关闭移动端导航菜单
- `/` - 快速聚焦搜索框
- 平滑滚动到锚点链接

## 🌐 在线访问

网站部署在 GitHub Pages 上，可以通过以下链接访问：

**示例地址：** `https://[你的用户名].github.io/[仓库名]/`

> 💡 **提示：** 部署后，将上面的占位符替换为实际的用户名和仓库名

## 🚀 快速开始

### 方法一：GitHub 模板（推荐）

1. 点击 "Use this template" 按钮创建你的仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 GitHub Actions 作为部署源
4. 网站将自动构建和部署

### 方法二：克隆仓库
```bash
git clone [仓库地址]
cd [仓库名]
```

## 💻 本地开发

### 环境要求

- 任何现代 Web 浏览器
- HTTP 服务器（可选，推荐用于开发）

### 运行方式

#### 🐍 使用 Python

```bash
# Python 3
python -m http.server 8000

# Python 2  
python -m SimpleHTTPServer 8000
```

#### 📦 使用 Node.js

```bash
# 全局安装
npm install -g http-server
http-server

# 或使用 npx（推荐）
npx http-server
```

#### 🔧 使用其他工具

**PHP 内置服务器：**
```bash
php -S localhost:8000
```

**VS Code Live Server 扩展：**
1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

**直接打开：**
- 双击 `index.html` 文件
- 注意：某些功能可能在 file:// 协议下无法正常工作

### 访问网站

在浏览器中打开：`http://localhost:8000`

## 📁 项目结构

```
opencode-tutorial-site/
├── 📄 index.html              # 主页面文件
├── 🎨 styles.css              # 样式表
├── ⚡ script.js               # JavaScript 功能
├── 📋 opencode.md             # 原始 Markdown 文档
├── 📖 README.md               # 项目说明文档
├── ⚙️ _config.yml             # GitHub Pages 配置
├── 🧪 test.html               # 测试页面（可选）
└── 📁 .github/
    └── 📁 workflows/
        └── 🚀 pages.yml       # GitHub Actions 自动部署
```

## 🚀 部署指南

### GitHub Pages 自动部署

1. **创建仓库**
   ```bash
   git init
   git add .
   git commit -m "🎉 初始化 OpenCode 教程网站"
   git branch -M main
   git remote add origin https://github.com/[用户名]/[仓库名].git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库设置页面
   - 滚动到 "Pages" 部分
   - Source 选择 "GitHub Actions"
   - 保存设置

3. **等待部署**
   - GitHub Actions 将自动构建和部署
   - 完成后可通过 `https://[用户名].github.io/[仓库名]/` 访问

### 其他部署平台

#### Netlify
1. 连接 GitHub 仓库
2. 构建设置保持默认
3. 点击部署

#### Vercel
1. 导入 GitHub 仓库
2. 框架预设选择 "Other"
3. 保持默认设置并部署

#### GitHub Codespaces
```bash
# 在 Codespace 中运行
python3 -m http.server 8000
```

## ⚙️ 自定义配置

### 🎨 主题自定义

#### 修改网站标题和描述

编辑 `index.html` 文件：

```html
<!-- 页面标题 -->
<title>你的标题</title>

<!-- SEO 元信息 -->
<meta name="description" content="你的描述">
<meta name="keywords" content="opencode, AI, 编程, 教程">

<!-- 英雄区域标题 -->
<h1>你的网站标题</h1>
<p class="hero-subtitle">你的副标题</p>
```

#### 自定义颜色主题

在 `styles.css` 中修改 CSS 变量：

```css
:root {
  --primary-color: #3498db;      /* 主色调 */
  --secondary-color: #2c3e50;    /* 次要色调 */
  --accent-color: #e74c3c;       /* 强调色 */
  --text-color: #333;            /* 文字颜色 */
  --bg-color: #fff;              /* 背景色 */
  --border-color: #e9ecef;       /* 边框色 */
}
```

#### 修改字体设置

```css
body {
  font-family: 'Source Han Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

### 🔧 功能配置

#### 自定义导航菜单

编辑 `index.html` 中的导航部分：

```html
<div class="nav-menu" id="nav-menu">
    <a href="#section1" class="nav-link">新章节1</a>
    <a href="#section2" class="nav-link">新章节2</a>
    <!-- 添加更多导航项 -->
</div>
```

#### 添加新内容章节

```html
<section id="新章节" class="section">
    <h2>章节标题</h2>
    <p>章节内容...</p>
</section>
```

#### 修改代码高亮主题

更换 Prism.js 主题（在 `index.html` 中）：

```html
<!-- 可选主题 -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-twilight.min.css" rel="stylesheet">
```

### 📱 响应式断点

自定义移动端适配：

```css
/* 平板 */
@media (max-width: 768px) {
  /* 样式调整 */
}

/* 手机 */
@media (max-width: 480px) {
  /* 样式调整 */
}

/* 大屏幕 */
@media (min-width: 1200px) {
  /* 样式调整 */
}
```

## 📊 SEO 优化

### Meta 标签配置

```html
<!-- 基础 SEO -->
<meta name="description" content="OpenCode 中文教程 - 完整的 AI 编程助手使用指南">
<meta name="keywords" content="OpenCode, AI编程, 终端工具, 人工智能, 编程助手">
<meta name="author" content="你的名字">

<!-- Open Graph (社交媒体分享) -->
<meta property="og:title" content="OpenCode 教程网站">
<meta property="og:description" content="完整的 OpenCode 使用教程">
<meta property="og:image" content="https://your-site.com/preview-image.jpg">
<meta property="og:url" content="https://your-site.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OpenCode 教程网站">
<meta name="twitter:description" content="完整的 OpenCode 使用教程">
```

### 网站地图和机器人文件

创建 `sitemap.xml`：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-site.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

创建 `robots.txt`：

```txt
User-agent: *
Allow: /
Sitemap: https://your-site.com/sitemap.xml
```

## 🔍 分析和监控

### Google Analytics 集成

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 性能监控

添加 Web Vitals 监控：

```javascript
// 在 script.js 中添加
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🌍 浏览器支持

| 浏览器 | 版本要求 | 支持状态 |
|--------|----------|----------|
| 🟢 Chrome | 60+ | ✅ 完全支持 |
| 🟠 Firefox | 60+ | ✅ 完全支持 |
| 🔵 Safari | 12+ | ✅ 完全支持 |
| 🟣 Edge | 79+ | ✅ 完全支持 |
| 🔴 IE | - | ❌ 不支持 |

### 功能兼容性

- **ES6+ JavaScript**: 现代浏览器必需
- **CSS Grid & Flexbox**: 布局支持
- **CSS Custom Properties**: 主题变量支持
- **Fetch API**: 数据请求支持

## 🤝 贡献指南

我们欢迎任何形式的贡献！以下是参与项目的方式：

### 🐛 报告问题

1. 查看 [Issues](../../issues) 确认问题未被报告
2. 使用问题模板创建新 Issue
3. 提供详细的重现步骤和环境信息

### 💡 功能建议

1. 在 [Discussions](../../discussions) 中讨论新想法
2. 获得社区反馈后创建 Feature Request
3. 详细描述用例和预期效果

### 🔧 代码贡献

1. **Fork 仓库**
   ```bash
   git clone https://github.com/[你的用户名]/[仓库名].git
   cd [仓库名]
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **提交更改**
   ```bash
   git add .
   git commit -m "✨ 添加惊人的新功能"
   ```

4. **推送分支**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **创建 Pull Request**

### 📝 文档改进

- 修正错别字和语法错误
- 添加更多使用示例
- 改进说明的清晰度
- 翻译成其他语言

### 🎨 设计贡献

- UI/UX 改进建议
- 新的主题设计
- 图标和插图
- 移动端优化

## 📋 开发规范

### 代码风格

```javascript
// JavaScript
const functionName = () => {
  // 使用 2 空格缩进
  // 使用 camelCase 命名
  // 添加适当的注释
};
```

```css
/* CSS */
.class-name {
  /* 使用 2 空格缩进 */
  /* 使用 kebab-case 命名 */
  /* 按逻辑分组属性 */
}
```

### 提交消息规范

使用 [约定式提交](https://www.conventionalcommits.org/) 格式：

```
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

**类型示例：**
- `✨ feat`: 新功能
- `🐛 fix`: 修复问题  
- `📝 docs`: 文档更新
- `💄 style`: 样式更改
- `♻️ refactor`: 重构代码
- `⚡ perf`: 性能优化
- `✅ test`: 测试相关
- `🔧 chore`: 构建/工具相关

## 🆘 获取帮助

### 文档资源

- 📖 [项目 Wiki](../../wiki)
- 💬 [GitHub Discussions](../../discussions)  
- 🔍 [常见问题 FAQ](../../wiki/FAQ)

### 社区支持

- 💬 **GitHub Discussions**: 技术讨论和问答
- 🐛 **Issues**: 问题报告和功能请求
- 📧 **Email**: [维护者邮箱]

### 相关项目

- 🔗 [OpenCode 官方仓库](https://github.com/sst/opencode)
- 📚 [OpenCode 官方文档](https://opencode.ai/docs/)
- 🌐 [OpenCode 官方网站](https://opencode.ai/)

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

```
MIT License

Copyright (c) 2025 OpenCode Tutorial Site

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 致谢

### 特别感谢

- 🙌 **OpenCode 团队** - 提供优秀的开源工具
- 👥 **贡献者们** - 让项目持续改进
- 🌟 **用户社区** - 提供宝贵的反馈和建议

### 使用的开源项目

- [Prism.js](https://prismjs.com/) - 代码语法高亮
- [GitHub Pages](https://pages.github.com/) - 免费静态网站托管
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自动化

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个 Star！**

[🚀 开始使用](../../fork) | [📖 查看文档](../../wiki) | [💬 参与讨论](../../discussions)

**用 ❤️ 制作，为开发者服务**

</div>