<script setup lang="ts">
import StarIcon from '../Logos/StarIcon.vue'
import ForkedIcon from '../Logos/ForkedIcon.vue'
import ProjectGithubIcon from '../Logos/ProjectGithubIcon.vue'

import { ref } from 'vue'
const props = defineProps({
  technology: {
    type: String,
    default: '#42b883',
  },
  projectGithubURL: {
    type: String,
    default: 'https://github.com/BFlorian91',
  },
})
const { technology } = props

const showModal = ref(false)
function toggleModal() {
  showModal.value = !showModal.value
}
</script>

<template>
  <div
    class="mt-4 h-48 p-8 flex justify-between items-center border-2 border-ring bg-card rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <div class="flex-1">
      <div class="flex items-center">
        <ProjectGithubIcon />
        <a class="text-secondary font-bold font-heading" target="_blank" :href="projectGithubURL">
          <slot name="title">Portfolio</slot>
        </a>
      </div>
      <p class="py-3 font-body max-h-24 overflow-hidden">
        <slot name="description"></slot>
      </p>
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
    <div @click="toggleModal" class="rounded-md md:block hidden w-56 h-34 p-2.5">
      <slot name="img" :open-modal="toggleModal"></slot>
    </div>
  </div>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed z-40 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-opacity ease-in-out duration-1000"
    @click.stop=""
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div
      class="relative p-4 rounded-lg transition-transform ease-in-out duration-1000 transform scale-90"
    >
      <button
        @click="toggleModal"
        class="absolute text-card bg-secondary p-4 rounded-full font-bold text-xl top-6 right-8 z-40"
        aria-label="Close modal"
      >
        X
      </button>
      <div class="max-w-3xl" id="modal-headline">
        <slot name="img" :open-modal="toggleModal"></slot>
      </div>
    </div>
  </div>
</template>
