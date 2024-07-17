<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
  </div>

  <NumsStatistics v-model:statistics="numsStatistics" />
</template>

<script setup lang="ts">
import { useApi } from '@/shared'
import { StatisticApi } from '@/shared'
import { onMounted, ref } from 'vue'
import { NumsStatistics } from '@/widgets'

onMounted(() => {
  getNums()
  getPopularMovies()
  getIncomeMovies()
  getPopularTechs()
})

const numsStatistics = ref({})
const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Statistics',
    disabled: true
  }
]

async function getNums() {
  const api = await useApi(StatisticApi)

  const response = await api.getComputedNums()

  console.log(response.data)

  numsStatistics.value = response.data
}

async function getPopularMovies() {
  const api = await useApi(StatisticApi)

  const response = await api.getMostPopularMovies()

  console.log(response.data)
}

async function getIncomeMovies() {
  const api = await useApi(StatisticApi)

  const response = await api.getMostIncomeMovies()

  console.log(response.data)
}

async function getPopularTechs() {
  const api = await useApi(StatisticApi)

  const response = await api.getMostPopularTechs()

  console.log(response.data)
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
