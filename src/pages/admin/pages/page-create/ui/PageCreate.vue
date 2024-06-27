<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <div class="page-create__contents">
        <div class="page-create__content">
          <BaseInput
            class="page-create__block"
            placeholder="Название страницы"
            label="Название страницы"
            name="namePage"
          />
        </div>
        <div class="page-create__content">
          <p>Дата публикации</p>
          <input type="date" v-model="valueInputDate" @change="handleInputDate" />
        </div>
      </div>

      <BaseTextarea
        class="page-create__block"
        placeholder="Текст"
        label="Описание"
        name="descriptionPage"
      />

      <InputChoiceFile label="Главная картинка" label-text="Добавить главную картинку" />

      <InputChoiceFile label="Галерея картинок" label-text="Добавить картинку в галерею" />

      <BaseInput
        class="movie-create__block"
        placeholder="Ссылка на видео в youtube"
        label="Ссылка на видео"
        name="linkOnVideo"
      />

      <Seo class="page-create__block" />

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
import { usePageCreateForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const valueInputDate = ref('')
const isLoading = ref<boolean>(false)

const form = usePageCreateForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Pages',
    disabled: false,
    href: 'pages'
  },
  {
    title: 'Page create',
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
@import 'page-create';
</style>
