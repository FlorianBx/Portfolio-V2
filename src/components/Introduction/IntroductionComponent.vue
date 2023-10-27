<script setup lang="ts">
import ButtonSocial from '../../components/ButtonSocial/ButtonSocial.vue'
import GithubIcon from '../../components/Media/GithubIcon.vue'
import LinkedinIcon from '../../components/Media/LinkedinIcon.vue'
import SectionSlot from '../../components/SectionSlot/SectionSlot.vue'
</script>

<template>
  <SectionSlot>
    <h1 class="md:w-full w-40 text-4xl font-bold font-heading tracking-tight text-start text-primary sm:text-6xl">
      Vue js Developer
    </h1>
    <p class="mt-6 py-4 md:text-lg md:w-full w-full text-start h-auto leading-8 text-gray-300 font-body">
      Self-taught Vue.js developer trained at <a href="https://42.fr/en/homepage/">42 school</a>. Dedicated front-end
      coder with a keen eye for detail and a passion for clean design.
    </p>
    <a href="#" class="text-sm font-semibold leading-6 text-primary md:mb-3 hover:text-hover"
      >Learn more <span aria-hidden="true">→</span>
    </a>
    <div class="flex w-full md:items-end gap-4 pt-4">
      <ButtonSocial>
        <template #image><GithubIcon /></template>
        <template #name>Github</template>
      </ButtonSocial>
      <ButtonSocial>
        <template #image><LinkedinIcon /></template>
        <template #name>Linkedin</template>
      </ButtonSocial>
    </div>
  </SectionSlot>
</template>
