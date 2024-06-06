<template>
  <div class="input-file">
    <v-file-input label="File input" v-model="info" variant="filled"></v-file-input>

    <div class="input-file__inputs">
      <BaseInput placeholder="URL" />

      <BaseInput placeholder="Текст" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'

const info = ref(null)

watch(info, () => {
  console.log(info)
})
</script>

<style lang="scss">
@import 'styles';
</style>
