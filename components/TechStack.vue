<script setup lang="ts">
defineProps<{
  techs: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2" role="list">
    <span 
      v-for="tech in techs" 
      :key="tech" 
      class="px-3 py-1 rounded-full border border-white/40 bg-white/50 dark:bg-slate-800/70 text-xs md:text-sm"
      role="listitem"
    >
      {{ tech }}
    </span>
  </div>
</template>
