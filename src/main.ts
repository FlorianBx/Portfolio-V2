import { createApp } from 'vue'
import { scrollTo } from './directives/ScrollTo'
import './style.css'
import App from './App.vue'

createApp(App).directive('scroll-to', scrollTo).mount('#app')
