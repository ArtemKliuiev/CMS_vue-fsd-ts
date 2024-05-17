<template>
  <textarea>
    :placeholder="placeholder"
    :value="$props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  </textarea>
</template>

<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import "styles";
</style>