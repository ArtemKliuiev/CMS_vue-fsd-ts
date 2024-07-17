<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="+380505555555"
        label="Телефон"
        name="tel"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Сео Текст:"
        name="seoText"
      />

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Зберегти</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'
import { computed, ref } from 'vue'
import { usePageHomeForm } from '@/entities'

const isLoading = ref<boolean>(false)

const form = usePageHomeForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Сторінки',
    disabled: false,
    href: '/admin/pages'
  },
  {
    title: 'Головна сторінка',
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
