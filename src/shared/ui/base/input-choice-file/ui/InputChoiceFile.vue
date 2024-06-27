<script setup lang="ts">
interface Props {
  label?: string
  labelText?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  labelText: ''
})
</script>

<template>
  <label>{{ label }}</label>
  <v-file-input accept="image/png, image/jpeg" show-size :label="labelText"></v-file-input>
</template>

<style scoped lang="scss">
@import 'inputChoiceFile';
</style>
