<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <p>Номер зала</p>
      <BaseInput class="movie-create__block" placeholder="8 зал" name="numberHall" />

      <p class="text">Описание зала</p>
      <BaseTextarea class="movie-create__block" placeholder="Текст" name="descriptionCinemaHall" />

      <p class="text">Схема зала</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить схему зала"
      ></v-file-input>

      <p class="text">Верхний баннер</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить верхний баннер"
      ></v-file-input>

      <p class="text">Галерея картинок</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить картинку в галерею"
      ></v-file-input>

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
