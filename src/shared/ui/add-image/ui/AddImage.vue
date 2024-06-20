<template>
  <div class="add-image">
    <div @click="$emit('closeModal')" class="add-image__close"></div>

    <div class="add-image__main">
      <v-file-input
        class="add-image__add"
        accept="image/png, image/jpeg, image/bmp"
        @change="getImage"
        prepend-icon="mdi-camera"
        label="Завантажити зображення"
      ></v-file-input>

      <v-text-field v-model="objInfo.url" label="URL"></v-text-field>

      <v-textarea v-model="objInfo.textUk" label="Текст (укр)"></v-textarea>

      <v-textarea v-model="objInfo.textRu" label="Текст (рос)"></v-textarea>

      <v-btn @click="addImage">Зберегти</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const emit = defineEmits(['addImage', 'closeModal'])
const props = defineProps(['imageInfo', 'newImage'])

interface objectInfo {
  url?: string
  image: string | ArrayBuffer | null
  textUk?: string
  textRu?: string
}

const objInfo = reactive<objectInfo>({
  image: ''
})

if (props.newImage) {
  console.log(props.imageInfo)
} else {
  objInfo.url = props.imageInfo.url
  objInfo.textRu = props.imageInfo.text_ru
  objInfo.textUk = props.imageInfo.text_uk
  console.log(props.imageInfo)
}

function addImage() {
  emit('addImage', objInfo)
}

function getImage(event: Event & { target: { files: FileList } }) {
  const reader = new FileReader()

  reader.readAsDataURL(event.target.files[0])

  reader.onload = () => {
    objInfo.image = reader.result
  }
}
</script>

<style lang="scss" scoped>
@import 'AddImage';
</style>
