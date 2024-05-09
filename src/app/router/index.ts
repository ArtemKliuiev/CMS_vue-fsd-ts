import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../../pages/website/MainPage.vue')
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../../pages/website/PageTwo.vue')
    }
  ]
})

export default router
