<script setup lang="ts">
import IntroductionComponent from '../../components/Introduction/IntroductionComponent.vue'
import AboutComponent from '../../components/About/AboutComponent.vue'
import FooterComponent from '../../components/Footer/FooterComponent.vue'
import BlogComponent from '../../components/Blog/BlogComponent.vue'
import PortfolioComponent from '../../components/Portfolio/PortfolioComponent.vue'
</script>

<template>
  <div class="mt-32 max-w-full sm:mt-40">
    <IntroductionComponent />
    <PortfolioComponent />
    <AboutComponent />
    <BlogComponent />
    <FooterComponent />
  </div>
</template>
