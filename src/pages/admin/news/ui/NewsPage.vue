<template>
  <div>
    News
    <BaseTable :headers="tableData.headers" :rows="tableData.rows"></BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from "@/shared/ui/base/table/ui/BaseTable.vue";

const tableData = {
  headers: ['Название', 'Дата создания', 'Статус'],
  rows: [
    { name: '3 билета в подарок', date: '12.06.2020', state: 'ВКЛ' },
    { name: '5 билета в подарок', date: '14.06.2020', state: 'ВЫКЛ' },
    { name: '2 билета в подарок', date: '11.06.2020', state: 'ВКЛ' }
  ]
};
</script>

<style lang="scss" scoped>
@import "styles";
</style>