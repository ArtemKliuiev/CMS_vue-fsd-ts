<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <v-btn @click="addBanner">Додати</v-btn>

      <div class="banners-section__checkbox">
        <v-switch v-model="selected" color="#eee" :label="switchInfo"></v-switch>
      </div>
    </div>

    <div class="banners-section__image-card">
      <ImageCard
        v-for="(item, index) in banners"
        :key="item"
        :imgInfo="item"
        v-model:banner="banners[index]"
        @delete="deleteBanner(index)"
      />
    </div>

    <div class="banners-section__bottom">
      <div class="banners-section__select">
        <span>Швидкість обертання</span>

        <select>
          <option>5c</option>
          <option>10c</option>
          <option>15c</option>
        </select>
      </div>

      <v-btn @click="saveChange">Зберегти</v-btn>
    </div>
  </div>

  <!--  <v-dialog v-model="dialog" width="auto">-->
  <!--    <div class="alert">-->
  <!--      <h3>Видалити баннер</h3>-->

  <!--      <div class="alert__btn">-->
  <!--        <v-btn @click="delBtn = !delBtn">Видалити</v-btn>-->

  <!--        <v-btn @click="dialogDelUser = false">Відмінити</v-btn>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </v-dialog>-->
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, onUpdated, reactive, ref, toRefs, watch } from 'vue'
import { ImageCard } from '@/shared'
import { compareObjects } from '@/shared'
import { saveChange } from './saveChange'

const props = defineProps(['items'])

interface Banner {
  id: number
  image: object
  text_ru: string
  text_uk: string
  delete: Boolean
}

const switchInfo = ref<string>('Увімкнено')
const selected = ref<boolean>(true)
const newArr = []

const banners = computed(() => props.items)

watch(selected, () => {
  if (selected.value) {
    switchInfo.value = 'Увімкнено'
  } else {
    switchInfo.value = 'Вимкнено'
  }
})

function addBanner() {
  if (banners.value.length < 10) {
    banners.value.push({} as never)
  }
  console.log(banners.value)
}

function deleteBanner(index: number) {
  const current = banners.value[index]
  if (current.id) {
    current.delete = true
  } else {
    banners.value.splice(index, 1)
  }
}

function saveChange() {
  const one = banners.value[0]

  console.log(props.items)
}
</script>

<style lang="scss">
@import 'styles';
</style>
