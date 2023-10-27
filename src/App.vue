<script setup lang="ts">
import HomePage from './pages/HomePage/HomePage.vue'
import NavBar from './components/NavBar/NavBar.vue'
</script>

<template>
  <div class="w-full overflow-hidden bg-background">
    <div class="mx-auto max-w-full sm:px-6 lg:px-8">
      <NavBar />
      <HomePage />
    </div>
  </div>
</template>

<style scoped></style>
