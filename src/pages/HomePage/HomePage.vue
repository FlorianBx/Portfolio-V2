<script setup lang="ts">
import AboutComponent from '../../components/About/AboutComponent.vue'
// import GradienComponent from '../../components/Gradient/GradienComponent.vue'
import FooterComponent from '../../components/footer/FooterComponent.vue'
import BlogComponent from '../../components/Blog/BlogComponent.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <!-- <GradienComponent /> -->
    <section class="pt-20 max-w-md md:max-w-5xl mr-14 md:mr-14 sm:px-0 px-10">
      <div class="md:max-w-full">
        <div class="font-roboto text-7xl sm:text-8xl md:text-9xl">
          <p class="text-darktitle drop-shadow-md neon">Front<br />end</p>
        </div>
        <h1 class="w-full text-white font-bold text-5xl sm:text-6xl md:text-6xl text-right">
          Hello<span class="text-primary"> ! </span>I am<br />
          Florian
        </h1>
      </div>
    </section>
    <section class="sm:pt-4 pt-40">
      <AboutComponent />
    </section>
    <BlogComponent />
    <FooterComponent />
  </div>
</template>

<style scoped>
.neon {
  animation: animate 5s linear;
}
@keyframes animate {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  63%,
  65%,
  80%,
  82%,
  90%,
  92%,
  100% {
    text-shadow: none;
  }
  20%,
  24%,
  55%,
  61%,
  83%,
  88%,
  95%,
  98% {
    text-shadow:
      0 0 0.5rem #fff,
      0 0 0.7rem #fff,
      0 0 1rem #fff,
      0 0 4rem #00897b,
      0 0 7rem #00897b,
      0 0 8rem #00897b,
      0 0 100rem #00897b,
      0 0 7rem #00897b;
  }
}
</style>
