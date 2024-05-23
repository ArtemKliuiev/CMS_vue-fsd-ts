<template>
  <div>
    О кинотеатре
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
    title: 'About cinema',
    disabled: true
  }
]
</script>

<style lang="scss"></style>
