<script setup lang="ts">
import type { WorkItem } from '~/types'

defineProps<{
  items: WorkItem[]
}>()
</script>

<template>
  <ul class="space-y-1.5">
    <li v-for="item in items" :key="item.title">
      <span class="font-semibold">{{ $t(item.title) }}</span>: {{ $t(item.desc) }}
    </li>
  </ul>
</template>
