import { defineStore } from 'pinia'

export const piniaStore = defineStore('piniaData', {
  state: () => {
    return {
      data: 'data',
      info: 'info'
    }
  }
})
