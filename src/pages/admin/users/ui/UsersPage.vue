<template>
  <div class="users">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <div class="users__search">
      <BaseInput v-model="search" placeholder="Пошук користувача" />
    </div>

    <div class="users__table">
      <BaseTable
        :headers="headers"
        :rows="rows"
        :show-delete-icon="true"
        @edit-row="handleEditRow"
        @delete-row="handleDeleteRow"
      />
    </div>

    <div class="users__pagination">
      <v-pagination v-model="curPage" :total-visible="10" :length="quantityPage"></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { UsersApi } from '@/shared/api/gen'
import type { UserOutSchema } from '@/shared/api/gen'
import { useApi } from '@/shared/api'
import BaseTable from '@/shared/ui/base/table/ui/BaseTable.vue'
import { computed } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'

interface userInfo {
  id: string
  birthday: string
  email: string
  phone: string
  fullName: string
  nickName: string
  city: string
}

const router = useRouter()
const api = useApi(UsersApi)
const search = ref<string>('')
const curPage = ref<number>(1)
const allUsers = ref<UserOutSchema[]>([])
const currentUsers = reactive<UserOutSchema[]>([])
const headers: Array<string> = [
  'ID',
  'День народження',
  'Email',
  'Телефон',
  'ПІБ',
  'Nickname',
  'Місто'
]
const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: 'statistics'
  },
  {
    title: 'Users',
    disabled: true
  }
]

watch(curPage, () => {
  getInfo(curPage.value)
})

watch(search, () => {
  setTimeout(() => {
    getInfo(1, search.value)
  }, 1000)
})

const quantityPage = computed(() => {
  return Math.ceil(allUsers.value.length / 15)
})

const rows = computed(() => {
  const changeFormatUsers: Array<userInfo> = []

  currentUsers.forEach((item) => {
    changeFormatUsers.push({
      id: item.id,
      birthday: item.birthday,
      email: item.email,
      phone: item.phone_number,
      fullName: `${item.last_name} ${item.first_name}`,
      nickName: item.nickname,
      city: item.city_display
    })
  })

  console.log(changeFormatUsers)

  return changeFormatUsers
})

async function getInfo(page: number, search: string = '') {
  const response = await api.datatable({
    searchLine: search,
    page: page,
    pageSize: 15
  })

  currentUsers.length = 0
  currentUsers.push(...response.data.results)
}
getInfo(1)

async function getAllUsers() {
  const response = await api.datatable()

  allUsers.value = response.data.results
}
getAllUsers()

////////////////////////////////////////////////////////////

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

<style lang="scss" scoped>
@import 'styles';
</style>
