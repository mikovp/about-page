<script setup lang="ts">
import { WORK_ITEMS, WORKFLOW_ITEMS, TECH_STACK, SOCIAL_LINKS } from '~/constants/content'

const { locale } = useI18n()
const { public: publicConfig } = useRuntimeConfig()

const seoTitle = computed(() => locale.value === 'en'
  ? 'mikovp - Full-Stack Web Developer'
  : 'mikovp - Full-Stack Веб-разработчик'
)

const seoDescription = computed(() => locale.value === 'en'
  ? 'Full-stack engineer shipping web products since 2018. PHP, Laravel, Vue.js, React, AWS, Docker, Kubernetes. Building backends that scale and frontends users love.'
  : 'Full-stack разработчик, создающий веб-продукты с 2018 года. PHP, Laravel, Vue.js, React, AWS, Docker, Kubernetes. Бэкенды которые не ломаются и фронтенды которыми приятно пользоваться.'
)

const ogImage = computed(() => publicConfig.siteUrl as string)

const canonicalUrl = computed(() => publicConfig.siteUrl as string)
const ogLocale = computed(() => locale.value === 'ru' ? 'ru_RU' : 'en_US')

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogType: 'website',
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogUrl: canonicalUrl,
  ogSiteName: 'mikovp',
  ogLocale,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  themeColor: '#1e293b',
  author: 'Mikhail (mikovp)'
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mikhail (mikovp)',
        url: publicConfig.siteUrl,
        jobTitle: 'Full-Stack Web Developer',
        sameAs: [SOCIAL_LINKS.github.url, SOCIAL_LINKS.linkedin.url]
      })
    }
  ]
})
</script>

<template>
  <main
    id="main-content"
    class="relative max-w-6xl mx-auto min-h-screen flex items-start lg:items-center font-sans px-4 sm:px-6 lg:px-10 py-8 lg:py-12 text-base md:text-lg text-slate-700 dark:text-white"
    role="main"
  >
    <Particles />
    <div class="relative z-10 w-full">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
        <div class="space-y-4 lg:space-y-6">
          <Hero />
        </div>

        <section
          class="mt-10 lg:mt-0 flex flex-col gap-4 md:gap-5 text-slate-600 dark:text-slate-100 lg:border-l lg:border-white/30 lg:dark:border-white/10 lg:pl-10"
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
</template>
