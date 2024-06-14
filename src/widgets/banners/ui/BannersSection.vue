<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <div class="banners-section__checkbox">
        <v-switch v-model="selected" color="#eee" :label="switchInfo"></v-switch>
      </div>
    </div>

    <div class="banners-section__image-card">
      <ImageCard v-for="(item, index) in items" :key="index" :imgInfo="item" />

      <div @click="dialog = true" class="banners-section__add-input">
        <v-dialog v-model="dialog" width="auto">
          <AddImage />
        </v-dialog>
        <BaseSvg id="plus" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { BaseSvg, ImageCard } from '@/shared/ui'
import { AddImage } from '@/shared/ui'
defineProps(['items'])

const switchInfo = ref<string>('Увімкнено')
const selected = ref<boolean>(true)
const dialog = ref<boolean>(false)

watch(selected, () => {
  if (selected.value) {
    switchInfo.value = 'Увімкнено'
  } else {
    switchInfo.value = 'Вимкнено'
  }
})
</script>

<style lang="scss">
@import 'styles';
</style>
