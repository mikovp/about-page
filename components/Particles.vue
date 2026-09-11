<script setup lang="ts">
import type { Container } from '@tsparticles/engine'
import type { ParticlesOptions } from '~/types'

const getParticleCount = () => {
  if (import.meta.client) {
    const width = window.innerWidth
    if (width < 640) return 20
    if (width < 1024) return 30
    return 40
  }
  return 40
}

const options = ref<ParticlesOptions>({
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      enable: true
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      value: getParticleCount()
    },
    size: {
      value: 3
    },
    opacity: {
      value: 0.5
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
})

const onLoaded = (container?: Container) => {
  if (container) {
    container.pause()
    setTimeout(() => container.play(), 200)
  }
}

if (import.meta.client) {
  const updateParticleCount = () => {
    options.value.particles.number.value = getParticleCount()
  }

  window.addEventListener('resize', updateParticleCount)
  onUnmounted(() => {
    window.removeEventListener('resize', updateParticleCount)
  })
}
</script>

<template>
  <div class="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <ClientOnly>
      <VueParticles
        id="tsparticles"
        :options="options"
        @particles-loaded="onLoaded"
      />
    </ClientOnly>
  </div>
</template>