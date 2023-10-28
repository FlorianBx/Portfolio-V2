<script setup lang="ts">
import SectionSlot from '../SectionSlot/SectionSlot.vue'
import LinkIcon from '../Logos/LinkIcon.vue'

const portfolio = [
  {
    id: 1,
    title: 'Keep calm and carry on',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: '../../assets/portf.png',
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
    imageUrl: '../../assets/portf.png',
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
    imageUrl: '../../assets/portf.png',
    date: 'Mar 16, 2020',
    datetime: '2023-10-16',
    author: {
      name: 'Florian Beaumont',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
    },
  },
]
</script>

<template>
  <SectionSlot>
    <div class="text-start max-w-md md:max-w-5xl">
      <h2 class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl">Portfolio</h2>
      <p class="mt-2 text-lg font-body leading-8 text-primary">
        Vel dolorem qui facilis soluta sint aspernatur totam cumque.
      </p>
    </div>
    <div class="mx-auto grid auto-rows-fr grid-cols-1 gap-8 sm:mt-8 mt-12 lg:mx-0 md:grid-cols-3 max-w-md md:max-w-5xl">
      <article
        class="cursor relative isolate flex flex-col h-28 justify-end overflow-hidden rounded-2xl bg-bg px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img src="../../assets/portf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-card via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <!-- <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm font-body leading-6 text-primary">
          <time :datetime="2303" class="mr-8">2023</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg> -->
        <!-- <div class="flex gap-x-2.5">
              <img :src="project.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-card/10" />
              {{ project.author.name }}
            </div> 
        </div> 
        </div> -->
        <h3 class="mt-3 text-lg font-semibold font-body leading-6 text-primary">
          <a href="/">
            <span class="absolute inset-0" />
            Old Portfolio
          </a>
        </h3>
      </article>
      <article
        class="cursor relative isolate flex flex-col h-40 justify-end overflow-hidden rounded-2xl bg-bg px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img src="../../assets/blog.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-card via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <!-- <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm font-body leading-6 text-primary">
          <time :datetime="project.datetime" class="mr-8">{{ project.date }}</time>
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img :src="project.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-card/10" />
              {{ project.author.name }}
            </div>
          </div>
        </div> -->
        <h3 class="mt-3 text-lg font-semibold font-body leading-6 text-primary">
          <a href="/">
            <span class="absolute inset-0" />
            Blog
          </a>
        </h3>
      </article>
      <article
        class="cursor relative isolate flex flex-col h-40 justify-end overflow-hidden rounded-2xl bg-bg px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img src="../../assets/portf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-card via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <!-- <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm font-body leading-6 text-primary">
          <time :datetime="project.datetime" class="mr-8">{{ project.date }}</time> -->
        <!-- <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="flex gap-x-2.5">
              <img :src="project.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-card/10" />
              {{ project.author.name }}
            </div>
          </div>
        </div> -->
        <h3 class="mt-3 text-lg font-heading leading-6 text-primary">
          <a href="/">
            <span class="absolute inset-0" />
            Portfolio
          </a>
        </h3>
      </article>
    </div>
    <!-- <div class="w-80 hover:bg-zinc-900 rounded-xl p-4">
      <h4 class="text-xl font-heading py-4">Old Portfolio</h4>
      <p class="py-2">Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div class="flex gap-2 hover:text-secondary">
        <LinkIcon />
        <a href="/">florianbeaumont.netlify.com</a>
      </div>
    </div> -->
  </SectionSlot>
</template>
