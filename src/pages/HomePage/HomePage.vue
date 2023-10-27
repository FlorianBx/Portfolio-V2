<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IntroductionComponent from '../../components/Introduction/IntroductionComponent.vue'
import AboutComponent from '../../components/About/AboutComponent.vue'
import FooterComponent from '../../components/footer/FooterComponent.vue'
import BlogComponent from '../../components/Blog/BlogComponent.vue'

const showDiv = ref(false)

onMounted(() => {
  setTimeout(() => {
    showDiv.value = true
  }, 2000)
})
</script>

<template>
  <div class="mt-32 max-w-full sm:mt-40">
    <IntroductionComponent />
    <AboutComponent />
    <BlogComponent />
    <FooterComponent />
  </div>
</template>
