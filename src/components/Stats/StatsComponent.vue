<template>
  <div>
    <h3 class="text-base font-semibold leading-6 text-gray-100">Linkedin 7 derniers jours</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-gray-900 px-4 py-5 shadow sm:p-6"
      >
        <dt class="truncate text-sm font-medium text-white-500">{{ item.name }}</dt>
        <dd
          :style="{ color: item.id === 2 || item.id === 3 ? 'green' : '' }"
          class="mt-1 text-3xl font-semibold tracking-tight text-white-900"
        >
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { id: 1, name: 'Impressions de posts', stat: '1088' },
  { id: 2, name: 'Croissance', stat: '+399.1%' },
  { id: 3, name: 'Vue du Profil', stat: '+200%' },
]
</script>
