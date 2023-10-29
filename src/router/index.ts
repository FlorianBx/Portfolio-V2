import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // { path: '/', component: HomePage },
  // { path: '/login', component: LoginPage },
  // { path: '/watch', component: WatchPage },
  // { path: '/next-tick', component: NextTickVue },
  // { path: '/slot', component: SlotPageVue },
  // { path: '/pro-inj', component: ProvideInjectPageVue },
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPageVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
