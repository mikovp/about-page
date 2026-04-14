<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const options = {
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
            value: 40
        }
    },
}

const onLoad = (container: Container) => {  // Do something with the container  
    container.pause()
    setTimeout(() => container.play(), 200)
}

</script>

<template>
    <NuxtParticles id="tsparticles" class="absolute -z-1" :options="options" @load="onLoad"></NuxtParticles>
</template>