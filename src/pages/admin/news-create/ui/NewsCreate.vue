<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <div class="news-create__contents">
      <div class="news-create__content">
        <p>Название новости</p>
        <BaseInput
          class="movie-create__block"
          placeholder="Название новости"
          :value="valueInput"
          @update:modelValue="handleModelValue"
        />
      </div>
      <div class="news-create__content">
        <p>Дата публикации</p>
        <input type="date" v-model="valueInputDate" @change="handleInputDate" />
      </div>
    </div>

    <p>Описание</p>
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />

    <p>Главная картинка</p>
    <v-file-input
      accept="image/png, image/jpeg"
      show-size
      label="Добавить главную картинку"
    ></v-file-input>

    <p>Галерея картинок</p>
    <v-file-input
      accept="image/png, image/jpeg"
      show-size
      label="Добавить картинку в галерею"
    ></v-file-input>

    <p>Ссылка на видео</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Ссылка на видео в youtube"
      :value="valueInputYoutube"
      @update:modelValue="handleModelValueYoutube"
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
import '@mdi/font/css/materialdesignicons.css'

const title = ref('')
const description = ref('')
const valueInput = ref('')
const valueTextArea = ref('')
const valueInputYoutube = ref('')
const valueInputDate = ref('')

const breadcrumbs = [
  {
    title: 'News',
    disabled: false,
    href: 'news'
  },
  {
    title: 'News create',
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

const handleInputDate = () => {
  console.log(valueInputDate.value)
}
</script>

<style lang="scss">
@import 'styles';
</style>
