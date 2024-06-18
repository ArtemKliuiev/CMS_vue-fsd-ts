<template>
  <div class="language-selection">
    <span>Мова</span>

    <select @change="select">
      <option value="uk">Українська</option>
      <option value="ru">Російська</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])

function select(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('change', target.value)
}
</script>

<style lang="scss" scoped>
@import 'LanguageSelection';
</style>
