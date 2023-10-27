<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'

const blogPosts = [
  {
    id: 1,
    title: 'Keep calm and carry on',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
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
    title: 'Vue js is the best',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
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
    title: 'how to use tailwindcss',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
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
    <div class="text-start max-w-md md:max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">From the blog</h2>
      <p class="mt-2 text-lg leading-8 text-white-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
    </div>
    <div
      class="mx-auto mt-16 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 md:grid-cols-3 max-w-md md:max-w-5xl"
    >
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="cursor relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img :src="post.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" />
              {{ post.author.name }}
            </div>
          </div>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
          <a :href="post.href">
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
      </article>
    </div>
  </SectionSlot>
</template>
