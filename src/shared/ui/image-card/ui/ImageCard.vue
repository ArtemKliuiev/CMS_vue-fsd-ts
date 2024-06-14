<template>
  <div class="input-file">
    <div class="input-file__image">
      <BasePicture
        :srcset="'https://kinocms-panel.demodev.cc/media/Image/1718210770.084514.png'"
        :src="imgInfo.image.image"
        :lazy="true"
      />
    </div>

    <div class="input-file__close"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { BasePicture } from '@/shared/ui'
const props = defineProps(['imgInfo'])

console.log(props.imgInfo.image)
</script>

<style lang="scss">
@import 'styles';
</style>
