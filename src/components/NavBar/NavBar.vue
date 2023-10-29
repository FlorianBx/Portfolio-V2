<script setup lang="ts">
import { reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const menuItems = reactive([
  { name: 'Home', link: '#home', current: false },
  { name: 'Portfolio', link: '#portfolio', current: false },
  { name: 'About', link: '#about', current: true },
  { name: 'Blog', link: '#blog', current: false },
  { name: 'Contact', link: '#home', current: false },
])

const updateCurrentItem = (itemName: string): void => {
  menuItems.forEach((item) => {
    item.current = item.name === itemName
  })
}
</script>

<template>
  <div class="hidden lg:block fixed -right-40 p-4 top-48 rotate-90">
    <ul class="flex gap-4 font-bold text-lg">
      <li
        v-for="item in menuItems"
        :class="[item.current ? 'text-secondary font-bold cursor-pointer font-body' : 'cursor-pointer font-body']"
        :key="item.name"
      >
        <a @click="updateCurrentItem(item.name)" v-scroll-to="item.link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
  <div class="z-50 lg:hidden fixed right-0 left-0 bottom-0 p-8 bg-card/90">
    <ul class="flex gap-4 font-bold text-md">
      <li
        v-for="item in menuItems"
        :class="[item.current ? 'text-secondary font-bold cursor-pointer font-body' : 'cursor-pointer font-body']"
        :key="item.name"
      >
        <a v-if="item.name !== 'Contact'" @click="updateCurrentItem(item.name)" v-scroll-to="item.link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
  <div class="">
    <a
      class="absolute top-8 lg:right-24 md:right-32 right-16 rounded-md bg-button px-3.5 py-2.5 text-sm font-semibold font-body text-primary shadow-sm hover:bg-hover"
      href="#"
    >
      Portfolio ➤
    </a>
  </div>
  <Disclosure as="nav" class="bg-transparent" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 top-9 right-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="z-50 relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-9 w-9" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel
      class="z-50 lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center"
    >
      <div class="shadow-md space-y-1 px-2 py-4">
        <DisclosureButton
          v-for="item in menuItems"
          :key="item.name"
          as="a"
          :href="item.link"
          :class="[
            item.current ? 'bg-card text-primary font-body' : 'text-primary hover:bg-hover hover:text-white',
            'block rounded-md px-3 py-2 lg:text-base text-3xl font-body',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
