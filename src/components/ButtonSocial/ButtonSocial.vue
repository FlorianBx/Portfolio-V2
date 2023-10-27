<script setup lang="ts"></script>

<template>
  <a
    href="#"
    class="flex items-center justify-around gap-2 rounded-md bg-button px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
  >
    <slot name="image"></slot>
    <div class="hidden md:block">
      <slot name="name"></slot>
    </div>
  </a>
</template>
