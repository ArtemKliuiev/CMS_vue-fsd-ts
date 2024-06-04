import { Configuration, AuthApi } from '../gen'
import { BaseAPI } from '../gen/base'
import { accessTokenStore } from '@/shared/data/pinia/accessTokenStore'
import { API_URL } from '@/shared/config'

import axios from 'axios'

export type ApiConstructor<T> = new (...args: ConstructorParameters<typeof BaseAPI>) => T

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

export async function authFunc(log: string, pass: string) {
  const tokenStore = accessTokenStore()

  const config = new Configuration({
    basePath: API_URL
  })

  const authApi = new AuthApi(config, config.basePath, axiosInstance)

  try {
    const response = await authApi.obtainToken({
      loginSchema: {
        password: pass,
        email: log
      }
    })

    tokenStore.setToken(response.data.access)

    return {
      result: true,
      admin: response.data.admin
    }
  } catch (err) {
    console.error(err)

    return {
      result: false,
      admin: false
    }
  }
}

export function logOut() {
  const tokenStore = accessTokenStore()
  tokenStore.setToken('')
}

export function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  axiosInstance.interceptors.response.use(undefined, (info) => {
    console.error(info)
  })

  const tokenStore = accessTokenStore()

  const config = new Configuration({
    basePath: API_URL,
    accessToken: tokenStore.getToken()
  })

  return new apiConstructor(config, config.basePath, axiosInstance)
}
