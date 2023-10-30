<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'

const blogPosts = [
  {
    id: 1,
    title:
      '🚀 Aventure dans le Terminal : Ranger ma "Sandbox" de Développement avec Style',
    href: 'https://www.linkedin.com/pulse/aventure-dans-le-terminal-ranger-ma-sandbox-de-avec-style-beaumont/?trackingId=DSgbXpMTQtK3Z%2FB5dtJJsA%3D%3D',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E12AQHlLlw8bfBFJQ/article-cover_image-shrink_423_752/0/1697634480764?e=1704326400&v=beta&t=lBTcNYKkBqn9sBrIQVy6herO65BdDj-i-kQCPV6H9do',
    date: 'Mar 16, 2020',
    datetime: '2023-03-16',
    author: {
      name: 'Florian Beaumont',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
    },
  },
  {
    id: 2,
    title: "Parcours Tech Accéléré : Confessions d'un Autodidacte",
    href: 'https://www.linkedin.com/pulse/parcours-tech-acc%25C3%25A9l%25C3%25A9r%25C3%25A9-confessions-dun-autodidacte-florian-beaumont/?trackingId=u2kE4qjFT6KBuuoHtXdm%2Fw%3D%3D',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E12AQEdXOl1QOBOOw/article-cover_image-shrink_600_2000/0/1697800671255?e=1704326400&v=beta&t=AomgSoStbNUDU5VOi67BCW_jLnUUBTg5-t3ULJaWjQQ',
    date: 'Mar 16, 2020',
    datetime: '2023-11-16',
    author: {
      name: 'Florian Beaumont',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
    },
  },
  {
    id: 3,
    title: '👨🏻‍💻 Reflexions Dev #1 : Explorer la recherche binaire en JavaScript',
    href: 'https://www.linkedin.com/pulse/reflexions-dev-1-explorer-la-recherche-binaire-en-florian-beaumont/?trackingId=u2kE4qjFT6KBuuoHtXdm%2Fw%3D%3D',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E12AQHqUqN6U4gSlg/article-inline_image-shrink_1000_1488/0/1697387565652?e=1704326400&v=beta&t=C5mE3tWvF3kN4e7LDAQhLH1wkjXm2eorqEGmClrb4Ak',
    date: 'Mar 16, 2020',
    datetime: '2023-10-16',
    author: {
      name: 'Florian Beaumont',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
    },
  },
  // More posts...
]
</script>

<template>
  <!-- Blog section -->
  <SectionSlot>
    <div id="blog" class="text-start max-w-md md:max-w-5xl">
      <h2
        class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl"
      >
        Latest articles
      </h2>
      <p class="mt-2 text-lg font-body leading-8 text-primary">
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
        class="cursor relative isolate flex flex-col h-40 justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          :src="post.imageUrl"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 -z-10 bg-gradient-to-t from-card via-gray-900/40"
        />
        <div
          class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
        />

        <div
          class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm font-body leading-6 text-primary"
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
        <h3 class="mt-3 text-lg font-semibold font-body leading-6 text-primary">
          <a target="_blank" :href="post.href">
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
      </article>
    </div>
  </SectionSlot>
</template>
