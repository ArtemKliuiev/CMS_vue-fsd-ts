<template>
  <div class="auth-component">
    <h1 class="auth-component__title">
      <span v-if="place === 'auth'">Вхід в аккаунт</span>
      <span v-else>Реєстрація</span>
    </h1>

    <div v-if="place === 'registration'" class="auth-component__registration">
      <div class="auth-component__input">
        <label for="">Ім'я</label>

        <BaseInput v-model="name" />
      </div>

      <div class="auth-component__input">
        <label for="">Прізвище</label>

        <BaseInput v-model="lastName" />
      </div>

      <div class="auth-component__input">
        <label for="">Email</label>

        <BaseInput v-model="email" />
      </div>

      <div v-if="place === 'registration'" class="auth-component__input">
        <label for="">Пароль</label>

        <BaseInput v-model="createPass" />
      </div>

      <div v-if="place === 'registration'" class="auth-component__input">
        <label for="">Повторіть пароль</label>

        <BaseInput v-model="confirmPass" />
      </div>
    </div>

    <div v-if="place === 'auth'" class="auth-component__auth">
      <div class="auth-component__input">
        <label for="">Логін</label>

        <BaseInput v-model="login" />
      </div>

      <div class="auth-component__input">
        <label for="">Пароль</label>

        <BaseInput v-model="pass" />
      </div>
    </div>

    <div class="auth-component__input auth-component__btn">
      <v-btn @click="authentication" v-if="place === 'auth'">Ввійти</v-btn>
      <v-btn @click="registration" v-else>Зареєструватися</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { ref } from 'vue'
import { authFunc, regisFunc } from '@/shared/api'
import { useRouter } from 'vue-router'
import { checkAdmin } from '@/shared/api/useApiOptions/auth/checkAdmin'

checkAdmin()
defineProps(['place'])

const router = useRouter()

const name = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const createPass = ref<string>('')
const confirmPass = ref<string>('')
const login = ref<string>('')
const pass = ref<string>('')

async function authentication() {
  const request = await authFunc(login.value, pass.value)
  if (request.result) {
    if (request.admin) {
      await router.push('/admin/statistics')
    } else {
      await router.push('/')
    }
  }
}

function registration() {
  regisFunc({
    first_name: name.value,
    last_name: lastName.value,
    email: email.value,
    password1: createPass.value,
    password2: confirmPass.value
  })
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
