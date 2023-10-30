<script setup lang="ts">
import PortfolioElementComponent from '../PortfolioElement/PortfolioElementComponent.vue'
import SectionSlot from '../SectionSlot/SectionSlot.vue'
</script>

<template>
  <SectionSlot>
    <div id="portfolio" class="text-start max-w-md md:max-w-5xl">
      <h2
        class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl"
      >
        Portfolio
      </h2>
      <p class="mt-2 px-1 text-lg font-body leading-8 text-primary">
        What I've Been Working On
      </p>
    </div>
    <!-- Github section  -->
    <PortfolioElementComponent
      technology="#42b883"
      project-github-u-r-l="https://github.com/BFlorian91/Code-Snippets-Vault"
    >
      <template #title>Code Vault</template>
      <template #tech>Vue</template>
      <template #description>
        <p class="line-clamp-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          Boost your productivity with an AI-powered code snippets manager for
          developers 🚀
        </p>
      </template>
      <template #img>
        <img
          src="../../assets/code-vault.webp"
          alt=""
          class="-z-10 object-contain rounded-md w-full h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
    <PortfolioElementComponent
      technology="#61DAFB"
      project-github-u-r-l="https://github.com/BFlorian91/react-portfolio"
    >
      <template #title>
        Portfolio #<span class="text-red-300">deprecated</span></template
      >
      <template #tech>React</template>
      <template #description>
        <p class="line-clamp-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          My React portfolio website showcases my web development and other
          projects. It's interactive, responsive, and easy to navigate. With a
          clean and modern design, it highlights my experience and creativity
          across a range of technologies, including React.
        </p>
      </template>
      <template #img>
        <img
          src="../../assets/portf.webp"
          alt=""
          class="-z-10 object-contain rounded-md h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
    <PortfolioElementComponent
      technology="#61DAFB"
      project-github-u-r-l="https://github.com/BFlorian91/Blog-dev"
    >
      <template #title>Blog</template>
      <template #tech>React</template>
      <template #description>
        <p class="line-clamp-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          My development blog is built with Gatsby.js and React.js, making it
        </p>
        fast, responsive...
      </template>
      <template #img>
        <img
          src="../../assets/blog.webp"
          alt=""
          class="-z-10 object-contain rounded-md w-full h-full cursor-pointer"
        />
      </template>
    </PortfolioElementComponent>
  </SectionSlot>
</template>
