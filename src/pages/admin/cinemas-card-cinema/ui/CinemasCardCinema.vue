<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="Назва кінотеатру"
        label="Назва кінотеатру"
        name="nameCinema"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Опис"
        name="descriptionCinema"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Умова"
        name="conditions"
      />

      <InputChoiceFile label="Логотип" label-text="Додати логотип" />

      <InputChoiceFile label="Фото верхнього банеру" label-text="Додати фото верхнього банеру" />

      <BaseTextarea
        class="movie-create__block card-cinema__textarea"
        placeholder="
        Кінотеатр 'Золотой Дюк'
        Одеса, проспект Академіка Глушко, 11ж
        Бронювання білетів: (048) 746-32-33, (048) 746-32-20
        e-mail: gоldduke@kino.odessa.ua
        "
        label="Адреса"
        name="address"
      />

      <BaseInput
        class="movie-create__block"
        placeholder="Координати для мапи"
        label="Координаты для мапи"
        name="mapCoordinates"
      />

      <InputChoiceFile label="Галерея картинок" label-text="Додати картинку до галереї" />

      <div class="card-cinema__list">
        <h3 class="card-cinema__list-title">Список Залів</h3>

        <BaseTable
          :headers="tableData.headers"
          :rows="tableData.rows"
          :show-delete-icon="tableData.showDeleteIcon"
          @edit-row="handleEditRow"
          @delete-row="handleDeleteRow"
        />
        <router-link to="cinemas-card-hall" class="card-cinema__button">
          <v-btn>Створити зал</v-btn>
        </router-link>
      </div>

      <Seo class="movie-create__block" />

      <div class="movie-create__buttons">
        <v-btn type="submit">Зберегти</v-btn>
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
// import { CinemasApi, useApi } from '@/shared'
import { useCinemasCardCinemaForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

// const api = useApi(CinemasApi)

const isLoading = ref<boolean>(false)

const form = useCinemasCardCinemaForm()
const formValues = computed(() => form.values)

const breadcrumbs = [
  {
    title: 'Кінотеатри',
    disabled: false,
    href: 'cinemas'
  },
  {
    title: 'Картка кінотеатру',
    disabled: true
  }
]

const tableData = {
  headers: [{ name: 'Назва' }, { name: 'Дата створення' }],
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

async function onSubmit() {
  console.log('submit')
  const { valid } = await form.instance.validate()
  console.log(valid)
  if (!valid) return

  isLoading.value = true
}
</script>

<style lang="scss">
@import 'CinemasCardCinema';
</style>
