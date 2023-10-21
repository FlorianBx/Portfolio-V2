<script setup lang="ts">
import { reactive, ref, Ref } from 'vue'

defineProps<{ msg: string }>()
const divShow: Ref<boolean> = ref(false)
const state = reactive({
  countMet: {
    count: 0,
  },
})

const toggleDiv = () => {
  divShow.value = !divShow.value
}

const increment = () => {
  state.countMet.count += 12
}
</script>

<template>
  <div class="flex justify-center items-center h-45">
    <h1 class="text-teal-400" v-if="divShow">{{ msg }}</h1>
    <p class="count" v-else>{{ state.countMet.count }}</p>
  </div>

  <div class="card">
    <button type="button" @click="toggleDiv">[Ref] Toggle is {{ divShow ? 'on' : 'off' }}</button>
    <button type="button" @click="increment" :disabled="divShow">increment</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.count {
  color: #42b883;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.read-the-docs {
  color: #888;
}
</style>
