<script setup lang="ts">
import ButtonSocial from '../../components/ButtonSocial/ButtonSocial.vue'
import GithubIcon from '../../components/Logos/Media/GithubIcon.vue'
import LinkedinIcon from '../../components/Logos/Media/LinkedinIcon.vue'
import SectionSlot from '../../components/SectionSlot/SectionSlot.vue'
import VueIcon from '../../components/Logos/Skills/VueIcon.vue'
import TailwindIcon from '../../components/Logos/Skills/TailwindIcon.vue'
import PiniaIcon from '../../components/Logos/Skills/PiniaIcon.vue'
import VitestIcon from '../Logos/Skills/VitestIcon.vue'
</script>

<template>
  <SectionSlot :is-the-first-element="true">
    <!-- <a id="home" class="absolute top-10 font-body" href="#"
      ><span class="text-primary">FR</span> |
      <span class="text-secondary">EN</span>
    </a> -->
    <h1
      class="md:w-full w-60 text-4xl font-bold font-heading tracking-tight text-start text-primary sm:text-6xl"
    >
      Vue js Developer
    </h1>
    <h2
      class="md:w-full py-4 text-2xl font-bold font-heading tracking-tight text-start text-primary sm:text-4xl"
    >
      Hey, I'm Florian<span class="text-secondary">!</span>
    </h2>
    <p
      class="mt-0 py-4 md:text-lg md:w-full w-full text-start h-auto leading-8 text-gray-300 font-body"
    >
      Self-taught Vue.js developer trained at
      <a href="https://42.fr/en/homepage/">42 school</a>. Dedicated front-end
      coder with a keen eye for detail and a passion for clean design.
    </p>
    <a
      v-scroll-to="'#about'"
      class="cursor-pointer text-md font-body font-semibold leading-6 text-primary md:mb-3 hover:text-hover"
    >
      Learn more <span aria-hidden="true">→</span>
    </a>
    <div class="flex justify-between items-center">
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
      <div class="sm:static absolute top-24 md:block">
        <div class="flex justify-center items-center gap-4 relative w-64">
          <VueIcon />
          <VitestIcon />
          <PiniaIcon />
          <TailwindIcon />
        </div>
      </div>
    </div>
  </SectionSlot>
</template>
