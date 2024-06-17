<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <p>Название фильма</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Название фильма"
      :value="valueInput"
      @update:modelValue="handleModelValue"
    />

    <p class="text">Описание</p>
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />

    <p class="text">Главная картинка</p>
    <v-file-input
      accept="image/png, image/jpeg"
      show-size
      label="Добавить главную картинку"
    ></v-file-input>

    <p class="text">Галерея картинок</p>
    <v-file-input
      accept="image/png, image/jpeg"
      show-size
      label="Добавить картинку в галерею"
    ></v-file-input>

    <p class="text">Ссылка на трейлер</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Ссылка на видео в youtube"
      :value="valueInputYoutube"
      @update:modelValue="handleModelValueYoutube"
    />

    <p class="text">Тип кино</p>
    <v-select multiple label="Тип кино" :items="['3D', '2D', 'IMAX']"></v-select>

    <Seo
      class="movie-create__block"
      :valueTitle="title"
      :valueDescription="description"
      placeholderInput="Title"
      placeholderDescription="Description"
      @update:valueTitle="handleInput"
      @update:valueDescription="handleDescription"
    />

    <div class="movie-create__buttons">
      <v-btn>Сохранить</v-btn>
      <v-btn>Вернуть базовую версию</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'
import '@mdi/font/css/materialdesignicons.css'

const title = ref('')
const description = ref('')
const valueInput = ref('')
const valueTextArea = ref('')
const valueInputYoutube = ref('')

const breadcrumbs = [
  {
    title: 'Movies',
    disabled: false,
    href: 'movies'
  },
  {
    title: 'Movies create',
    disabled: true
  }
]

const handleInput = (value: string) => {
  title.value = value
  console.log(value)
}

const handleDescription = (value: string) => {
  description.value = value
  console.log(value)
}

const handleModelValue = (value: string) => {
  valueInput.value = value
  console.log(value)
}

const handleModelValueText = (value: string) => {
  valueTextArea.value = value
  console.log(value)
}

const handleModelValueYoutube = (value: string) => {
  valueInputYoutube.value = value
  console.log(value)
}
</script>

<style lang="scss">
@import 'styles';
</style>
