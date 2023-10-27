<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'
import GithubIcon from '../Media/GithubIcon.vue'
import LinkedinIcon from '../Media/LinkedinIcon.vue'
import InstagramIcon from '../Media/InstagramIcon.vue'

const footerNavigation = {
  main: [
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}
</script>

<template>
  <!-- Footer -->
  <SectionSlot>
    <footer class="flex flex-col items-center max-w-full overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
      <nav
        class="-mb-6 columns-3 w-full flex justify-between sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div v-for="item in footerNavigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Github</span>
          <GithubIcon />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Linkedin</span>
          <LinkedinIcon />
        </a>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2020 Your Company, Inc. All rights reserved.
      </p>
    </footer>
  </SectionSlot>
</template>
