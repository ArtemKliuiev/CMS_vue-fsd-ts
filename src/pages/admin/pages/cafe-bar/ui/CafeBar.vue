<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput class="movie-create__block" placeholder="Кафе-Бар" label="Назва" name="name" />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Опис"
        name="description"
      />

      <InputChoiceFile label="Головна картинка" label-text="Додати головну картинку" />

      <InputChoiceFile label="Галерея картинок" label-text="Додати картинку до галереї" />

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Зберегти</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Seo } from '@/widgets/seo'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { computed, ref } from 'vue'
import { usePageAboutCinemaForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const isLoading = ref<boolean>(false)

const form = usePageAboutCinemaForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Сторінки',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Кафе-Бар',
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

<style lang="scss"></style>
