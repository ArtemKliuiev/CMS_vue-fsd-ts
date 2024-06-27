<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput class="movie-create__block" placeholder="Реклама" label="Название" name="name" />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Описание"
        name="description"
      />

      <InputChoiceFile label="Главная картинка" label-text="Добавить главную картинку" />

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
import { computed, ref } from 'vue'
import { usePageAdvertisingForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

const isLoading = ref<boolean>(false)

const form = usePageAdvertisingForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Pages',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Advertising',
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
