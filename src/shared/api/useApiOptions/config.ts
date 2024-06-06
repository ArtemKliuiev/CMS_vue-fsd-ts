import { Configuration } from '@/shared/api/gen'
import { API_URL } from '@/shared/config'
import { tokenStore } from '@/shared/api/useApiOptions/token'

export const config = () => {
  return new Configuration({
    basePath: API_URL,
    accessToken: tokenStore().getToken()
  })
}
