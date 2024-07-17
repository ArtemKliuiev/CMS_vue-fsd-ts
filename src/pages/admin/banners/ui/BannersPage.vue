<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <BannersSection v-if="topSliders" :dataSliders="topSliders" @sendBanners="sendTopBanners" />

    {{ topSliders }}
  </div>
</template>

<script setup lang="ts">
import { BannersSection } from '@/widgets/banners'
import { useApi } from '@/shared/api'
import { SlidersApi } from '@/shared/api/gen'
import { onMounted, ref } from 'vue'
import { TopSliderUpdateSchema } from '@/shared/api/gen'

const topSliders = ref<TopSliderUpdateSchema>({})

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

onMounted(() => {
  getTopSliders()
})

async function getTopSliders() {
  const api = await useApi(SlidersApi)

  const response = await api.getTopSlider({})

  topSliders.value = response.data
}

async function sendTopBanners(bannersArray: TopSliderUpdateSchema) {
  const api = await useApi(SlidersApi)

  console.log(bannersArray)

  const response = await api.updateTopSlider({
    topSliderUpdateSchema: bannersArray
  })

  console.log(response)
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
