<script setup lang="ts">
import AboutComponent from '../../components/About/AboutComponent.vue'
// import GradienComponent from '../../components/Gradient/GradienComponent.vue'
import FooterComponent from '../../components/footer/FooterComponent.vue'
import BlogComponent from '../../components/Blog/BlogComponent.vue'
</script>

<template>
  <div class="flex flex-col">
    <!-- <GradienComponent /> -->
    <section class="bg-red-400 w-full pt-32 md:max-w-7xl">
      <div class="p-8 md:max-w-xl bg-teal-400">
        <div class="font-roboto text-9xl">
          <p class="text-darktitle drop-shadow-md">Front<br />end</p>
        </div>
        <h1 class="text-white font-bold text-5xl text-right">
          Hello<span class="text-primary"> ! </span>I am<br />
          Florian
        </h1>
      </div>
    </section>
    <section class="pt-48">
      <AboutComponent />
    </section>
    <BlogComponent />
    <FooterComponent />
  </div>
</template>
