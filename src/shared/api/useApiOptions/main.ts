import { config } from './config'
import { BaseAPI } from '../gen/base'
import { AuthApi } from '@/shared'
import { getTokenFromCookies, setTokenFromCookies } from '@/shared/data/cookies'

import { axiosInstance } from './axiosInst'
import * as console from 'console'

export type ApiConstructor<T> = new (...args: ConstructorParameters<typeof BaseAPI>) => T

export async function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  axiosInstance.interceptors.response.use(undefined, async () => {
    await refresh()
  })

  return new apiConstructor(config(), config().basePath, axiosInstance)
}

//Refresh
export async function refresh(): Promise<boolean> {
  const api = await useApi(AuthApi)

  try {
    const response = await api.refreshToken({
      tokenRefreshInputSchema: {
        refresh: getTokenFromCookies('refreshToken')
      }
    })

    setTokenFromCookies('accessToken', response.data.access, 1)
    console.log(response, 'Токен обновлен')
  } catch (info) {
    return false
  }
  return true
}
