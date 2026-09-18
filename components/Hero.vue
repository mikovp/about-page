<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants/content'
import { EMAIL } from '~/constants/content'
</script>

<template>
  <header class="animate-fade-in-up delay-[80ms] motion-reduce:animate-none">
    <strong class="font-semibold text-gray-400 mb-8 block">mikovp</strong>
    <h1 class="font-bold text-4xl md:text-6xl leading-tight">
      {{ $t('hello') }}<span class="text-red-500">!</span> 
      {{ $t('i_am') }}<span class="text-red-500">,</span> 
      {{ $t('web_developer') }}<span class="text-red-500">.</span>
    </h1>
    <section class="my-4 lg:my-6">
      <p class="font-medium leading-relaxed text-slate-600 dark:text-slate-100">
        {{ $t('about_1') }}
        <a 
          :href="$t('company_url')" 
          :title="$t('company_target')" 
          class="text-purple-500 underline decoration-purple-400/60 underline-offset-[3px] hover:text-purple-400 hover:decoration-purple-400 hover:decoration-dashed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:rounded"
        >
          {{ $t('company_name') }}
        </a>
        {{ $t('about_2') }}
        <a
          :href="EMAIL.url"
          class="ml-4 text-indigo-600 dark:text-indigo-400 underline underline-offset-[3px] hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          :aria-label="'Send email'"
        >
          {{ EMAIL.text }}
        </a>
      </p>
    </section>
    <footer class="mt-6 md:mt-8 font-medium text-slate-600 dark:text-slate-100">
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
  </header>
</template>
