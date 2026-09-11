<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-slate-300 dark:bg-gray-800 font-sans antialiased">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {{ locale === 'en' ? 'Skip to main content' : 'Перейти к основному содержанию' }}
    </a>

    <ClientOnly>
      <LanguageToggle />
    </ClientOnly>

    <NuxtPage />
  </div>
</template>
