<template>
  <div v-if="!bannerInfo.delete" class="image-card" :class="{ 'image-card_new': !bannerInfo.id }">
    <div @click="changeImage" class="image-card__image">
      <BasePicture
        class="skeleton"
        v-if="bannerInfo.id"
        :srcset="bannerInfo.image.webp"
        :src="bannerInfo.image.image"
        :lazy="true"
      />

      <div v-else class="image-card__new-image">
        <BasePicture v-if="bannerInfo.image" :src="bannerInfo.image.image" />
        <BaseSvg v-else id="plus" />
      </div>
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

      <v-text-field v-model="bannerInfo.url" label="URL"></v-text-field>

      <v-text-field v-model="bannerInfo.text_uk" label="Текст (укр)"></v-text-field>

      <v-text-field v-model="bannerInfo.text_ru" label="Текст (рос)"></v-text-field>
    </div>

    {{ index }}
    <div @click="$emit('delete', bannerInfo.id)" class="image-card__close"></div>
  </div>
</template>

<script setup lang="ts">
import { BasePicture } from '@/shared/ui'
import { computed, ref } from 'vue'
import { BaseSvg } from '@/shared'
const props = defineProps(['index', 'banner'])
const emit = defineEmits(['delete', 'update:banner'])

const bannerInfo = ref(props.banner)

// console.log(objInfo)

const inputFile = ref<HTMLInputElement | null>(null)

function changeImage() {
  if (inputFile.value) {
    inputFile.value.click()
  }
}

function newImage(event: Event & { target: { files: FileList } }) {
  const reader = new FileReader()
  const file = event.target.files[0]

  reader.readAsDataURL(file)

  reader.onload = () => {
    bannerInfo.value.image = {}
    bannerInfo.value.image.alt = file.name
    bannerInfo.value.image.filename = file.name
    bannerInfo.value.image.image = reader.result
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
