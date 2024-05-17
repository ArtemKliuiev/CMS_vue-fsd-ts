<template>
  <div class="table-container">
    <table>
      <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(item, columnIndex) in row" :key="columnIndex">{{ item }}</td>
        <v-icon icon="fas fa-pen" @click="editRow(rowIndex)"/>
        <v-icon icon="fas fa-trash" @click="deleteRow(rowIndex)"/>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})

interface Table {
  headers: string[];
  rows: Record<string>[];
}

defineProps<Table>();

const editRow = (index: number) => {
  console.log('Редактировать строку', index);
};

const deleteRow = (index: number) => {
  console.log('Удалить строку', index);
};

</script>

<style lang="scss" scoped>
@import "styles";
</style>