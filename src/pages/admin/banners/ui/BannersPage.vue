<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
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
