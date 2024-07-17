<template>
  <div>
    cinemas
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <router-link to="cinemas-card-cinema">
      <v-btn>Додати</v-btn>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [
  {
    title: 'Адмін',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Кінотеатри',
    disabled: true
  }
]
</script>

<style lang="scss" scoped>
@import 'CinemasPage';
</style>
