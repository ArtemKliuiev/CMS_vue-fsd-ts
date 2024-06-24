<template>
  <div class="image-card" :class="{ 'image-card_new': addNewImage }">
    <div @click="changeImage" class="image-card__image">
      <div v-if="addNewImage" class="image-card__new-image">
        <BasePicture v-if="objInfo.image !== ''" :srcset="objInfo.image" />
        <BaseSvg v-else id="plus" />
      </div>

      <BasePicture v-else :srcset="imgInfo.image.webp" :src="imgInfo.image.image" :lazy="true" />
    </div>

    <div class="image-card__main">
      <v-file-input
        ref="inputFile"
        class="image-card__add"
        @change="newImage"
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-camera"
        label="Завантажити зображення"
      ></v-file-input>

      <v-text-field v-model="objInfo.url" label="URL"></v-text-field>

      <v-text-field v-model="objInfo.text_uk" label="Текст (укр)"></v-text-field>

      <v-text-field v-model="objInfo.text_ru" label="Текст (рос)"></v-text-field>
    </div>

    {{ index }}
    <div @click="$emit('delete', objInfo)" class="image-card__close"></div>
  </div>
</template>

<script setup lang="ts">
import { AddImage, BasePicture } from '@/shared/ui'
import { reactive, ref, watch } from 'vue'
import { BaseSvg } from '@/shared'
const props = defineProps(['imgInfo', 'addNewImage', 'index'])
const emit = defineEmits(['delete', 'update'])

const inputFile = ref<HTMLInputElement | null>(null)

interface objectInfo {
  url?: string
  image: string | ArrayBuffer | null
  text_uk?: string
  text_ru?: string
}

const objInfo = reactive<objectInfo>({
  image: '',
  url: props.imgInfo.url,
  text_uk: props.imgInfo.text_uk,
  text_ru: props.imgInfo.text_ru
})

watch(objInfo, () => {
  emit('update', objInfo)
})

function changeImage() {
  if (inputFile.value) {
    inputFile.value.click()
  }
}

function newImage(event: Event & { target: { files: FileList } }) {
  const reader = new FileReader()

  reader.readAsDataURL(event.target.files[0])

  reader.onload = () => {
    objInfo.image = reader.result
    console.log(1223423)
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
