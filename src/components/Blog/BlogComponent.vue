<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'
import artImage1 from '../../assets/art-1.webp'
import artImage2 from '../../assets/art-2.webp'
import artImage3 from '../../assets/art-3.webp'
import me from '../../assets/me.webp'

const blogPosts = [
  {
    id: 1,
    title:
      '🚀 Aventure dans le Terminal : Ranger ma "Sandbox" de Développement avec Style',
    href: 'https://www.linkedin.com/pulse/aventure-dans-le-terminal-ranger-ma-sandbox-de-avec-style-beaumont/?trackingId=DSgbXpMTQtK3Z%2FB5dtJJsA%3D%3D',
    imageUrl: artImage1,
    date: 'Oct 24, 2023',
    datetime: '2023-10-24',
    author: {
      name: 'Florian Beaumont',
      imageUrl: me,
    },
  },
  {
    id: 2,
    title: "Parcours Tech Accéléré : Confessions d'un Autodidacte",
    href: 'https://www.linkedin.com/pulse/parcours-tech-acc%25C3%25A9l%25C3%25A9r%25C3%25A9-confessions-dun-autodidacte-florian-beaumont/?trackingId=u2kE4qjFT6KBuuoHtXdm%2Fw%3D%3D',
    imageUrl: artImage2,
    date: 'Oct 20, 2023',
    datetime: '2023-10-20',
    author: {
      name: 'Florian Beaumont',
      imageUrl: me,
    },
  },
  {
    id: 3,
    title: '👨🏻‍💻 Reflexions Dev #1 : Explorer la recherche binaire en JavaScript',
    href: 'https://www.linkedin.com/pulse/reflexions-dev-1-explorer-la-recherche-binaire-en-florian-beaumont/?trackingId=u2kE4qjFT6KBuuoHtXdm%2Fw%3D%3D',
    imageUrl: artImage3,
    date: 'Oct 16, 2023',
    datetime: '2023-10-16',
    author: {
      name: 'Florian Beaumont',
      imageUrl: me,
    },
  },
]
</script>

<template>
  <SectionSlot>
    <div id="blog" class="text-start max-w-md md:max-w-5xl">
      <p
        tabindex="0"
        class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl"
      >
        Latest articles
      </p>
      <p tabindex="0" class="mt-2 text-lg font-body leading-8 text-primary">
        An insight into my recent thoughts and contributions to the tech
        community.
      </p>
    </div>
    <div
      class="mx-auto grid auto-rows-fr grid-cols-1 gap-8 sm:mt-8 mt-12 lg:mx-0 md:grid-cols-3 max-w-md md:max-w-5xl"
    >
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="cursor relative isolate flex flex-col h-40 justify-end overflow-hidden rounded-2xl bg-background ring-1 ring-card px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          :src="post.imageUrl"
          alt=""
          class="absolute inset-0 z-0 object-cover w-full h-full rounded-2xl p-0.5"
          loading="lazy"
        />
        <div
          class="absolute inset-0 z-10 bg-gradient-to-t from-background via-card/95 rounded-2xl overflow-hidden"
        ></div>
        <!-- <div class="absolute inset-0 z-10 rounded-2xl"></div> -->

        <div
          class="gap-y-1 text-sm z-20 font-body leading-6 text-primary rounded-2xl"
        >
          <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg
              viewBox="0 0 2 2"
              class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img
                :src="post.author.imageUrl"
                alt=""
                class="h-6 w-6 flex-none rounded-full bg-card/10"
              />
              {{ post.author.name }}
            </div>
          </div>
        </div>
        <p
          class="mt-3 text-lg z-20 font-semibold font-body leading-6 text-primary"
        >
          <a target="_blank" :href="post.href">
            {{ post.title }}
          </a>
        </p>
      </article>
    </div>
  </SectionSlot>
</template>
