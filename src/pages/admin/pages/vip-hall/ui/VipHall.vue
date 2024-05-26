<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <p>Название</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Vip-зал"
      :value="valueInput"
      @update:modelValue="handleModelValue"
    />

    <p>Описание</p>
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />

    <p>Главная картинка</p>
    <v-file-input accept="image/png, image/jpeg" show-size label="Добавить главную картинку" />

    <p>Галерея картинок</p>
    <v-file-input accept="image/png, image/jpeg" show-size label="Добавить картинку в галерею" />

    <Seo
      class="movie-create__block"
      :valueTitle="title"
      :valueDescription="description"
      :placeholderInput="'Title'"
      :placeholderDescription="'Description'"
      @update:valueTitle="handleInput"
      @update:valueDescription="handleDescription"
    />

    <div class="movie-create__buttons">
      <v-btn>Сохранить</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Seo } from '@/widgets/seo'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const valueInput = ref('')
const valueTextArea = ref('')

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

const breadcrumbs = [
  {
    title: 'Pages',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Vip-hall',
    disabled: true
  }
]
</script>

<style lang="scss"></style>
