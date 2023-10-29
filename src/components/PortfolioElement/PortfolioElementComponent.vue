<script setup lang="ts">
import StarIcon from '../Logos/StarIcon.vue'
import ForkedIcon from '../Logos/ForkedIcon.vue'
import ProjectGithubIcon from '../Logos/ProjectGithubIcon.vue'

import { defineProps } from 'vue'

const props = defineProps({
  technology: {
    type: String,
    default: '#42b883',
  },
})

const { technology } = props
</script>

<template>
  <div class="mt-4 h-40 p-4 flex justify-between items-center border-2 border-ring bg-card rounded-md">
    <div class="">
      <div class="flex items-center">
        <ProjectGithubIcon />
        <slot name="title">Portfolio</slot>
      </div>
      <p class="py-3.5">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <div class="flex items-center gap-4">
        <div class="flex items-center space-x-1">
          <div :style="{ background: technology }" class="w-4 h-4 mr-1.5 rounded-full"></div>
          <slot name="tech">Vue</slot>
        </div>
        <div class="flex items-center">
          <StarIcon />
          <slot name="star">0</slot>
        </div>
        <div class="flex items-center">
          <ForkedIcon />
          <slot name="forked">0</slot>
        </div>
      </div>
    </div>
    <div class="rounded-md md:block hidden">
      <slot name="img">
        <img src="../../assets/portf.webp" alt="" class="-z-10 h- w-48 object-contain rounded-md" />
      </slot>
    </div>
  </div>
</template>
