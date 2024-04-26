<script setup lang="ts">
import StatsComponent from '../Stats/StatsComponent.vue'
import CardComponent from '../../components/Card/CardComponent.vue'
import SectionSlot from '../../components/SectionSlot/SectionSlot.vue'
</script>

<template>
  <SectionSlot>
    <h2
      id="about"
      tabindex="0"
      class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl"
    >
      About Me
    </h2>
    <div class="mt-6 flex flex-col gap-x-8 gap-y-20">
      <div class="max-w-6xl flex gap-4">
        <div class="hidden md:block flex-end w-3xl">
          <CardComponent />
        </div>
        <div class="flex flex-col">
          <p tabindex="0" class="text-xl leading-8 text-white-600 font-body">
            I am a passionate web developer, specialized in
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
              >Vue</a
            >, and I'm always looking for new challenges and new projects. I have worked with
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
              >Vue</a
            >,
            <a
              href="https://nuxtjs.org"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
              >Nuxt</a
            >,
            <a
              href="https://typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
            >
              TypeScript </a
            >, and
            <a
              href="https://unocss.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary"
              >UnoCSS</a
            >. My path combines self-learning and studies at the 42 School, known for its innovative
            educational approach. This experience has equipped me with advanced technical skills and
            has allowed me to become a mentor.
          </p>
        </div>
      </div>
      <ul class="w-full">
        <li class="w-full space-y-8">
          <StatsComponent />
        </li>
      </ul>
    </div>
  </SectionSlot>
</template>
