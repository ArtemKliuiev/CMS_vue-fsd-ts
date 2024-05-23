// router vue guard
import { AdminLayout, WebsiteLayout } from '@/shared/ui'

import {
  BannersPage,
  CinemasPage,
  MoviesPage,
  MovieCreate,
  NewsPage,
  NewsletterPage,
  //wwwww
  PagesPage,
  HomePage,
  AboutCinemaPage,
  CafeBar,
  StatisticsPage,
  StockPage,
  UsersPage,
  AuthPage,
  RegistrationPage
} from '@/pages'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/website/MainPage.vue'),
    meta: {
      layout: WebsiteLayout
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage,
    meta: {
      layout: WebsiteLayout
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage,
    meta: {
      layout: WebsiteLayout
    }
  },
  {
    path: '/admin',
    meta: {
      layout: AdminLayout
    },
    children: [
      {
        path: 'statistics',
        name: 'statistics',
        component: StatisticsPage
      },
      {
        path: 'pages',
        name: 'pages',
        component: PagesPage
      },
      {
        path: 'pages/home-page',
        name: 'home-page',
        component: HomePage
      },
      {
        path: 'pages/about-cinema-page',
        name: 'about-cinema-page',
        component: AboutCinemaPage
      },
      {
        path: 'pages/cafe-bar',
        name: 'cafe-bar',
        component: CafeBar
      },
      {
        path: 'banners',
        name: 'banners',
        component: BannersPage
      },
      {
        path: 'news',
        name: 'news',
        component: NewsPage
      },
      {
        path: 'movies',
        name: 'movies',
        component: MoviesPage
      },
      {
        path: 'movies-create',
        name: 'movies-create',
        component: MovieCreate
      },
      {
        path: 'cinemas',
        name: 'cinemas',
        component: CinemasPage
      },
      {
        path: 'newsletter',
        name: 'newsletter',
        component: NewsletterPage
      },
      {
        path: 'stock',
        name: 'stock',
        component: StockPage
      },
      {
        path: 'users',
        name: 'users',
        component: UsersPage
      }
    ]
  }
]
