<script setup lang="ts">
import { WORK_ITEMS, WORKFLOW_ITEMS, TECH_STACK } from '~/constants/content'

const { locale } = useI18n()

const seoTitle = computed(() => locale.value === 'en' 
  ? 'mikovp - Full-Stack Web Developer' 
  : 'mikovp - Full-Stack Веб-разработчик'
)

const seoDescription = computed(() => locale.value === 'en'
  ? 'Full-stack engineer shipping web products since 2018. PHP, Laravel, Vue.js, React, AWS, Docker, Kubernetes. Building backends that scale and frontends users love.'
  : 'Full-stack разработчик, создающий веб-продукты с 2018 года. PHP, Laravel, Vue.js, React, AWS, Docker, Kubernetes. Бэкенды которые не ломаются и фронтенды которыми приятно пользоваться.'
)

useHead({
  htmlAttrs: {
    lang: locale
  },
  title: seoTitle,
  meta: [
    { name: 'description', content: seoDescription },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { property: 'og:url', content: 'https://mikovp.github.io/about-page/' },
    { property: 'og:site_name', content: 'mikovp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
    { name: 'theme-color', content: '#1e293b' },
    { name: 'author', content: 'Mikhail (mikovp)' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mikovp.github.io/about-page/' }
  ]
})
</script>

<template>
  <div class="bg-slate-300 dark:bg-gray-800 font-sans antialiased">
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
      class="max-w-6xl mx-auto min-h-screen lg:h-screen flex items-start lg:items-center font-sans px-4 sm:px-6 lg:px-10 py-8 lg:py-0 text-base md:text-lg text-slate-700 dark:text-white"
      role="main"
    >
      <Particles />
      <div class="z-10 w-full">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          <div class="space-y-4 lg:space-y-6">
            <Hero />
          </div>

          <section 
            class="mt-10 lg:mt-0 h-full flex flex-col gap-4 md:gap-5 text-slate-600 dark:text-slate-100 lg:border-l lg:border-white/30 lg:dark:border-white/10 lg:pl-10"
            aria-label="Professional experience and skills"
          >
            <Card 
              :title="$t('what_i_work_on_title')" 
              delay="delay-[140ms]"
            >
              <WorkList :items="WORK_ITEMS" />
            </Card>

            <Card 
              :title="$t('ai_workflow_title')" 
              :items="WORKFLOW_ITEMS.map(item => $t(item))"
              delay="delay-[260ms]"
              type="list"
            />

            <Card 
              :title="$t('tech_i_enjoy_title')" 
              delay="delay-[380ms]"
            >
              <TechStack :techs="TECH_STACK" />
            </Card>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>
