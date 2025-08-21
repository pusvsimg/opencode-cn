

# opencode 命令行工具入门指南

## 目录

1. [简介：什么是 opencode？](#简介)
2. [安装与配置](#安装与配置)
   - [安装（覆盖 Windows、macOS、Linux）](#安装)
   - [配置 API 密钥和提供商](#配置-api-密钥)
3. [快速上手](#快速上手)
   - [启动会话](#启动会话)
   - [初始化项目 (/init)](#初始化项目)
   - [你的第一个请求](#第一个请求)
4. [核心命令详解](#核心命令)
   - [核心操作命令](#核心操作命令)
   - [模型与配置命令](#模型与配置命令)
   - [上下文管理命令](#上下文管理命令)
   - [其他实用命令](#其他实用命令)
5. [进阶技巧与最佳实践](#进阶技巧)
   - [模式与代理（Modes & Agents）](#模式与代理)
   - [上下文优化](#上下文优化)
   - [集成工具与自定义](#集成工具)
6. [VS Code 集成](#vscode-集成)
7. [故障排除与常见问题](#故障排除)
8. [更新日志](#更新日志)

## 简介：什么是 opencode？ {#简介}

opencode 是一个强大的 AI 编程代理工具，专为终端构建。它是一个基于 Go 的 CLI 应用程序，将 AI 助手带入您的终端。它提供了一个 TUI（终端用户界面），用于与各种 AI 模型交互，帮助处理编码任务、调试等工作。

### 主要特性

- **交互式 TUI**：使用 Bubble Tea 构建，提供流畅的终端体验
- **多 AI 提供商支持**：支持 OpenAI、Anthropic Claude、Google Gemini、AWS Bedrock、Groq、Azure OpenAI 和 OpenRouter
- **会话管理**：保存和管理多个对话会话
- **工具集成**：AI 可以执行命令、搜索文件和修改代码
- **类 Vim 编辑器**：具有文本输入功能的集成编辑器
- **持久存储**：使用 SQLite 数据库存储对话和会话
- **LSP 集成**：语言服务器协议支持，提供代码智能

### 与其他工具的对比

opencode 在功能上与 Claude Code 非常相似。主要区别在于：
- **不耦合于任何提供商**：虽然推荐使用 Anthropic，但 opencode 可以与 OpenAI、Google 甚至本地模型一起使用。随着模型的发展，它们之间的差距将缩小，价格也会下降，因此与提供商无关很重要。
- **专注于 TUI**：opencode 由 neovim 用户和 terminal.shop 的创建者构建；我们将推动终端可能性的极限。
- **客户端/服务器架构**：例如，这可以让 opencode 在您的计算机上运行，而您可以从移动应用程序远程驱动它。这意味着 TUI 前端只是可能的客户端之一。

## 安装与配置 {#安装与配置}

### 安装（覆盖 Windows、macOS、Linux）{#安装}

在安装前，请删除 0.1.x 之前的旧版本。

#### 通用安装脚本（macOS/Linux 推荐）

```bash
# 快速安装
curl -fsSL https://opencode.ai/install | bash
```

安装脚本遵循以下优先级顺序来确定安装路径：
- `$OPENCODE_INSTALL_DIR` - 自定义安装目录
- `$XDG_BIN_DIR` - 符合 XDG 基本目录规范的路径
- `$HOME/bin` - 标准用户二进制目录（如果存在或可以创建）

自定义安装示例：
```bash
# 自定义安装目录
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash

# 使用 XDG 标准
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

#### 通过 Node.js（所有平台）

```bash
npm install -g opencode-ai@latest
# 或使用 bun/pnpm/yarn
```

#### Homebrew（macOS/Linux）

```bash
brew install sst/tap/opencode
```

#### Arch Linux

```bash
paru -S opencode-bin
```

#### Windows 专用

目前自动安装方法在 Windows 上无法正常工作。但是，您可以从 Releases 获取二进制文件。

1. 访问 [GitHub Releases](https://github.com/sst/opencode/releases)
2. 下载适用于 Windows 的最新二进制文件
3. 解压文件并将 `opencode.exe` 添加到 PATH 环境变量

验证安装：
```bash
opencode --version
```

### 配置 API 密钥和提供商 {#配置-api-密钥}

使用 opencode，您可以通过配置 API 密钥来使用任何 LLM 提供商。我们建议注册 Claude Pro 或 Max，这是使用 opencode 最具成本效益的方式。注册后，运行 `opencode auth login` 并选择 Anthropic。

#### 推荐方式：内置授权

```bash
opencode auth login
```

opencode 由 Models.dev 的提供商列表驱动，因此您可以使用 opencode auth login 来配置众多提供商。

#### 手动设置环境变量（备选）

对于 OpenAI：
```bash
# macOS/Linux
export OPENAI_API_KEY="sk-xxx"

# Windows
setx OPENAI_API_KEY "sk-xxx"
```

## 快速上手 {#快速上手}

### 启动会话 {#启动会话}

配置好提供商后，您可以导航到要处理的项目。运行 opencode。

```bash
cd /path/to/your/project
opencode
```

### 初始化项目 (/init) {#初始化项目}

接下来，通过运行以下命令为项目初始化 opencode。这将让 opencode 分析您的项目并在项目根目录创建一个 AGENTS.md 文件。

```bash
/init
```

您应该将项目的 AGENTS.md 文件提交到 Git。这有助于 opencode 理解项目结构和使用的编码模式。

### 你的第一个请求 {#第一个请求}

使用自然语言输入需求：

```
在我的 Express 应用中添加一个 /health 端点，返回 { status: "ok" }
```

opencode 会：
1. 分析相关文件
2. 显示建议的更改（diff 格式）
3. 等待您的确认（输入 `y` 应用，`n` 取消）

## 核心命令详解 {#核心命令}

### 核心操作命令 {#核心操作命令}

- **`/init`**：创建新的 AGENTS.md 文件
- **`/undo`**：撤销更改。从这里您可以调整提示并要求 opencode 重试。
- **`/redo`**：重做更改
- **`/share`**：创建当前对话的链接并将其复制到剪贴板
- **`/exit`**：退出会话

### 模型与配置命令 {#模型与配置命令}

- **`/models`**：显示所有已配置提供商中可用的模型，格式为 provider/model
- **`/config`**：调整设置

### 上下文管理命令 {#上下文管理命令}

- **`@`**：使用 @ 键对项目中的文件进行模糊搜索
- **文件拖放**：将图像拖放到终端中以将其添加到提示中。opencode 可以扫描您提供的任何图像并将其添加到提示中。

### 其他实用命令 {#其他实用命令}

- **`/help`**：显示所有可用命令
- **`opencode auth login`**：配置提供商认证
- **`opencode agents new`**：创建新代理

## 进阶技巧与最佳实践 {#进阶技巧}

### 模式与代理（Modes & Agents）{#模式与代理}

opencode 带有两个内置模式：build 和 plan。您可以自定义这些或通过 opencode 配置配置自己的模式。您可以在会话期间切换模式或在配置文件中配置它们。

#### Build 模式
Build 是启用所有工具的默认模式。这是需要完全访问文件操作和系统命令的开发工作的标准模式。

#### Plan 模式
一个为规划和分析设计的受限模式。在 plan 模式下，某些工具默认被禁用。当您希望 AI 分析代码、建议更改或创建计划而不对代码库进行任何实际修改时，此模式很有用。

您可以在会话期间使用 Tab 键在模式之间切换。或者使用您配置的 switch_mode 键绑定。

### 上下文优化 {#上下文优化}

#### AGENTS.md 文件的使用

AGENTS.md 包含将包含在 LLM 上下文中的指令，以自定义其对特定项目的行为。您应该将项目的 AGENTS.md 文件提交到 Git。

#### 全局与项目规则

放置在项目根目录的 AGENTS.md 是特定于项目的规则。这些仅在您在此目录或其子目录中工作时适用。您还可以在 ~/.config/opencode/AGENTS.md 文件中拥有全局规则。这适用于所有 opencode 会话。由于这不会提交到 Git 或与您的团队共享，我们建议使用它来指定 LLM 应遵循的任何个人规则。

### 集成工具与自定义 {#集成工具}

#### 自定义命令

OpenCode 支持用户创建的自定义命令，可以快速向 AI 助手发送预定义的提示。自定义命令是存储为 Markdown 文件的预定义提示。

创建自定义命令：
1. 在 `~/.config/opencode/commands/` 创建 `.md` 文件
2. 文件名（不含扩展名）成为命令 ID
3. 文件内容将作为消息发送给 AI

#### 配置文件

您可以使用 JSON 配置文件配置 opencode。opencode 支持 JSON 和 JSONC（带注释的 JSON）格式。您可以将配置放在几个不同的位置，它们具有不同的优先级顺序。

配置文件位置：
- 全局配置：`~/.config/opencode/opencode.json`
- 项目配置：项目根目录的 `opencode.json`

## VS Code 集成 {#vscode-集成}

opencode 提供 VS Code 扩展，实现无缝集成：

1. 在 VS Code 扩展市场搜索 "opencode" 并安装
2. 确保系统已安装 opencode CLI
3. 使用快捷键：
   - `Ctrl+Esc`：分屏打开/切换 opencode
   - `Ctrl+Shift+Esc`：新会话

## 故障排除与常见问题 {#故障排除}

### 常见问题解决

1. **API 密钥无效**
   - 运行 `opencode auth login` 重新配置
   - 检查提供商配额和余额

2. **Windows 安装问题**
   - 自动安装方法在 Windows 上不能正常工作
   - 手动从 GitHub Releases 下载二进制文件

3. **上下文丢失**
   - 运行 `/init` 重建 AGENTS.md
   - 检查文件权限

4. **性能问题**
   - 切换到更快的模型（使用 `/models`）
   - 减少上下文文件数量
   - 考虑使用 Plan 模式进行分析

### 调试模式

```bash
# 启用调试输出
opencode --debug

# 非交互模式（用于脚本）
opencode -p "你的提示" -q
```

## 更新日志 {#更新日志}

### 最新功能（2025年8月）

- 支持通过 Models.dev 支持 75+ LLM 提供商，包括本地模型
- 多会话：在同一项目上并行启动多个代理。可共享链接：共享任何会话的链接以供参考或调试
- 改进的 Windows 兼容性
- 增强的 LSP 集成
- 自定义命令支持
- MCP（Model Context Protocol）集成

### 保持更新

```bash
# 检查版本
opencode --version

# 更新到最新版本（如果通过 npm 安装）
npm update -g opencode-ai@latest
```

---

## 总结

opencode 是一个强大的终端原生 AI 编程助手，它将 AI 的力量直接带入您的开发环境。通过本指南，您已经学会了：

- 安装和配置 opencode
- 使用核心命令进行日常开发
- 优化上下文和使用高级功能
- 解决常见问题

开始使用 opencode，体验 AI 驱动的终端编程新方式！

访问 [官方文档](https://opencode.ai/docs/) 和 [GitHub 仓库](https://github.com/sst/opencode) 获取更多信息和最新更新。