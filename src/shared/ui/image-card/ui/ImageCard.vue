<template>
  <div
    v-if="!computedBaner.delete"
    class="image-card"
    :class="{ 'image-card_new': !computedBaner.id }"
  >
    <div @click="changeImage" class="image-card__image">
      <BasePicture
        v-if="computedBaner.id"
        :srcset="computedBaner.image.webp"
        :src="computedBaner.image.image"
        :lazy="true"
      />

      <div v-else class="image-card__new-image">
        <BasePicture v-if="computedBaner.image !== ''" :srcset="computedBaner.image" />
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

      <v-text-field v-model="computedBaner.url" label="URL"></v-text-field>

      <v-text-field v-model="computedBaner.text_uk" label="Текст (укр)"></v-text-field>

      <v-text-field v-model="computedBaner.text_ru" label="Текст (рос)"></v-text-field>
    </div>

    {{ index }}
    <div @click="$emit('delete', computedBaner.id)" class="image-card__close"></div>
  </div>
</template>

<script setup lang="ts">
import { AddImage, BasePicture } from '@/shared/ui'
import { computed, reactive, ref, watch } from 'vue'
import { BaseSvg } from '@/shared'
const props = defineProps(['index', 'banner'])
const emit = defineEmits(['delete', 'update:banner'])

const computedBaner = computed({
  get() {
    return props.banner
  },
  set(value) {
    emit('update:banner', value)
  }
})

// console.log(objInfo)

const inputFile = ref<HTMLInputElement | null>(null)

function changeImage() {
  if (inputFile.value) {
    inputFile.value.click()
  }
}

function newImage(event: Event & { target: { files: FileList } }) {
  const reader = new FileReader()

  reader.readAsDataURL(event.target.files[0])

  reader.onload = () => {
    computedBaner.value.image = reader.result
    console.log(1223423)
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
