<template>
  <div class="movie-card">
    <div class="movie-card__photo">
      <BasePicture :srcset="props.card.img.webp" :src="props.card.img.default" :alt="'movie'" />
    </div>
    <p class="movie-card__name">Приключение животных</p>
  </div>
</template>

<script setup lang="ts">
import { BasePicture } from '@/shared/ui'

import { defineProps } from 'vue'

interface Card {
  img: {
    webp: string
    default: string
  }
}

const props = defineProps<{ card: Card }>()
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
