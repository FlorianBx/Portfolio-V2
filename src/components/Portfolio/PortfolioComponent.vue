<script setup lang="ts">
import PortfolioElementComponent from '../PortfolioElement/PortfolioElementComponent.vue'
import SectionSlot from '../SectionSlot/SectionSlot.vue'

// const portfolio = [
//   {
//     id: 1,
//     title: 'Keep calm and carry on',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl: '../../assets/portf.png',
//     date: 'Mar 16, 2020',
//     datetime: '2023-03-16',
//     author: {
//       name: 'Florian Beaumont',
//       imageUrl:
//         'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
//     },
//   },
//   {
//     id: 2,
//     title: 'Vue js is the best',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl: '../../assets/portf.png',
//     date: 'Mar 16, 2020',
//     datetime: '2023-11-16',
//     author: {
//       name: 'Florian Beaumont',
//       imageUrl:
//         'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
//     },
//   },
//   {
//     id: 3,
//     title: 'how to use tailwindcss',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl: '../../assets/portf.png',
//     date: 'Mar 16, 2020',
//     datetime: '2023-10-16',
//     author: {
//       name: 'Florian Beaumont',
//       imageUrl:
//         'https://media.licdn.com/dms/image/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_200_200/0/1696890003423?e=1703721600&v=beta&t=EPpWoAewxUjwpi4QJsFOl_gYNoOK7m_wfVrcEOwgcGk',
//     },
//   },
// ]
</script>

<template>
  <SectionSlot>
    <div class="text-start max-w-md md:max-w-5xl">
      <h2 class="text-3xl font-bold font-heading tracking-tight text-primary sm:text-4xl">Portfolio</h2>
      <p class="mt-2 text-lg font-body leading-8 text-primary">
        Vel dolorem qui facilis soluta sint aspernatur totam cumque.
      </p>
    </div>
    <!-- Github section  -->
    <PortfolioElementComponent technology="#42b883"></PortfolioElementComponent>
    <PortfolioElementComponent technology="#61DAFB">
      <template #title>Blog</template>
      <template #tech>React</template>
      <template #img>
        <img src="../../assets/blog.webp" alt="" class="-z-10 h- w-48 object-contain rounded-md" />
      </template>
    </PortfolioElementComponent>
    <PortfolioElementComponent technology="#42b883"></PortfolioElementComponent>
  </SectionSlot>
</template>
