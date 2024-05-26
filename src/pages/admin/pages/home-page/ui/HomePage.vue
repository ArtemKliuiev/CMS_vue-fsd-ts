<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    Телефон
    <BaseInput
      class="movie-create__block"
      placeholder="+380505555555"
      :value="valueInput"
      @update:modelValue="handleModelValue"
      type="number"
    />

    Seo Текст:
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />

    <Seo
      class="movie-create__block"
      :valueTitle="title"
      :valueDescription="description"
      placeholderInput="Title"
      placeholderDescription="Description"
      @update:valueTitle="handleInput"
      @update:valueDescription="handleDescription"
    />
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { ref } from 'vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'

const valueInput = ref('')
const valueTextArea = ref('')
const title = ref('')
const description = ref('')

const breadcrumbs = [
  {
    title: 'Pages',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Home page',
    disabled: true
  }
]

const handleModelValue = (value: string) => {
  valueInput.value = value
  console.log(value)
}

const handleModelValueText = (value: string) => {
  valueTextArea.value = value
  console.log(value)
}

const handleInput = (value: string) => {
  title.value = value
  console.log(value)
}

const handleDescription = (value: string) => {
  description.value = value
  console.log(value)
}
</script>

<style lang="scss">
@import 'styles';
</style>
