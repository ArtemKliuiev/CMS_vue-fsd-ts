<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <v-btn @click="addImage(true)">Додати</v-btn>

      <div class="banners-section__checkbox">
        <v-switch v-model="selected" color="#eee" :label="switchInfo"></v-switch>
      </div>
    </div>

    <div class="banners-section__image-card">
      <ImageCard v-for="(item, index) in items" :key="index" :imgInfo="item" />

      <ImageCard
        v-for="(item, index) in itemsArray"
        :key="index"
        :imgInfo="item"
        :addNewImage="true"
        :index="index"
        @delete="(info) => deleteFromLocal(info, index)"
        @update="(info) => changeLocal(info, index)"
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

      <v-btn>Зберегти</v-btn>
    </div>
  </div>

  <v-dialog v-model="dialog" width="auto">
    <AddImage @addImage="addImage" @closeModal="dialog = false" />
  </v-dialog>

  <v-dialog v-model="dialogDelUser" width="auto">
    <div class="alert">
      <h3>Видалити баннер</h3>

      <div class="alert__btn">
        <v-btn @click="delBtn = !delBtn">Видалити</v-btn>

        <v-btn @click="dialogDelUser = false">Відмінити</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { BaseSvg, ImageCard } from '@/shared/ui'
import { AddImage } from '@/shared/ui'
const props = defineProps(['items'])

interface objectInfo {
  url?: string
  image: string | ArrayBuffer | null
  text_uk?: string
  text_ru?: string
}

const delBtn = ref<boolean>(false)
const switchInfo = ref<string>('Увімкнено')
const selected = ref<boolean>(true)
const dialog = ref<boolean>(false)
const dialogDelUser = ref<boolean>(false)
const itemsArray = reactive([])
const objInfo = reactive<objectInfo>({
  image: '',
  url: '',
  text_uk: '',
  text_ru: ''
})

watch(selected, () => {
  if (selected.value) {
    switchInfo.value = 'Увімкнено'
  } else {
    switchInfo.value = 'Вимкнено'
  }
})

const maxImage = computed(() => {
  const received: number = props.items.length
  const added: number = itemsArray.length
  return 10 - (received + added)
})

function deleteFromLocal(info, index: number) {
  itemsArray.splice(index, 1)
}

function changeLocal(info, index: number) {
  console.log(info, index)
  itemsArray[index] = info as never
}

function addImage(condition: boolean) {
  if (condition) {
    if (maxImage.value > 0) {
      itemsArray.push(objInfo as never)
    }
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
