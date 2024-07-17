<template>
  <div class="movie-card">
    <div class="movie-card__photo">
      <BasePicture
        :srcset="movieCard.card_img.image_webp"
        :src="movieCard.card_img.image"
        :alt="movieCard.card_img.alt"
      />
    </div>
    <p class="movie-card__name">{{ movieCard.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { BasePicture } from '@/shared/ui'

interface Card {
  card_img: {
    alt: string
    image: string
    image_webp: string
  }
  legal_age: string
  name: string
  released: string
  slug: string
  techs: [
    {
      color: string
      id: number
      name: string
    }
  ]
}

const props = defineProps<{ movieCard: Card }>()
</script>

<style lang="scss">
@import 'MovieCard';
</style>
