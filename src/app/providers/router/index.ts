import { createRouter, createWebHistory } from 'vue-router'
import { checkAdmin } from '@/shared/api/useApiOptions/auth/checkAdmin'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to) => {
  if (to.matched[0].path === '/admin') {
    return checkAdmin().then((info) => {
      if (info) {
        return true
      } else {
        alert('У вас немає доступу до панелі адміністратора')
      }

      return { name: 'main' }
    })
  }
})
