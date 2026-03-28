<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Giscus from '@giscus/vue'
import { giscus, isGiscusConfigured } from '../giscus'

const { isDark } = useData()
const route = useRoute()

const theme = computed(() => (isDark.value ? 'dark' : 'light'))
const show = computed(() => isGiscusConfigured())
</script>

<template>
  <div v-if="show" class="giscus-wrap">
    <ClientOnly>
      <Giscus
        :key="route.path"
        id="comments"
        :repo="giscus.repo"
        :repo-id="giscus.repoId"
        :category="giscus.category"
        :category-id="giscus.categoryId"
        mapping="pathname"
        strict="1"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        :theme="theme"
        lang="zh-CN"
        loading="lazy"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>
.giscus-wrap {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
