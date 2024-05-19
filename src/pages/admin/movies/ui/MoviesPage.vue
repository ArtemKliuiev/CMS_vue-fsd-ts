<template>
  <div>
    movies
    <MovieCard :card="movieCardData"/>
  </div>
  <Seo
      :valueTitle="title"
      :valueDescription="description"
      :placeholderInput="'Title'"
      :placeholderDescription="'Description'"
      @update:valueTitle="handleInput"
      @update:valueDescription="handleDescription"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieCard from "@/entities/ui/movie-card/MovieCard.vue";
import Seo from "@/widgets/headers/admin/ui/seo/Seo.vue";

const movieCardData = {
  img: {
    webp: './image.webp',
    default: './image.jpg'
  }
};

const title = ref('');
const description = ref('');

const handleInput = (value: string) => {
  title.value = value;
  console.log(value)
};

const handleDescription = (value: string) => {
  description.value = value;
  console.log(value)
}

</script>

<style lang="scss" scoped>
@import "styles";
</style>