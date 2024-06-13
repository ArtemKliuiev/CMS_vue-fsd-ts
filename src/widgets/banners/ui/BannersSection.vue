<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <div class="banners-section__btn">
        <v-btn @click="addCurrent(true)">Додати</v-btn>
        <v-btn @click="addCurrent(false)">Видалити</v-btn>
      </div>

      <div class="banners-section__checkbox">
        <v-checkbox v-model="selected" label="Вкл"></v-checkbox>
      </div>
    </div>

    <div class="banners-section__input-file">
      <InputFile v-for="(item, index) in items" :key="index" :imgInfo="item" />

      <div class="banners-section__add-input"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { InputFile } from '@/shared/ui'
defineProps(['items'])

const selected = ref<boolean>(true)
</script>

<style lang="scss">
@import 'styles';
</style>
