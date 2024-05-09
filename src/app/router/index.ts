import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../../pages/website/MainPage.vue')
    }
  ]
})

export default router
