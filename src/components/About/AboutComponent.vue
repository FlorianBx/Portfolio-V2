<script setup lang="ts">
import StatsComponent from '../Stats/StatsComponent.vue'
import CardComponent from '../../components/Card/CardComponent.vue'
import SectionSlot from '../../components/SectionSlot/SectionSlot.vue'
</script>

<template>
  <SectionSlot>
    <h2
      id="about"
      class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl"
    >
      About Me
    </h2>
    <div class="mt-6 flex flex-col gap-x-8 gap-y-20">
      <div class="max-w-6xl flex gap-4">
        <div class="hidden md:block flex-end w-3xl">
          <CardComponent />
        </div>
        <div class="flex flex-col">
          <p class="text-xl leading-8 text-white-600 font-body">
            I am a passionate web developer, specialized in Vue.js, TypeScript,
            and JavaScript. My journey is a unique blend of self-learning and
            formal education at 42 School, an institution renowned for its
            innovative pedagogical approach. This experience has not only armed
            me with advanced technical skills but also the ability to impart
            these skills, allowing me to serve as a mentor for others.
          </p>
          <div class="mt-10 leading-7 text-white-700 font-body">
            <p>
              My commitment to coding goes beyond programming itself. I am a
              perpetual learner, always on the lookout for new technologies and
              methods to enhance my craft. This drives me to write regularly on
              topics ranging from design patterns to development best practices,
              thereby solidifying my professional online presence.
            </p>
            <p class="mt-10 font-body">
              For me, every challenge is an opportunity for growth and every
              failure a lesson to be learned. I firmly believe that development
              is as much about attitude as it is about skill, and I am
              determined to excel in both.
            </p>
          </div>
        </div>
      </div>
      <ul class="w-full">
        <li class="w-full space-y-8">
          <StatsComponent />
        </li>
      </ul>
    </div>
  </SectionSlot>
</template>
