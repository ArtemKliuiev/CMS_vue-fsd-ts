<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <div class="news-create__contents">
        <div class="news-create__content">
          <BaseInput
            class="movie-create__block"
            placeholder="Название новости"
            label="Название новости"
            name="nameNews"
          />
        </div>
        <div class="news-create__content">
          <p>Дата публикации</p>
          <input type="date" v-model="valueInputDate" @change="handleInputDate" />
        </div>
      </div>

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Описание"
        name="descriptionNews"
      />

      <InputChoiceFile label="Главная картинка" label-text="Добавить главную картинку" />

      <InputChoiceFile label="Галерея картинок" label-text="Добавить картинку в галерею" />

      <BaseInput
        class="movie-create__block"
        placeholder="Ссылка на видео в youtube"
        label="Ссылка на видео"
        name="linkOnVideo"
      />

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Сохранить</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Seo } from '@/widgets/seo'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { computed, ref } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import { useNewsCreateForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const valueInputDate = ref('')
const isLoading = ref<boolean>(false)

const form = useNewsCreateForm()
const formValues = computed(() => form.values)

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

const handleInputDate = () => {
  console.log(valueInputDate.value)
}

async function onSubmit() {
  console.log('submit')
  const { valid } = await form.instance.validate()
  console.log(valid)
  if (!valid) return

  isLoading.value = true
}
</script>

<style lang="scss">
@import 'styles';
</style>
