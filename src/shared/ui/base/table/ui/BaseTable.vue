<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            <div class="headers">
              <div v-if="header.sortName" class="headers__sort">
                <BaseSvg
                  @click="$emit('sort', { name: header.sortName, type: 'top' })"
                  class="headers__sort-arrow headers__sort-arrow-top"
                  id="arrow"
                />

                <BaseSvg
                  @click="$emit('sort', { name: header.sortName, type: 'bottom' })"
                  class="headers__sort-arrow headers__sort-arrow-bottom"
                  id="arrow"
                />
              </div>

              {{ header.name }}
            </div>
          </th>
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
import { BaseSvg } from '@/shared/ui'

defineProps(['headers', 'rows', 'showDeleteIcon'])
</script>

<style lang="scss">
@import 'styles';
</style>
