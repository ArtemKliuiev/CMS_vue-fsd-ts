import { defineStore } from 'pinia'
import { ref } from 'vue'

export const accessTokenStore = defineStore('api-plugin', () => {
  const accessToken = ref<string>(document.cookie)

  function getToken() {
    return accessToken.value
  }

  function setToken(token: string) {
    accessToken.value = token
    document.cookie = token
  }

  return {
    getToken,
    setToken
  }
})
