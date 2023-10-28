<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'
import GithubIcon from '../Logos/Media/GithubIcon.vue'
import LinkedinIcon from '../Logos/Media/LinkedinIcon.vue'
import InstagramIcon from '../Logos/Media/InstagramIcon.vue'
</script>

<template>
  <!-- Footer -->
  <SectionSlot>
    <footer class="flex flex-col -mt-20 items-center max-w-full font-body overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
      <div class="mt-10 flex justify-center gap-12 w-full">
        <a href="#" class="text-gray-400 hover:text-hover">
          <span class="sr-only">Github</span>
          <GithubIcon />
        </a>
        <a href="#" class="text-gray-400 hover:text-hover">
          <span class="sr-only">Linkedin</span>
          <LinkedinIcon />
        </a>
        <a href="#" class="text-gray-400 hover:text-hover">
          <span class="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-primary">&copy; 2023 Made with 🩷 by Florian Beaumont</p>
    </footer>
  </SectionSlot>
</template>
