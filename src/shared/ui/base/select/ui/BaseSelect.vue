<template>
  <select v-model="model" @change="selectOption">
    <option v-for="(item, index) in options" :value="item" :key="index">{{ item }}</option>
  </select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps(['options', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
const model = ref<string>('')

watch(props, () => {
  model.value = props.modelValue
})

function selectOption(e: Event) {
  const target = e.target as HTMLSelectElement

  console.log(target.value)
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
