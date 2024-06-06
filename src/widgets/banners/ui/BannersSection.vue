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
      <InputFile v-for="n in current" :key="n" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { InputFile } from '@/shared/ui'

const current = ref<number>(1)
const selected = ref<boolean>(true)

function addCurrent(condition: boolean) {
  if (condition) {
    if (current.value < 8) {
      current.value++
    }
  } else {
    if (current.value > 1) {
      current.value--
    }
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
