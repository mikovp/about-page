<script setup lang="ts">
useHead({ title: "mikovp", meta: [{ name: "description", content: "mikovp - web developer" }, { name: "viewport", content: "width=device-width, initial-scale=1.0" }] })

const { locale } = useI18n()
const toggleLocale = () => { locale.value = locale.value === 'en' ? 'ru' : 'en' }

const cardClass = "rounded-2xl bg-white/40 dark:bg-slate-900/60 backdrop-blur border border-white/10 shadow-sm px-5 pt-1 pb-4 opacity-0 translate-y-2 animate-fade-in-up transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300 hover:bg-white/90 dark:hover:bg-slate-900 dark:hover:border-indigo-400 motion-reduce:animate-none motion-reduce:transform-none"

const workItems = [
  { title: 'ai_llm_apps_title', desc: 'ai_llm_apps_desc' },
  { title: 'fullstack_title', desc: 'fullstack_desc' },
  { title: 'automation_title', desc: 'automation_desc' }
]

const workflowItems = ['ai_workflow_1', 'ai_workflow_2', 'ai_workflow_3']

const techs = ['PHP', 'Laravel', 'Symfony', 'Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass', 'GraphQL', 'PostgreSQL', 'Python', 'Go', 'Bash', 'Docker', 'Git', 'Linux', 'PowerShell', 'Nginx', 'C', 'C++', 'AWS', 'GCP', 'Cloudflare', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Windows Server', 'Ubuntu', 'Debian', 'LLM / AI']
</script>

<template>
  <html :lang="locale" class="bg-slate-300 dark:bg-gray-800">
    <body class="font-sans antialiased">
      <client-only>
        <div class="fixed top-6 right-6 z-50 opacity-0 translate-y-2 animate-fade-in-up delay-[200ms]">
          <button @click="toggleLocale" class="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-indigo-300/50 dark:hover:border-indigo-400/50 transition-all duration-300 ease-out hover:-translate-y-0.5" :aria-label="locale === 'en' ? 'Switch to Russian' : 'Переключить на английский'">
            <svg class="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform duration-300 group-hover:rotate-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200 min-w-[20px]">{{ locale === 'en' ? 'EN' : 'RU' }}</span>
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </client-only>

      <main class="max-w-6xl mx-auto min-h-screen lg:h-screen flex items-start lg:items-center font-sans px-4 sm:px-6 lg:px-10 py-8 lg:py-0 text-base md:text-lg text-slate-700 dark:text-white">
        <Particles />
        <div class="z-10 w-full">
          <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            <div class="space-y-4 lg:space-y-6 opacity-0 translate-y-2 animate-fade-in-up delay-[80ms] motion-reduce:animate-none motion-reduce:transform-none">
              <header>
                <strong class="font-semibold text-gray-400 mb-8 block">mikovp</strong>
                <h1 class="font-bold text-4xl md:text-6xl leading-tight">{{ $t('hello') }}<span class="text-red-500">!</span> {{ $t('i_am') }}<span class="text-red-500">,</span> {{ $t('web_developer') }}<span class="text-red-500">.</span></h1>
              </header>
              <section class="my-4 lg:my-6">
                <p class="font-medium leading-relaxed text-slate-600 dark:text-slate-100">{{ $t('about_1') }}<a :href="$t('company_url')" :title="$t('company_target')" class="text-purple-500 underline decoration-purple-400/60 underline-offset-[3px] hover:text-purple-400 hover:decoration-purple-400 hover:decoration-dashed transition-colors">{{ $t('company_name') }}</a>{{ $t('about_2') }}</p>
              </section>
              <footer class="mt-6 md:mt-8 font-medium text-slate-600 dark:text-slate-100">
                <p>{{ $t('contact') }} <a href="https://github.com/mikovp" title="View my Github profile" class="underline decoration-current/60 underline-offset-[3px] hover:decoration-current hover:decoration-dashed">Github</a> {{ $t('or') }} <a href="https://www.linkedin.com/in/mikovp/" title="View my LinkedIn profile" class="underline decoration-current/60 underline-offset-[3px] hover:decoration-current hover:decoration-dashed">LinkedIn</a>.</p>
              </footer>
            </div>

            <section class="mt-10 lg:mt-0 h-full flex flex-col gap-4 md:gap-5 text-slate-600 dark:text-slate-100 lg:border-l lg:border-white/30 lg:dark:border-white/10 lg:pl-10">
              <div :class="[cardClass, 'delay-[140ms]']">
                <h2 class="card-title text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1.5">{{ $t('what_i_work_on_title') }}</h2>
                <ul class="space-y-1.5">
                  <li v-for="item in workItems" :key="item.title"><span class="font-semibold">{{ $t(item.title) }}</span>: {{ $t(item.desc) }}</li>
                </ul>
              </div>

              <div :class="[cardClass, 'delay-[260ms]']">
                <h2 class="card-title text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1.5">{{ $t('ai_workflow_title') }}</h2>
                <ul class="list-disc list-inside space-y-1.5">
                  <li v-for="item in workflowItems" :key="item">{{ $t(item) }}</li>
                </ul>
              </div>

              <div :class="[cardClass, 'delay-[380ms]']">
                <h2 class="card-title text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1.5">{{ $t('tech_i_enjoy_title') }}</h2>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in techs" :key="tech" class="px-3 py-1 rounded-full border border-white/40 bg-white/50 dark:bg-slate-800/70 text-xs md:text-sm">{{ tech }}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </body>
  </html>
</template>