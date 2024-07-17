<template>
  <div>
    <h2 class="stock-page__title">Список сторінок</h2>
    <div class="stock-page__button">
      <router-link to="page-create">
        <v-btn> Створити нову</v-btn>
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
import { useRouter } from 'vue-router'

const breadcrumbs = [
  {
    title: 'Адмін',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Сторінки',
    disabled: true
  }
]

const router = useRouter()

const tableData = {
  headers: [{ name: 'Назва' }, { name: 'Дата створення' }, { name: 'Статус' }],
  rows: [
    { name: 'Головна сторінка', date: '12.06.2020', state: 'ВКЛ' },
    { name: 'Про кінотеатр', date: '14.06.2020', state: 'ВЫКЛ' },
    { name: 'Кафе-бар', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Vip-зал', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Реклама', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Дитяча кімната', date: '11.06.2020', state: 'ВКЛ' }
  ],
  showDeleteIcon: false
}

const handleEditRow = (index: number) => {
  console.log('Редактировать строку', index)
  switch (index) {
    case 0:
      router.push('/admin/pages/home-page')
      break
    case 1:
      router.push('/admin/pages/about-cinema-page')
      break
    case 2:
      router.push('/admin/pages/cafe-bar')
      break
    case 3:
      router.push('/admin/pages/vip-hall')
      break
    case 4:
      router.push('/admin/pages/advertising')
      break
    case 5:
      router.push('/admin/pages/children-room')
      break
  }
}

const handleDeleteRow = (index: number) => {
  console.log('Удалить строку', index)
}
</script>

<style lang="scss">
@import 'styles';
</style>
