<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <BannersSection />
  </div>
</template>

<script setup lang="ts">
import { BannersSection } from '@/widgets/banners'

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
