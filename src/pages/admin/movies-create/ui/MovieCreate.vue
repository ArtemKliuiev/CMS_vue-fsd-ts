<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

    Название фильма
    <BaseInput
        class="movie-create__block"
        :placeholder="'Название фильма'"
        :value="valueInput"
        @update:modelValue="handleModelValue"
    />

    Описание
    <BaseTextarea
        class="movie-create__block"
        :placeholder="'Текст'"
        :value="valueTextArea"
        @update:modelValue="handleModelValueText"
    />

    Ссылка на трейлер
    <BaseInput
        class="movie-create__block"
        :placeholder="'Ссылка на видео в youtube'"
        :value="valueInputYoutube"
        @update:modelValue="handleModelValueYoutube"
    />

    <Seo
        class="movie-create__block"
        :valueTitle="title"
        :valueDescription="description"
        :placeholderInput="'Title'"
        :placeholderDescription="'Description'"
        @update:valueTitle="handleInput"
        @update:valueDescription="handleDescription"
    />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import BaseInput from "@/shared/ui/base/input/ui/BaseInput.vue";
import BaseTextarea from "@/shared/ui/base/text-area/ui/BaseTextarea.vue";
import {Seo} from "@/widgets/seo";

const title = ref('');
const description = ref('');
const valueInput = ref('');
const valueTextArea = ref('');
const valueInputYoutube = ref('');

const breadcrumbs = [
  {
    title: 'Movies',
    disabled: false,
    href: 'movies',
  },
  {
    title: 'Movies create',
    disabled: true,
  },

]

const handleInput = (value: string) => {
  title.value = value;
  console.log(value)
};

const handleDescription = (value: string) => {
  description.value = value;
  console.log(value)
}

const handleModelValue = (value: string) => {
  valueInput.value = value;
  console.log(value)
}

const handleModelValueText = (value: string) => {
  valueTextArea.value = value;
  console.log(value)
}

const handleModelValueYoutube = (value: string) => {
  valueInputYoutube.value = value;
  console.log(value)
}
</script>

<style lang="scss">
@import "styles";
</style>