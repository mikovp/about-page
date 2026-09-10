<script setup lang="ts">
const { locale, toggleLocale } = useLocaleToggle()
</script>

<template>
  <div class="fixed top-6 right-6 z-50 animate-fade-in-up delay-[200ms] motion-reduce:animate-none">
    <button 
      class="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-300/50 dark:hover:border-indigo-400/50 transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 dark:focus-visible:ring-offset-slate-800" 
      :aria-label="locale === 'en' ? 'Switch to Russian' : 'Переключить на английский'" 
      type="button"
      @click="toggleLocale"
    >
      <svg 
        class="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform duration-300 group-hover:rotate-12" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 min-w-[20px]">
        {{ locale === 'en' ? 'EN' : 'RU' }}
      </span>
      <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  </div>
</template>
