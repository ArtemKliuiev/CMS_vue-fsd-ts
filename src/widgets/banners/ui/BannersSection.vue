<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <div class="banners-section__checkbox">
        <v-switch v-model="selected" color="#eee" :label="switchInfo"></v-switch>
      </div>
    </div>

    <div class="banners-section__image-card">
      <ImageCard
        @changeImage="(e) => console.log(e)"
        v-for="(item, index) in items"
        :key="index"
        :imgInfo="item"
        @delete="deleteFromServer"
      />

      <ImageCard
        @changeImage="(e) => console.log(e)"
        v-for="(item, index) in itemsArray"
        :key="index"
        :imgInfo="item"
        addNewImage="true"
        @delete="deleteFromLocal"
      />

      <div @click="dialog = true" v-if="maxImage > 0" class="banners-section__add-input">
        <BaseSvg id="plus" />
      </div>
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

const delBtn = ref<boolean>(false)
const switchInfo = ref<string>('Увімкнено')
const selected = ref<boolean>(true)
const dialog = ref<boolean>(false)
const dialogDelUser = ref<boolean>(false)
const itemsArray = reactive([])

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

function alertShow() {
  return new Promise((resolve, reject) => {
    watch(delBtn, () => {
      resolve(true)
    })

    watch(dialogDelUser, () => {
      if (!dialogDelUser.value) {
        reject(false)
      }
    })
  })
}

async function deleteFromServer(e: object) {
  dialogDelUser.value = true

  const confirm = await alertShow()

  if (confirm) {
    console.log(e)
  }

  dialogDelUser.value = false
}

function deleteFromLocal(e: object) {
  const index = itemsArray.indexOf(e as never)
  itemsArray.splice(index, 1)
}

function changeImage() {}

function addImage(obj: never) {
  itemsArray.push(obj)
  console.log(itemsArray)
  dialog.value = false
}
</script>

<style lang="scss">
@import 'styles';
</style>
