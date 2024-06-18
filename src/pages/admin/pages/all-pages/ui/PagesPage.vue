<template>
  <div>
    <h2 class="stock-page__title">Список Страниц</h2>
    <div class="stock-page__button">
      <router-link to="stock-create">
        <v-btn>Создать новую</v-btn>
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
    title: 'Admin',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Pages',
    disabled: true
  }
]

const router = useRouter()

const tableData = {
  headers: [{ name: 'Название' }, { name: 'Дата создания' }, { name: 'Статус' }],
  rows: [
    { name: 'Главная страница', date: '12.06.2020', state: 'ВКЛ' },
    { name: 'О кинотеатре', date: '14.06.2020', state: 'ВЫКЛ' },
    { name: 'Кафе-бар', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Vip-зал', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Реклама', date: '11.06.2020', state: 'ВКЛ' },
    { name: 'Детская комната', date: '11.06.2020', state: 'ВКЛ' }
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
