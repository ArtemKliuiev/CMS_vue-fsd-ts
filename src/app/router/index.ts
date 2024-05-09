import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory('kino-cms'),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../../pages/main.vue')
    }
  ]
})

export default router
