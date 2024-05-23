<template>
  <div>
    Кафе-бар
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [
  {
    title: 'Pages',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Cafe-bar',
    disabled: true
  }
]
</script>

<style lang="scss"></style>
