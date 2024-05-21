// router vue guard
import { BannersPage } from '@/pages'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/website/MainPage.vue'),
    meta: {
      part: 'website'
    }
  },
  {
    path: '/admin/statistics',
    name: 'statistics',
    component: () => import('@/pages/admin/statistics'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/pages',
    name: 'pages',
    component: () => import('@/pages/admin/pages'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/banners',
    name: 'banners',
    component: BannersPage,
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/news',
    name: 'news',
    component: () => import('@/pages/admin/news'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/movies',
    name: 'movies',
    component: () => import('@/pages/admin/movies'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/cinemas',
    name: 'cinemas',
    component: () => import('@/pages/admin/cinemas'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/newsletter',
    name: 'newsletter',
    component: () => import('@/pages/admin/newsletter'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/stock',
    name: 'stock',
    component: () => import('@/pages/admin/stock'),
    meta: {
      part: 'admin'
    }
  },
  {
    path: '/admin/users',
    name: 'users',
    component: () => import('@/pages/admin/users'),
    meta: {
      part: 'admin'
    }
  }
]
