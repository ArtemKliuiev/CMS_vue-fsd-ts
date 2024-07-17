<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="Назва фільму"
        label="Назва фільму"
        name="name"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Опис"
        name="description"
      />

      <InputChoiceFile label="Головна картинка" labelText="Картинка картки" />

      <InputChoiceFile label="Галерея картинок" labelText="Додати картинку до галереї" />

      <BaseInput
        class="movie-create__block"
        placeholder="Посилання на відео в youtube"
        label="Посилання на трейлер"
        name="linkOnVideo"
      />

      <SelectVuetify label="Тип кіно" label-text="Тип кіно" :items="['3D', '2D', 'IMAX']" />

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Зберегти</v-btn>
        <v-btn> Повернути базову версію</v-btn>
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
    title: 'Фільми',
    disabled: false,
    href: 'movies'
  },
  {
    title: 'Редагування фільму',
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
@import 'MovieCreate';
</style>
