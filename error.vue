<script setup lang="ts">
import type { NuxtError } from '#app'
import { SOCIAL_LINKS } from '~/constants/content'
import App from './App.vue'

const props = defineProps<{
  error?: NuxtError
}>()

defineOptions({
  inheritAttrs: false,
})

const { locale } = useI18n()

const statusCode = computed(() => props.error?.statusCode ?? 404)

useHead({
  title: () => (locale.value === 'en' ? 'Page Not Found — mikovp' : 'Страница не найдена — mikovp'),
  htmlAttrs: {
    lang: locale
  },
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})

const handleError = () => clearError({ redirect: '/' })
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

    <main
      id="main-content"
      class="relative max-w-6xl mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8 lg:py-12 text-base md:text-lg text-slate-700 dark:text-white"
      role="main"
    >
      <div class="relative z-10 w-full flex justify-center">
        <article
          class="w-full max-w-lg text-center rounded-2xl bg-white/40 dark:bg-slate-900/60 backdrop-blur border border-white/10 shadow-sm px-6 sm:px-10 pt-6 pb-8 animate-fade-in-up motion-reduce:animate-none"
          role="alert"
          aria-live="assertive"
        >
          <strong class="font-semibold text-gray-400 mb-6 block">mikovp</strong>

          <p class="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2">
            {{ $t('error_eyebrow') }}
            <span v-if="statusCode !== 404" class="ml-1">· {{ statusCode }}</span>
          </p>

          <p
            class="font-bold text-6xl md:text-7xl leading-none tracking-tight"
            aria-hidden="true"
          >
            {{ $t('error_code') }}<span class="text-red-500">.</span>
          </p>

          <h1 class="mt-4 font-bold text-2xl md:text-3xl leading-tight">
            {{ $t('error_title') }}<span class="text-red-500">!</span>
          </h1>

          <p class="mt-3 font-medium leading-relaxed text-slate-600 dark:text-slate-100">
            {{ $t('error_message') }}
          </p>

          <div class="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              class="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-300/50 dark:hover:border-indigo-400/50 hover:-translate-y-0.5 transition-all duration-300 ease-out font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 dark:focus-visible:ring-offset-slate-800"
              @click="handleError"
            >
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {{ $t('error_home') }}
            </button>
          </div>

          <footer class="mt-6 font-medium text-sm text-slate-600 dark:text-slate-100">
            <p>
              {{ $t('contact') }}
              <a
                :href="SOCIAL_LINKS.github.url"
                :title="SOCIAL_LINKS.github.title"
                class="underline decoration-current/60 underline-offset-[3px] hover:decoration-current hover:decoration-dashed focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:rounded"
              >
                Github
              </a>
              {{ $t('or') }}
              <a
                :href="SOCIAL_LINKS.linkedin.url"
                :title="SOCIAL_LINKS.linkedin.title"
                class="underline decoration-current/60 underline-offset-[3px] hover:decoration-current hover:decoration-dashed focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:rounded"
              >
                LinkedIn
              </a>.
            </p>
          </footer>
        </article>
      </div>
    </main>
  </div>
</template>
