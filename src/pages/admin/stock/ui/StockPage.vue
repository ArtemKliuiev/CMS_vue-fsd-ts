<template>
  <div>
    <h2 class="stock-page__title">Список Акцій</h2>
    <div class="stock-page__button">
      <router-link to="stock-create">
        <v-btn>Створити Акцію</v-btn>
      </router-link>
    </div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <BaseTable
      :headers="tableData.headers"
      :rows="tableData.rows"
      :show-delete-icon="tableData.showDeleteIcon"
    ></BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/shared/ui/base/table/ui/BaseTable.vue'

const breadcrumbs = [
  {
    title: 'Адмін',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Акції',
    disabled: true
  }
]

const tableData = {
  headers: [{ name: 'Назва' }, { name: 'Дата створення' }, { name: 'Статус' }],
  rows: [
    { name: '3 билета в подарок', date: '12.06.2020', state: 'ВКЛ' },
    { name: '5 билета в подарок', date: '14.06.2020', state: 'ВЫКЛ' },
    { name: '2 билета в подарок', date: '11.06.2020', state: 'ВКЛ' }
  ],
  showDeleteIcon: true
}
</script>

<style lang="scss">
@import 'StockPage';
</style>
