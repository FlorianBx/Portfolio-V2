<template>
  <div class="px-2">
    <h3 class="text-base font-semibold font-heading text-primary">Linkedin 7 derniers jours</h3>
    <dl class="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
      <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-card px-4 py-5 shadow sm:p-6">
        <dt class="font-body truncate text-sm font-medium text-white-500">{{ item.name }}</dt>
        <dd
          :style="{ color: item.id === 2 || item.id === 3 ? '#1FD8A4' : '' }"
          class="mt-1 text-3xl font-semibold font-heading tracking-tight text-white-900"
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
