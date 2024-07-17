<template>
  <div class="nums-statistics">
    <div class="nums-statistics__doughnut">
      <Doughnut :data="dataDoughnut" />
    </div>

    <div class="nums-statistics__line">
      <Bar :data="dataBar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  ChartData,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js'
import { Doughnut, Bar } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
)

const props = defineProps(['statistics'])
const emit = defineEmits(['update:statistics'])

const statistics = computed({
  get() {
    return props.statistics
  },
  set(value) {
    emit('update:statistics', value)
  }
})

ChartJS.register(ArcElement, Tooltip, Legend)

const dataDoughnut = computed(() => {
  console.log(statistics.value)

  return {
    labels: ['Чоловіки', 'Жінки'],
    datasets: [
      {
        backgroundColor: ['#555', '#999'],
        data: [statistics.value.men, statistics.value.women]
      }
    ]
  }
})

const dataBar = {
  labels: ['Поточний місяц'],
  datasets: [
    {
      backgroundColor: '#f87979',
      data: [statistics.value.current_month_income]
    }
  ]
}
</script>

<style lang="scss" scoped>
@import 'NumsStatistics';
</style>
