import { defineConfig } from 'vitepress'

/**
 * 若 GitHub 仓库名为其他名称，请同步修改 base（项目站路径为 /<repo>/）。
 * 用户站 username.github.io 根目录部署时使用 base: '/'。
 */
export default defineConfig({
  title: 'AI 面试题笔记',
  description: 'NLP、大模型、机器学习等知识点与面试题参考答案要点',
  lang: 'zh-CN',

  base: '/ai-interview-note/',

  /** Vite 默认 root 为 docs，env 仅从 docs/ 加载；指向仓库根目录以读取 .env / .env.local */
  vite: {
    envDir: '..',
  },

  markdown: {
    math: true,
  },

  themeConfig: {
    /** 页内 # 为文档标题；大纲展示 ## 分区与 ### 单题 */
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    search: {
      provider: 'local',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python' },
      { text: '机器学习', link: '/machine-learning' },
      { text: '深度学习', link: '/deep-learning' },
      { text: '大模型/NLP', link: '/llm/' },
      { text: '方案设计', link: '/design' },
      { text: '库与工具', link: '/tooling' },
    ],

    sidebar: [
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python' },
      { text: '机器学习', link: '/machine-learning' },
      { text: '深度学习', link: '/deep-learning' },
      {
        text: '大模型/NLP',
        collapsed: false,
        items: [
          { text: '概览', link: '/llm/' },
          { text: '语言模型基础', link: '/llm/basics' },
          { text: 'Tokenizer', link: '/llm/tokenizer' },
          { text: '大模型原理', link: '/llm/principles' },
          { text: '大模型使用', link: '/llm/usage' },
          { text: '大模型微调', link: '/llm/finetune' },
          { text: '推理与部署', link: '/llm/inference' },
          { text: 'VLM', link: '/llm/vlm' },
          { text: 'RAG', link: '/llm/rag' },
          { text: '智能体', link: '/llm/agent' },
          { text: '模型相关', link: '/llm/model-qa' },
        ],
      },
      { text: '方案设计', link: '/design' },
      { text: '库/工具/中间件', link: '/tooling' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xbsheng/ai-interview-note' },
    ],

    /** 文档页底部「在 GitHub 上编辑」链接，:path 为相对 docs 的 md 路径 */
    editLink: {
      pattern:
        'https://github.com/xbsheng/ai-interview-note/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '仅供学习交流，题目与答案要点请结合业务与最新论文核对。',
    },
  },
})
