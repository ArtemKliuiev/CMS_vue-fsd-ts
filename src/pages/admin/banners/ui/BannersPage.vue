<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <BannersSection :items="topSliders" />
  </div>
</template>

<script setup lang="ts">
import { BannersSection } from '@/widgets/banners'
import { useApi } from '@/shared/api'
import { SlidersApi } from '@/shared/api/gen'
import { ref } from 'vue'

const topSliders = ref<Array<{}>>([])
const api = useApi(SlidersApi)
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

async function getTopSliders() {
  const response = await api.getTopSlider({})

  topSliders.value = response.data.items
  console.log(response)
}
getTopSliders()
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
