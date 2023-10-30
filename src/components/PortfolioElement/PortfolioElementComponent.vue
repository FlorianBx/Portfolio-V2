<script setup lang="ts">
import StarIcon from '../Logos/StarIcon.vue'
import ForkedIcon from '../Logos/ForkedIcon.vue'
import ProjectGithubIcon from '../Logos/ProjectGithubIcon.vue'

import { defineProps, ref } from 'vue'

const showModal = ref(false)
const props = defineProps({
  technology: {
    type: String,
    default: '#42b883',
  },
})

function toggleModal() {
  showModal.value = !showModal.value
}

const { technology } = props
</script>

<template>
  <div
    class="mt-4 h-40 p-4 flex justify-between items-center border-2 border-ring bg-card rounded-md"
  >
    <div class="flex-1">
      <div class="flex items-center">
        <ProjectGithubIcon />
        <slot name="title">Portfolio</slot>
      </div>
      <p class="py-3">
        <slot name="description"></slot>
      </p>
      <div class="flex items-center gap-4">
        <div class="flex items-center space-x-1">
          <div
            :style="{ background: technology }"
            class="w-4 h-4 mr-1.5 rounded-full"
          ></div>
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
    <div
      @click="toggleModal"
      role="dialog"
      class="rounded-md md:block hidden w-56 h-34 p-2.5"
    >
      <slot name="img" :open-modal="toggleModal"></slot>
    </div>
  </div>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed z-40 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
    @click="toggleModal"
    role="dialog"
  >
    <div class="relative p-4 rounded-lg">
      <button
        class="absolute text-card bg-secondary p-4 rounded-full font-bold text-xl top-6 right-8 z-40"
      >
        X
      </button>
      <div class="max-w-3xl">
        <slot name="img" :open-modal="toggleModal"></slot>
      </div>
    </div>
  </div>
</template>
