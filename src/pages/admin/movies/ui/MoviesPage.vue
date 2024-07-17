<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <h2 class="film-list__title">Список поточних фільмів</h2>
    <div class="film-list__wrapper">
      <router-link
        v-for="movieCard in currentMovies"
        :key="movieCard.slug"
        :to="{ path: '/admin/movies-create', query: { slug: movieCard.slug } }"
      >
        <MovieCard :movieCard="movieCard" />
      </router-link>
    </div>

    <h2 class="film-list__title">Список фільмів, які покажуть незабаром</h2>
    <div class="film-list__wrapper">
      <router-link
        v-for="movieCard in upcomingMovies"
        :key="movieCard.slug"
        :to="{ path: '/admin/movies-create', query: { slug: movieCard.slug } }"
      >
        <MovieCard :movieCard="movieCard" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '@/entities/movies/ui/movie-card/MovieCard.vue'
import { MoviesApi } from '@/shared'
import { useApi } from '@/shared'
import { ref } from 'vue'

const movieCards = ref<Card[]>([])
const currentMovies = ref<Card[]>([])
const upcomingMovies = ref<Card[]>([])

const currentDate = ref(getCurrentDate())

const breadcrumbs = [
  {
    title: 'Адмін',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Фільми',
    disabled: true
  }
]

function getCurrentDate(): string {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function sortMovies() {
  currentMovies.value = movieCards.value.filter((movie) => movie.released < currentDate.value)
  upcomingMovies.value = movieCards.value.filter((movie) => movie.released >= currentDate.value)
}

async function getMovieCards() {
  const api = await useApi(MoviesApi)

  const response = await api.getAllMovieCards({
    pageSize: 6,
    page: 1
  })

  movieCards.value = response.data.results as Card[]
  sortMovies()
}

getMovieCards()
</script>

<style lang="scss" scoped>
@import 'MoviesPage';
</style>
