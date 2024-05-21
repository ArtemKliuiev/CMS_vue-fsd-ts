// router vue guard
import { AdminLayout } from '@/shared/ui'

import {
  BannersPage,
  CinemasPage,
  MoviesPage,
  MovieCreate,
  NewsPage,
  NewsletterPage,
  PagesPage,
  StatisticsPage,
  StockPage,
  UsersPage
} from '@/pages'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/website/MainPage.vue'),
    meta: {
      layout: ''
    }
  },
  {
    path: '/admin/statistics',
    name: 'statistics',
    component: StatisticsPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/pages',
    name: 'pages',
    component: PagesPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/banners',
    name: 'banners',
    component: BannersPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/news',
    name: 'news',
    component: NewsPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/movies',
    name: 'movies',
    component: MoviesPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/movies-create',
    name: 'movies-create',
    component: MovieCreate,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/cinemas',
    name: 'cinemas',
    component: CinemasPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/newsletter',
    name: 'newsletter',
    component: NewsletterPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/stock',
    name: 'stock',
    component: StockPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/users',
    name: 'users',
    component: UsersPage,
    meta: {
      layout: AdminLayout
    }
  }
]
