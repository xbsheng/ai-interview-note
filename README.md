# AI 面试题笔记

**源码仓库：** [github.com/xbsheng/ai-interview-note](https://github.com/xbsheng/ai-interview-note)

基于 [VitePress](https://vitepress.dev/) 整理的 **NLP、大模型、机器学习、深度学习、Python、方案设计与工具链** 等知识点与面试题参考答案要点，站点为中文、支持数学公式（MathJax）与本地全文搜索。

## 环境要求

- [Node.js](https://nodejs.org/)（建议 20 LTS）
- [pnpm](https://pnpm.io/) 9.x（与 `package.json` 中 `packageManager` 字段一致）

## 本地开发

```bash
pnpm install
pnpm dev
```

默认在浏览器打开本地预览地址（终端会打印具体 URL）。

## 构建与预览

```bash
pnpm build
pnpm preview
```

构建产物输出到 `docs/.vitepress/dist/`。

## 部署说明

仓库含 GitHub Actions 工作流（`.github/workflows/deploy-pages.yml`），在 `main` 分支推送时可构建并部署到 **GitHub Pages**。使用前请在仓库设置中启用 Pages，并确保工作流中的构建命令与 `package.json` 里的脚本名称一致（当前本地构建脚本为 `pnpm build`）。

站点 `base` 在 `docs/.vitepress/config.mts` 中配置为 `/ai-interview-note/`。若仓库名或部署路径不同，请同步修改 `base`（例如部署到用户站根目录时可设为 `'/'`）。

## 文档结构

| 路径                         | 说明                               |
| ---------------------------- | ---------------------------------- |
| `docs/index.md`              | 首页与推荐资料、面试题星级说明     |
| `docs/python.md` 等          | 各主题 Markdown 源文件             |
| `docs/llm/`                  | 大模型 / NLP 子章节                |
| `docs/.vitepress/config.mts` | 站点标题、导航、侧边栏、搜索等配置 |

面试题在源文件中使用 **⭐** 标记重要程度（三星 / 二星 / 一星），生成页会按分区与徽标展示。

## 许可与声明

内容仅供学习交流；题目与答案要点请结合业务场景与最新资料自行核对。
