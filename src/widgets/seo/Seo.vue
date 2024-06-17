<template>
  <div class="seo">
    <h2>Seo</h2>
    <div class="seo__title">
      Title:
      <BaseInput
        :value="valueTitle"
        :placeholder="placeholderInput"
        @input="$emit('update:valueTitle', $event.target.value)"
      />
    </div>
    <div class="seo__image">
      Image:
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Загрузить картинку в seo"
      ></v-file-input>
    </div>
    <div class="seo__description">
      Description:
      <BaseTextarea
        :value="valueDescription"
        :placeholder="placeholderDescription"
        @input="$emit('update:valueDescription', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'

defineProps({
  valueTitle: String,
  placeholderInput: String,
  valueDescription: String,
  placeholderDescription: String,
  SeoTitleName: String
})
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
