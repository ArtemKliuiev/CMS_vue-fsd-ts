<template>
  <div class="image-card" :class="{ 'image-card_new': addNewImage }">
    <div @click.stop="dialog = true" class="image-card__image">
      <BasePicture
        v-if="addNewImage"
        @click="$emit('changeImage', imgInfo)"
        :srcset="imgInfo.image"
      />

      <BasePicture
        v-else
        @click="$emit('changeImage', imgInfo)"
        :srcset="imgInfo.image.webp"
        :src="imgInfo.image.image"
        :lazy="true"
      />
    </div>

    <div @click="$emit('delete', imgInfo)" class="image-card__close"></div>
  </div>

  <v-dialog v-model="dialog" width="auto">
    <AddImage :info="imgInfo" @addImage="changeImage" @closeModal="dialog = false" />
  </v-dialog>
</template>

<script setup lang="ts">
import { AddImage, BasePicture } from '@/shared/ui'
import { ref } from 'vue'
defineProps(['imgInfo', 'addNewImage'])

const dialog = ref<boolean>(false)

function changeImage(e) {
  console.log(e)
}
</script>

<style lang="scss">
@import 'styles';
</style>
