<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { instance } from '@/shared/api'

const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Banners',
    disabled: true
  }
]
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
