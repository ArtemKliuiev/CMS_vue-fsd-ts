<template>
  <input
    type="text"
    :placeholder="placeholder"
    :id="id"
    autocomplete="off"
    :value="$props.modelValue"
    @input="changeValue"
  />
</template>

<script setup>
defineProps(['modelValue', 'placeholder', 'id'])
const emit = defineEmits(['update:modelValue', 'changeValue'])

function changeValue(e) {
  emit('update:modelValue', e.target.value)
  emit('changeValue')
}
</script>

<style lang="scss">
@import 'styles';
</style>
