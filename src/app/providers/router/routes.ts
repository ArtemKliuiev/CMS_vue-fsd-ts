// router vue guard
import { AdminLayout } from '@/shared/ui'

import {
  BannersPage,
  CinemasPage,
  CinemasCardHall,
  CinemasCardCinema,
  MoviesPage,
  MovieCreate,
  NewsPage,
  NewsCreate,
  NewsletterPage,
  PagesPage,
  HomePage,
  AboutCinemaPage,
  CafeBar,
  StatisticsPage,
  StockPage,
  StockCreate,
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
    path: '/admin/pages/home-page',
    name: 'home-page',
    component: HomePage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/pages/about-cinema-page',
    name: 'about-cinema-page',
    component: AboutCinemaPage,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/pages/cafe-bar',
    name: 'cafe-bar',
    component: CafeBar,
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
    path: '/admin/news-create',
    name: 'news-create',
    component: NewsCreate,
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
    path: '/admin/cinemas-card-cinema',
    name: 'cinemas-card-cinema',
    component: CinemasCardCinema,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/admin/cinemas-card-hall',
    name: 'cinemas-card-hall',
    component: CinemasCardHall,
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
    path: '/admin/stock-create',
    name: 'stock-create',
    component: StockCreate,
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
