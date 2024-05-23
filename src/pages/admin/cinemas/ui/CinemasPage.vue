<template>
  <div>
    cinemas
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <router-link to="cinemas-card-cinema">
      <v-btn>Добавить</v-btn>
    </router-link>

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
    title: 'Cinemas',
    disabled: true
  }
]

</script>

<style lang="scss" scoped>
@import "styles";
</style>