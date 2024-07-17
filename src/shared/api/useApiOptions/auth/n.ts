import { BaseAPI } from '@/shared/api/gen/base'
import { config } from '@/shared/api/useApiOptions/config'
import { axiosInstance } from '@/shared/api/useApiOptions/axiosInst'
import type { ApiConstructor } from '@/shared'

export async function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  // axiosInstance.interceptors.response.use(undefined, async () => {
  //   await refresh()
  // })
  // await refresh()

  return new apiConstructor(config(), config().basePath, axiosInstance)
}
