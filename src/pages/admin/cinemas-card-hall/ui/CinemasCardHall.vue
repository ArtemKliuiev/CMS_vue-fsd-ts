<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <p>Номер зала</p>
    <BaseInput
      class="movie-create__block"
      :placeholder="'8 зал'"
      :value="valueInput"
      @update:modelValue="handleModelValue"
    />
    <p class="error">{{ errors.numberCardHall }}</p>

    <p class="text">Описание зала</p>
    <BaseTextarea
      class="movie-create__block"
      :placeholder="'Текст'"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />
    <p class="error">{{ errors.cardHallSeoDescription }}</p>

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

    <Seo
      class="movie-create__block"
      :valueTitle="title"
      :valueDescription="description"
      :placeholderInput="'Title'"
      :placeholderDescription="'Description'"
      :errorTitle="errors.cardHallSeoTitle"
      :errorDescription="errors.cardHallSeoDescription"
      @update:valueTitle="handleInput"
      @update:valueDescription="handleDescription"
    />

    <div class="movie-create__buttons">
      <v-btn @click="validateForm">Сохранить</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Seo } from '@/widgets/seo'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { ref } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import { cardHallCinemaSchema } from '@/entities'

const title = ref('')
const description = ref('')
const valueInput = ref('')
const valueTextArea = ref('')

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

const errors = ref({
  numberCardHall: '',
  description: '',
  cardHallSeoTitle: '',
  cardHallSeoDescription: ''
})

const validateForm = async () => {
  errors.value = {
    numberCardHall: '',
    description: '',
    cardHallSeoTitle: '',
    cardHallSeoDescription: ''
  }

  try {
    await cardHallCinemaSchema.validate(
      {
        numberCardHall: valueInput.value,
        description: valueTextArea.value,
        cardHallSeoTitle: title.value,
        cardHallSeoDescription: description.value
      },
      { abortEarly: false }
    )
    errors.value.numberCardHall = ''
    errors.value.description = ''
    errors.value.cardHallSeoTitle = ''
    errors.value.cardHallSeoDescription = ''

    console.log('Форма валидна')
  } catch (error) {
    error.inner.forEach((err) => {
      errors.value[err.path] = err.message
    })
    console.log('Форма не валидна')
  }
}

const handleInput = (value: string) => {
  title.value = value
  console.log(value)
}

const handleDescription = (value: string) => {
  description.value = value
  console.log(value)
}

const handleModelValue = (value: string) => {
  valueInput.value = value
  console.log(value)
}

const handleModelValueText = (value: string) => {
  valueTextArea.value = value
  console.log(value)
}
</script>

<style lang="scss" scoped></style>
