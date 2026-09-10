<script setup lang="ts">
const { locale } = useI18n()

const errorTitle = computed(() => locale.value === 'en' ? 'Page Not Found' : 'Страница не найдена')
const errorMessage = computed(() => locale.value === 'en' 
  ? 'The page you are looking for does not exist.' 
  : 'Страница, которую вы ищете, не существует.'
)
const homeButton = computed(() => locale.value === 'en' ? 'Go Home' : 'На главную')

useHead({
  title: errorTitle,
  htmlAttrs: {
    lang: locale
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-slate-300 dark:bg-gray-800 font-sans antialiased flex items-center justify-center px-4">
    <div class="text-center space-y-6 max-w-md">
      <h1 class="text-8xl font-bold text-slate-700 dark:text-white">404</h1>
      <h2 class="text-2xl font-semibold text-slate-600 dark:text-slate-300">
        {{ errorTitle }}
      </h2>
      <p class="text-slate-600 dark:text-slate-400">
        {{ errorMessage }}
      </p>
      <button
        class="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 dark:focus-visible:ring-offset-slate-800"
        @click="handleError"
      >
        {{ homeButton }}
      </button>
    </div>
  </div>
</template>
