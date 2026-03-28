/**
 * Giscus（GitHub Discussions 评论）配置。
 *
 * 1. 在仓库 Settings → General → Features 中开启 Discussions。
 * 2. 新建一个 Discussion 分类（如「Announcements」或自建「Comments」），用于存放评论。
 * 3. 打开 https://giscus.app/zh-CN ，填入仓库与分类，复制页面生成的 repo-id、category-id，
 *    填到下方或改用环境变量 VITE_GISCUS_REPO_ID / VITE_GISCUS_CATEGORY_ID（构建时注入）。
 */
export const giscus = {
  repo: 'xbsheng/ai-interview-note' as const,
  repoId: import.meta.env.VITE_GISCUS_REPO_ID ?? '',
  category: 'Comments',
  categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID ?? '',
} as const

export function isGiscusConfigured(): boolean {
  console.log('xbs', '03-28-10-58-22', giscus.repoId, import.meta.env)
  return Boolean(giscus.repoId && giscus.categoryId)
}
