import { defineStore } from 'pinia'
import type { ApiOptions } from '@/shared/api/base'
import { ref } from 'vue'

export type ApiOptionGetter = () => ApiOptions

export const usePluginOptionsStorage = defineStore('plugin-options', () => {
  const getApiOptions = ref<ApiOptionGetter | null>(null)

  function setApiOptionsGetter(getter: ApiOptionGetter) {
    getApiOptions.value = getter
  }

  return {
    getApiOptions,
    setApiOptionsGetter
  }
})
