<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <p>Название кинотеатра</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Название кинотеатра"
      :value="valueInput"
      @update:modelValue="handleModelValue"
    />

    <p>Описание</p>
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueTextArea"
      @update:modelValue="handleModelValueText"
    />

    <p>Условия</p>
    <BaseTextarea
      class="movie-create__block"
      placeholder="Текст"
      :value="valueConditionsArea"
      @update:modelValue="handleModelValueConditions"
    />

    <p>Логотип</p>
    <v-file-input accept="image/png, image/jpeg" show-size label="Добавить логотип"></v-file-input>

    <p>Фото верхнего баннера</p>
    <v-file-input
      accept="image/png, image/jpeg"
      show-size
      label="Добавить фото верхнего баннера"
    ></v-file-input>

    <p>Адресс</p>
    <BaseTextarea
      class="movie-create__block card-cinema__textarea"
      placeholder="
        Кинотеатр 'Золотой Дюк'
        Одесса, проспект Академика Глушко, 11ж
        Бронирование билетов: (048) 746-32-33, (048) 746-32-20
        e-mail: gоldduke@kino.odessa.ua
        "
      :value="valueConditionsArea"
      @update:modelValue="handleModelValueConditions"
    />

    <p>Координаты для карты</p>
    <BaseInput
      class="movie-create__block"
      placeholder="Координаты для карты"
      :value="valueInputMap"
      @update:modelValue="handleModelValueMap"
    />

    <p>Галерея картинок</p>
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
      <v-btn>Сохранить</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { Seo } from '@/widgets/seo'
import '@mdi/font/css/materialdesignicons.css'
import BaseTable from '@/shared/ui/base/table/ui/BaseTable.vue'

const title = ref('')
const description = ref('')
const valueInput = ref('')
const valueTextArea = ref('')
const valueConditionsArea = ref('')
const valueInputMap = ref('')

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
  headers: [{ name: 'Название' }, { name: 'Дата создания' }],
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

const handleModelValue = (value: string) => {
  valueInput.value = value
  console.log(value)
}

const handleModelValueText = (value: string) => {
  valueTextArea.value = value
  console.log(value)
}

const handleModelValueMap = (value: string) => {
  valueInputMap.value = value
  console.log(value)
}

const handleModelValueConditions = (value: string) => {
  valueConditionsArea.value = value
  console.log(value)
}
</script>

<style lang="scss">
@import 'styles';
</style>
