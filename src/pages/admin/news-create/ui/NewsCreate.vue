<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <div class="news-create__contents">
        <div class="news-create__content">
          <BaseInput
            class="movie-create__block"
            placeholder="Назва новини"
            label="Назва новини"
            name="nameNews"
          />
        </div>
        <div class="news-create__content">
          <p>дата публікації</p>
          <input type="date" v-model="valueInputDate" @change="handleInputDate" />
        </div>
      </div>

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Опис"
        name="descriptionNews"
      />

      <InputChoiceFile
        label="Головна картинка"
        label-text="
          Додати головну картинку
         "
      />

      <InputChoiceFile label="Галерея картинок" label-text="Додати картинку до галереї" />

      <BaseInput
        class="movie-create__block"
        placeholder="Посилання на відео в youtube"
        label="Посилання на відео"
        name="linkOnVideo"
      />

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
import '@mdi/font/css/materialdesignicons.css'
import { useNewsCreateForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const valueInputDate = ref('')
const isLoading = ref<boolean>(false)

const form = useNewsCreateForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Новини',
    disabled: false,
    href: 'news'
  },
  {
    title: 'Створення новини',
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
@import 'NewsCreate';
</style>
