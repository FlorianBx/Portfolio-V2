<script setup lang="ts">
import { reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const menuItems = reactive([
  { name: 'Home', link: '/', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Projects', link: '/projects', current: false },
  { name: 'Blog', link: '/blog', current: false },
  { name: 'Contact', link: '/contact', current: false },
])
</script>

<template>
  <div class="hidden lg:block fixed -right-40 p-4 top-48 rotate-90">
    <ul class="flex gap-4 font-bold text-lg">
      <li
        v-for="item in menuItems"
        :class="item.name === 'Home' ? 'text-primary font-body cursor-pointer' : 'cursor-pointer font-body'"
        :key="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <Disclosure as="nav" class="bg-transparent" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 top-9 right-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel
      class="sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-card rounded-md shadow-md space-y-1 px-2 py-4">
        <DisclosureButton
          v-for="item in MenuItems"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-body',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
