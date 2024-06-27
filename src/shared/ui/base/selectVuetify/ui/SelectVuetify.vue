<script setup lang="ts">
interface Props {
  label?: string
  labelText?: string
  items?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  labelText: '',
  items: ['']
})
</script>

<template>
  <label>{{ label }}</label>
  <v-select multiple :label="labelText" :items="items"></v-select>
</template>

<style lang="scss" scoped>
@import 'selectVuetify';
</style>
