# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## 项目说明

这是 `image-generation`，一个基于 Next.js App Router 的图片生成 Web 应用。当前工程主要包含入口页、画布页、shadcn UI 基础组件，以及 AI SDK 相关依赖。

## 技术栈

- **前端框架**: Next.js 16.2.4 + React 19.2.4
- **路由方案**: Next.js App Router，页面位于 `src/app`
- **语言**: TypeScript
- **样式**: Tailwind CSS v4 + `tw-animate-css`
- **UI 组件**: shadcn + Radix UI + lucide-react
- **AI 相关**: `ai`、`@ai-sdk/react`、`@ai-sdk/deepseek`
- **工具函数**: `clsx` + `tailwind-merge`，统一通过 `src/lib/utils.ts` 的 `cn` 合并 className

## 常用命令

```bash
# 开发环境启动，端口 8000
npm run dev

# 生产构建
npm run build

# 生产服务启动，端口 8000
npm run start

# ESLint 检查
npm run lint

# 添加 shadcn 组件
npx shadcn@latest add <component>
```

> 注意：当前仓库同时存在 `package-lock.json` 和 `pnpm-lock.yaml`。修改依赖前先确认包管理器，不要擅自切换或混用。

## 目录结构

```text
image-generation/
├── src/
│   ├── app/                 # Next.js App Router 页面、布局和全局样式
│   │   ├── (web)/           # Web 页面分组
│   │   │   ├── canvas/      # 画布页
│   │   │   └── entrance/    # 入口页
│   │   ├── globals.css      # Tailwind、shadcn 变量和全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 根路径重定向入口
│   ├── components/
│   │   └── ui/              # shadcn UI 组件
│   ├── constant/            # 常量定义
│   └── lib/                 # 通用工具函数
├── public/                  # 静态资源
├── components.json          # shadcn 配置
├── next.config.ts           # Next.js 配置
└── tsconfig.json            # TypeScript 配置
```

## 代码规范

- 始终使用 TypeScript 和函数式组件。
- 页面组件遵循 App Router 约定，使用 `page.tsx`、`layout.tsx` 等文件名。
- 共享 UI 组件优先放在 `src/components/ui`，并优先通过 shadcn CLI 生成。
- Tailwind className 合并统一使用 `cn`，不要重复实现 className 拼接工具。
- 图标优先使用 `lucide-react`，不要手写已有图标。
- 文档始终使用中文，编码为 UTF-8。
- 代码注释保持简洁，只在必要时解释复杂逻辑。

## UI 开发约定

- 新增基础控件时优先使用 shadcn 组件，避免从零手写通用 UI。
- 页面样式应遵循已有 Tailwind 与 shadcn 变量，不要引入新的 UI 框架。
- 组件应保持职责单一，避免过度封装和过度设计。
- 对交互组件补齐基础可访问性属性，例如 `aria-label`。

## 验证要求

- 修改代码后至少运行：

```bash
npm run lint
npm run build
```

- 修改页面或组件后，尽量启动本地服务并访问对应页面验证：

```bash
npm run dev
```

## 注意事项（重要！）

1. **按照命令行事**：注意任务边界，不做命令以外的工作，禁止自作主张扩大范围。
2. **注意澄清**：对需求、接口、业务含义或包管理器选择有疑问时，先询问用户，不要猜测。
3. **计划第一**：动手前先理解工程和现有实现，必要时先形成简短计划或大纲。
4. **复用优先**：优先复用现有组件、工具函数、目录结构和 shadcn 组件。
5. **主动验证**：修改完成后主动运行 lint、build 或对应页面验证，不跳过检查。
6. **保护现有改动**：工作区可能存在用户未提交改动，不要回滚、覆盖或整理无关文件。
7. **谨慎处理敏感信息**：不要新增明文密钥、令牌或私密配置；发现疑似敏感信息时先提示用户确认处理方式。
