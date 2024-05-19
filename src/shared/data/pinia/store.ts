import { defineStore } from 'pinia'

export const piniaData = defineStore('piniaData', {
  state: () => {
    return { data: 'inform' }
  }
})
