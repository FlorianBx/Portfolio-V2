<template>
  <div>
    <!-- <GradienComponent /> -->
    <section class="w-full flex pt-48">
      <div class="flex p-8">
        <div class="sm:w-1/2 flex-none"></div>
        <h1 class="text-white font-bold text-5xl">
          Hello<span class="text-primary">.</span>I am Florian, Front-end engineer
        </h1>
      </div>
    </section>
    <!-- <CardComponent /> -->
    <AboutComponent />
    <BlogComponent />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
// import CardComponent from '../../components/Card/CardComponent.vue'
import AboutComponent from '../../components/About/AboutComponent.vue'
// import GradienComponent from '../../components/Gradient/GradienComponent.vue'
import FooterComponent from '../../components/footer/FooterComponent.vue'
import BlogComponent from '../../components/Blog/BlogComponent.vue'
</script>
