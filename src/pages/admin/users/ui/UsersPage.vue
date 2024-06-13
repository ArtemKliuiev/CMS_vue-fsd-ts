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
  getInfo()
})

watch(search, () => {
  setTimeout(() => {
    getInfo(search.value)
  }, 500)
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

  return changeFormatUsers
})

async function getInfo(search: string = '') {
  const response = await api.usersDatatable({
    searchLine: search,
    page: curPage.value,
    pageSize: 15
  })

  currentUsers.length = 0
  currentUsers.push(...response.data.results)
}
getInfo()

async function getAllUsers() {
  const response = await api.usersDatatable()

  allUsers.value = response.data.results
}
getAllUsers()

const handleEditRow = (index: number) => {
  router.push(`/admin/user/${currentUsers[index].id}`)
}

const handleDeleteRow = async (index: number) => {
  const user = currentUsers[index]

  const info = confirm(`Видалити користувача ${user.first_name} ${user.last_name}`)

  if (info) {
    const deleteUser = await api.deleteById({
      userId: user.id
    })

    if (deleteUser.status === 200) {
      await getInfo()
      alert(`Користувач ${user.first_name} ${user.last_name} видалений`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
