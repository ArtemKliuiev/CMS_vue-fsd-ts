<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="8 зал"
        label="Номер зала"
        name="numberHall"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Описание зала"
        name="descriptionCinemaHall"
      />

      <InputChoiceFile label="Схема зала" label-text="Добавить схему зала" />

      <InputChoiceFile label="Верхний баннер" label-text="Добавить верхний баннер" />

      <InputChoiceFile label="Галерея картинок" label-text="Добавить картинку в галерею" />

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
import '@mdi/font/css/materialdesignicons.css'
import { computed, ref } from 'vue'
import { useCinemasCardCinemaHallForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const isLoading = ref<boolean>(false)

const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Cinemas',
    disabled: false,
    href: 'cinemas'
  },
  {
    title: 'Cinema card cinema',
    disabled: false,
    href: 'cinemas-card-cinema'
  },
  {
    title: 'Cinema card hall',
    disabled: true
  }
]

const form = useCinemasCardCinemaHallForm()

async function onSubmit() {
  console.log('submit')
  const { valid } = await form.instance.validate()
  console.log(valid)
  if (!valid) return

  isLoading.value = true
}
</script>

<style lang="scss" scoped></style>
