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
          <v-icon icon="mdi-pencil" @click="$emit('edit-row', rowIndex)" />
          <v-icon v-if="showDeleteIcon" icon="mdi-delete" @click="$emit('delete-row', rowIndex)" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Table {
  headers: string[]
  rows: Record<string | number | boolean>[]
  showDeleteIcon?: boolean
}

defineProps<Table>()
</script>

<style lang="scss">
@import 'styles';
</style>
