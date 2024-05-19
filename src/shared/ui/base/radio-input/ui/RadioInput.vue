<template>
  <div>
    <input type="radio" @click="toggleChecked" :checked="isChecked" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);

const toggleChecked = () => {
  isChecked.value = !isChecked.value;
};
</script>

<style lang="scss">
@import "styles";
</style>
