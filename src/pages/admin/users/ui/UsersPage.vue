<template>
  <div class="users">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <div class="users__search">
      <BaseInput v-model="search" @input="setSearch" placeholder="Пошук користувача" />
    </div>

    <div class="users__table">
      <BaseTable
        :headers="headers"
        :rows="rows"
        :show-delete-icon="true"
        @edit-row="handleEditRow"
        @delete-row="handleDeleteRow"
        @sort="sort"
      />
    </div>

    <div class="users__pagination">
      <v-pagination v-model="curPage" :total-visible="10" :length="quantityPage"></v-pagination>
    </div>

    <v-dialog v-model="dialog" width="auto">
      <div class="users__dialog">
        <h3>Видалити користувача?</h3>

        <div class="users__dialog__buttons">
          <v-btn @click="deleteRow">Так</v-btn>

          <v-btn @click="dialog = false">Ні</v-btn>
        </div>
      </div>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="2000">
      Корисувач видалений

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false"> Закрити </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { type LocationQuery, useRouter } from 'vue-router'
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

interface sortObj extends LocationQuery {
  name: string
  type: string
}

interface queryObj {
  name: string
  type: string
  search: string
}

const snackbar = ref<boolean>(false)
const delUser = ref<number | null>(null)
const dialog = ref<boolean>(false)
const router = useRouter()
const search = ref<string>('')
const curPage = ref<number>(1)
const allUsers = ref<UserOutSchema[]>([])
const currentUsers = reactive<UserOutSchema[]>([])
const query = ref<queryObj>({
  name: '',
  type: '',
  search: ''
})
const headers: Array<Object> = [
  { name: 'ID', sortName: 'id' },
  { name: 'День народження', sortName: 'birthday' },
  { name: 'Email', sortName: 'email' },
  { name: 'Телефон', sortName: 'phone_number' },
  { name: 'ПІБ', sortName: 'fio' },
  { name: 'Nickname', sortName: 'nickname' },
  { name: 'Місто', sortName: 'city' }
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

onMounted(() => {
  const query = router.currentRoute.value.query as sortObj
  if (query) {
    search.value = query.search as string

    sort(query)
    console.log(query)
  } else {
    getInfo()
  }

  getAllUsers()
})

watch(curPage, () => {
  getInfo()
})

function setSearch() {
  setTimeout(() => {
    query.value.search = search.value
    queryReplace()

    getInfo()
  }, 500)
}

function sort(e: sortObj) {
  if (e.type === 'top') {
    getInfo('descending', e.name)
  } else {
    getInfo('ascending', e.name)
  }

  query.value.name = e.name
  query.value.type = e.type

  queryReplace()
}

function queryReplace() {
  router.replace({
    query: { name: query.value.name, type: query.value.type, search: search.value }
  })
}

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

async function getInfo(direction: string = 'descending', sort?: string) {
  const api = await useApi(UsersApi)

  const response = await api.usersDatatable({
    searchLine: search.value,
    page: curPage.value,
    pageSize: 15,
    sort: sort,
    direction: direction
  })

  currentUsers.length = 0
  currentUsers.push(...response.data.results)
}

async function getAllUsers() {
  const api = await useApi(UsersApi)

  const response = await api.usersDatatable()

  allUsers.value = response.data.results
}

const handleEditRow = (index: number) => {
  router.push(`/admin/user/${currentUsers[index].id}`)
}

function handleDeleteRow(index: number) {
  delUser.value = index
  dialog.value = true
}

const deleteRow = async () => {
  const api = await useApi(UsersApi)

  if (delUser.value !== null) {
    const user = currentUsers[delUser.value]

    const deleteUser = await api.deleteUserById({
      userId: user.id
    })
    if (deleteUser.status === 200) {
      await getInfo()
      snackbar.value = true
    }

    dialog.value = false
  }
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
