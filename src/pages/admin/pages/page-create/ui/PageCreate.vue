<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <div class="page-create__contents">
        <div class="page-create__content">
          <p>Название страницы</p>
          <BaseInput class="page-create__block" placeholder="Название страницы" name="namePage" />
        </div>
        <div class="page-create__content">
          <p>Дата публикации</p>
          <input type="date" v-model="valueInputDate" @change="handleInputDate" />
        </div>
      </div>

      <p class="text">Описание</p>
      <BaseTextarea class="page-create__block" placeholder="Текст" name="descriptionPage" />

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

      <p class="text">Ссылка на видео</p>
      <BaseInput
        class="movie-create__block"
        placeholder="Ссылка на видео в youtube"
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
