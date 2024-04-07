import { createApp } from 'vue'
import { scrollTo } from './directives/ScrollTo'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.directive('scroll-to', scrollTo)
app.mount('#app')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('service-worker registered')
      })
      .catch((registrationError) => {
        console.log('service-worker registration failed: ', registrationError)
      })
  })
}
