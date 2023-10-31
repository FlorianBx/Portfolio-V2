<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'
import GithubIcon from '../Logos/Media/GithubIcon.vue'
import LinkedinIcon from '../Logos/Media/LinkedinIcon.vue'
import InstagramIcon from '../Logos/Media/InstagramIcon.vue'
</script>

<template>
  <!-- Footer -->
  <SectionSlot>
    <footer
      class="flex flex-col -mt-20 items-center max-w-full font-body overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8"
    >
      <div class="mt-10 flex justify-center gap-12 w-full">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/BFlorian91"
          class="text-gray-400 hover:text-hover"
          aria-label="Check out my GitHub repositories"
        >
          <span class="sr-only">Github</span>
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/florianbeaumont/"
          class="text-gray-400 hover:text-hover"
          aria-label="View my LinkedIn profile"
        >
          <span class="sr-only">Linkedin</span>
          <LinkedinIcon />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/fb.visual/"
          class="text-gray-400 hover:text-hover"
          aria-label="Follow me on Instagram"
        >
          <span class="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
      </div>
      <p tabindex="0" class="mt-10 text-center text-xs leading-5 text-primary">
        &copy; 2023 Made with 🩷 by Florian Beaumont
      </p>
    </footer>
  </SectionSlot>
</template>
