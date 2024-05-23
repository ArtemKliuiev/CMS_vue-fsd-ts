<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <h2 class="film-list__title">Список фильмов текущих</h2>
    <div class="film-list__wrapper">
      <router-link :to="{ path: `/admin/movies-create` }">
        <MovieCard :card="movieCardData" />
      </router-link>
    </div>

    <h2 class="film-list__title">Список фильмов которые покажут скоро</h2>
    <div class="film-list__wrapper">
      <router-link :to="{ path: `/admin/movies-create` }">
        <MovieCard :card="movieCardData" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '@/entities/movies/ui/movie-card/MovieCard.vue'

const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Movies',
    disabled: true
  }
]

const movieCardData = {
  img: {
    webp: './image.webp',
    default: './image.jpg'
  }
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
