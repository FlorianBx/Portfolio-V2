<script setup lang="ts">
import PortfolioElementComponent from '../PortfolioElement/PortfolioElementComponent.vue'
import SectionSlot from '../SectionSlot/SectionSlot.vue'
</script>

<template>
  <SectionSlot>
    <div id="portfolio" class="text-start max-w-md md:max-w-5xl">
      <h2 class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl">Portfolio</h2>
      <p class="mt-2 text-lg font-body leading-8 text-primary">
        Vel dolorem qui facilis soluta sint aspernatur totam cumque.
      </p>
    </div>
    <!-- Github section  -->
    <PortfolioElementComponent technology="#42b883">
      <template #title>Code Vault</template>
      <template #tech>Vue</template>
      <template #description
        >Boost your productivity with an AI-powered code snippets manager for developers 🚀
      </template>
      <template #img="{ openModal }">
        <img
          @click="openModal"
          src="../../assets/code-vault.webp"
          alt=""
          class="-z-10 object-contain rounded-md w-full h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
    <PortfolioElementComponent technology="#61DAFB">
      <template #title>Portfolio #<span class="text-red-300">deprecated</span></template>
      <template #tech>React</template>
      <template #description> My React portfolio showcases my web develop, projects... </template>
      <template #img="{ openModal }">
        <img
          @click="openModal"
          src="../../assets/portf.webp"
          alt=""
          class="-z-10 object-contain rounded-md w-full h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
    <PortfolioElementComponent technology="#61DAFB">
      <template #title>Blog</template>
      <template #tech>React</template>
      <template #description
        >My development blog is built with Gatsby.js and React.js, making it fast, responsive...
      </template>
      <template #img="{ openModal }">
        <img
          @click="openModal"
          src="../../assets/blog.webp"
          alt=""
          class="-z-10 object-contain rounded-md w-full h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
  </SectionSlot>
</template>
