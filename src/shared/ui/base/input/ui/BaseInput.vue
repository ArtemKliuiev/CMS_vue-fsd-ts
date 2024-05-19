<template>
  <input
    type="text"
    :placeholder="placeholder"
    autocomplete="off"
    :value="$props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
@import "styles";
</style>
