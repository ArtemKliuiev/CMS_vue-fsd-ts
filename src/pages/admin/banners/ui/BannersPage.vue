<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import serverPath from '@/shared/api'

axios.get(serverPath + '/api/auth/cities/choices/').then((item) => {
  console.log(item)
})

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
