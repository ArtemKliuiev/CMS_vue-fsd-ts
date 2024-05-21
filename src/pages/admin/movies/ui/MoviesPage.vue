<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    <router-link :to="{path:`/admin/movies-create`}" >
      <MovieCard :card="movieCardData"/>
    </router-link>

  </div>
</template>

<script setup lang="ts">
import MovieCard from "@/entities/ui/movie-card/MovieCard.vue";

const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: 'statistics',
  },
  {
    title: 'Movies',
    disabled: true,
  },
]

const movieCardData = {
  img: {
    webp: './image.webp',
    default: './image.jpg'
  }
};

</script>

<style lang="scss" scoped>
@import "styles";
</style>