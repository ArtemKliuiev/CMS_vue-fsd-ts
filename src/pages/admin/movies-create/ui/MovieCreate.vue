<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="Название фильма"
        label="Название фильма"
        name="name"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Описание"
        name="description"
      />

      <InputChoiceFile label="Главная картинка" labelText="Картинка карточки" />

      <InputChoiceFile label="Галерея картинок" labelText="Добавить картинку в галерею" />

      <BaseInput
        class="movie-create__block"
        placeholder="Ссылка на видео в youtube"
        label="Ссылка на трейлер"
        name="linkOnVideo"
      />

      <SelectVuetify label="Тип кино" label-text="Тип кино" :items="['3D', '2D', 'IMAX']" />

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Сохранить</v-btn>
        <v-btn>Вернуть базовую версию</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'
import '@mdi/font/css/materialdesignicons.css'
import { computed, ref } from 'vue'
import { usePageMoviesCreateForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'
import { SelectVuetify } from '@/shared'

const isLoading = ref<boolean>(false)

const form = usePageMoviesCreateForm()
const formValues = computed(() => form.values)

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
