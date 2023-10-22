<script setup lang="ts">
import { reactive } from 'vue'
const menuItems = reactive([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
])
</script>

<template>
  <div class="fixed -right-24 p-4 top-48 rotate-90">
    <ul class="flex gap-4 font-bold text-lg">
      <li v-for="item in menuItems" :class="item.name === 'Home' ? 'text-primary' : ''" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
