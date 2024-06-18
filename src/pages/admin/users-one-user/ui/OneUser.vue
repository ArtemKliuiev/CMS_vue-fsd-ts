<template>
  <div class="user">
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <UserInfo :id="id" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UserInfo } from '@/widgets/user-info'

const router = useRouter()
const id = router.currentRoute.value.params.id
const breadcrumbs = [
  {
    title: 'Admin',
    disabled: false,
    href: '/admin/statistics'
  },
  {
    title: 'Users',
    disabled: false,
    href: '/admin/users'
  },
  {
    title: 'Editing user',
    disabled: true
  }
]
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
