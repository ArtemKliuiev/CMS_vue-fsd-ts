import { config } from './config'
import { BaseAPI } from '../gen/base'

import { axiosInstance } from './axiosInst'

export type ApiConstructor<T> = new (...args: ConstructorParameters<typeof BaseAPI>) => T

export function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  axiosInstance.interceptors.response.use(undefined, (info) => {
    console.error(info)
  })

  return new apiConstructor(config(), config().basePath, axiosInstance)
}
