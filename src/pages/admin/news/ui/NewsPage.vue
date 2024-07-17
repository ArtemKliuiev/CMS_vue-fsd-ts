<template>
  <div>
    <h2 class="news-page__title">Список новин</h2>
    <div class="news-page__button">
      <router-link to="news-create">
        <v-btn>Створити Новину</v-btn>
      </router-link>
    </div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <BaseTable
      :headers="tableData.headers"
      :rows="tableData.rows"
      :show-delete-icon="tableData.showDeleteIcon"
      @edit-row="handleEditRow"
      @delete-row="handleDeleteRow"
    />
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
    title: 'Новини',
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

const handleEditRow = (index: number) => {
  console.log('Редактировать строку', index)
}

const handleDeleteRow = (index: number) => {
  console.log('Удалить строку', index)
}
</script>

<style lang="scss">
@import 'NewsPage';
</style>
