<template>
  <div class="auth-component">
    <h1 class="auth-component__title">
      <span v-if="place === 'auth'">Вхід в аккаунт</span>
      <span v-else>Реєстрація</span>
    </h1>

    <div v-if="place === 'registration'" class="auth-component__input auth-component__name">
      <label for="">Имя</label>

      <BaseInput />
    </div>

    <div v-if="place === 'registration'" class="auth-component__input auth-component__email">
      <label for="">Email</label>

      <BaseInput />
    </div>

    <div v-if="place === 'auth'" class="auth-component__input auth-component__login">
      <label for="">Логін</label>

      <BaseInput />
    </div>

    <div class="auth-component__input auth-component__password">
      <label for="">Пароль</label>

      <BaseInput />
    </div>

    <div class="auth-component__input auth-component__btn">
      <v-btn>Ввійти</v-btn>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
defineProps(['place'])
</script>

<style lang="scss" scoped>
@import './styles';
</style>
