<script setup lang="ts">
//get props isTheFirstElement
import { defineProps } from 'vue'
defineProps({
  isTheFirstElement: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div :class="[isTheFirstElement ? 'max-w-full lg:mt-48 px-8' : 'mt-40 max-w-full sm:mt-48 px-8']">
    <div class="mx-auto max-w-md md:max-w-5xl">
      <slot></slot>
    </div>
  </div>
</template>
