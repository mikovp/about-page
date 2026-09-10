<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  items?: string[]
  delay?: string
  type?: 'list' | 'default'
}>(), {
  items: () => [],
  delay: '',
  type: 'default'
})

const cardClass = "rounded-2xl bg-white/40 dark:bg-slate-900/60 backdrop-blur border border-white/10 shadow-sm px-5 pt-1 pb-4 animate-fade-in-up transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300 hover:bg-white/90 dark:hover:bg-slate-900 dark:hover:border-indigo-400 motion-reduce:animate-none"
</script>

<template>
  <article :class="[cardClass, delay]">
    <h2 class="card-title text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1.5">
      {{ title }}
    </h2>
    <ul v-if="type === 'list'" class="list-disc list-inside space-y-1.5">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <slot v-else />
  </article>
</template>
