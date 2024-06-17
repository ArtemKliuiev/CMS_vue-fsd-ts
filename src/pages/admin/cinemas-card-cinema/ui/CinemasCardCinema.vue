<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <p>Название кинотеатра</p>
      <BaseInput class="movie-create__block" placeholder="Название кинотеатра" name="nameCinema" />

      <p class="text">Описание</p>
      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        :value="valueTextArea"
        @update:modelValue="handleModelValueText"
      />

      <p class="text">Условия</p>
      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        :value="valueConditionsArea"
        @update:modelValue="handleModelValueConditions"
      />

      <p class="text">Логотип</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить логотип"
      ></v-file-input>

      <p class="text">Фото верхнего баннера</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить фото верхнего баннера"
      ></v-file-input>

      <p class="text">Адресс</p>
      <BaseTextarea
        class="movie-create__block card-cinema__textarea"
        placeholder="
        Кинотеатр 'Золотой Дюк'
        Одесса, проспект Академика Глушко, 11ж
        Бронирование билетов: (048) 746-32-33, (048) 746-32-20
        e-mail: gоldduke@kino.odessa.ua
        "
        :value="valueAddress"
        @update:modelValue="handleModelValueAddress"
      />

      <p class="text">Координаты для карты</p>
      <BaseInput
        class="movie-create__block"
        placeholder="Координаты для карты"
        name="mapCoordinates"
      />

      <p class="text">Галерея картинок</p>
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Добавить картинку в галерею"
      ></v-file-input>

      <div class="card-cinema__list">
        <h3 class="card-cinema__list-title">Список Залов</h3>

        <BaseTable
          :headers="tableData.headers"
          :rows="tableData.rows"
          :show-delete-icon="tableData.showDeleteIcon"
          @edit-row="handleEditRow"
          @delete-row="handleDeleteRow"
        />
        <router-link to="cinemas-card-hall" class="card-cinema__button">
          <v-btn>Создать зал</v-btn>
        </router-link>
      </div>

      <Seo
        class="movie-create__block"
        :valueTitle="title"
        :valueDescription="description"
        placeholderInput="Title"
        placeholderDescription="Description"
        @update:valueTitle="handleInput"
        @update:valueDescription="handleDescription"
      />

      <div class="movie-create__buttons">
        <v-btn type="submit">Сохранить</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'
import '@mdi/font/css/materialdesignicons.css'
import BaseTable from '@/shared/ui/base/table/ui/BaseTable.vue'
import { CinemasApi, useApi } from '@/shared'
import { useCinemasCardCinemaForm } from '@/entities'

const title = ref('')
const description = ref('')
const valueTextArea = ref('')
const valueConditionsArea = ref('')
const valueAddress = ref('')

const api = useApi(CinemasApi)

const isLoading = ref<boolean>(false)

const form = useCinemasCardCinemaForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Cinemas',
    disabled: false,
    href: 'cinemas'
  },
  {
    title: 'Cinema card cinema',
    disabled: true
  }
]

const tableData = {
  headers: ['Название', 'Дата создания'],
  rows: [
    { name: '13 зал', date: '12.06.2020' },
    { name: '15зал', date: '14.06.2020' },
    { name: '17зал', date: '11.06.2020' }
  ],
  showDeleteIcon: true
}

const handleEditRow = (index: number) => {
  console.log('Редактировать строку', index)
}

const handleDeleteRow = (index: number) => {
  console.log('Удалить строку', index)
}

const handleInput = (value: string) => {
  title.value = value
  console.log(value)
}

const handleDescription = (value: string) => {
  description.value = value
  console.log(value)
}

// const handleModelValue = (value: string) => {
//   valueInput.value = value
//   console.log(value)
// }

const handleModelValueText = (value: string) => {
  valueTextArea.value = value
  console.log(value)
}

const handleModelValueAddress = (value: string) => {
  valueAddress.value = value
  console.log(value)
}

// const handleModelValueMap = (value: string) => {
//   valueInputMap.value = value
//   console.log(value)
// }

const handleModelValueConditions = (value: string) => {
  valueConditionsArea.value = value
  console.log(value)
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
@import 'styles';
</style>
