<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    <form @submit.prevent="onSubmit">
      <BaseInput
        class="movie-create__block"
        placeholder="Название кинотеатра"
        label="Название кинотеатра"
        name="nameCinema"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Описание"
        name="descriptionCinema"
      />

      <BaseTextarea
        class="movie-create__block"
        placeholder="Текст"
        label="Условия"
        name="conditions"
      />

      <InputChoiceFile label="Логотип" label-text="Добавить логотип" />

      <InputChoiceFile label="Фото верхнего баннера" label-text="Добавить фото верхнего баннера" />

      <BaseTextarea
        class="movie-create__block card-cinema__textarea"
        placeholder="
        Кинотеатр 'Золотой Дюк'
        Одесса, проспект Академика Глушко, 11ж
        Бронирование билетов: (048) 746-32-33, (048) 746-32-20
        e-mail: gоldduke@kino.odessa.ua
        "
        label="Адресс"
        name="address"
      />

      <BaseInput
        class="movie-create__block"
        placeholder="Координаты для карты"
        label="Координаты для карты"
        name="mapCoordinates"
      />

      <InputChoiceFile label="Галерея картинок" label-text="Добавить картинку в галерею" />

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

      <Seo class="movie-create__block" />

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
// import { CinemasApi, useApi } from '@/shared'
import { useCinemasCardCinemaForm } from '@/entities'
import InputChoiceFile from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// const api = useApi(CinemasApi)

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
