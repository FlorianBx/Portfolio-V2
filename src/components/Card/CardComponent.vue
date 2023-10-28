<script setup lang="ts"></script>

<template>
  <div class="w-80 flex-none space-y-8 pt-32 sm:pt-0">
    <!-- <div class="relative">
      <img
        src="../../assets/florian.jpg"
        alt=""
        class="-rotate-3 aspect-[2/3] w-full rounded-xl object-cover shadow-lg inset-0 -z-10 h-full"
      />
    </div> -->
    <article
      class="cursor relative isolate flex flex-col justify-end -rotate-3 overflow-hidden rounded-2xl px-8 pb-8 pt-80 mt-2 mr-8 sm:pt-48 lg:pt-80 h-96"
    >
      <img src="../../assets/florian.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-card via-bg" />
      <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </article>
  </div>
</template>
