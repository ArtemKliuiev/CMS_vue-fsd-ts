import { Configuration } from '@/shared/api/gen'
import { API_URL } from '@/shared/config'
import { getTokenFromCookies } from '@/shared/data/cookies'

export const config = () => {
  const token = getTokenFromCookies('accessToken')

  return new Configuration({
    basePath: API_URL,
    accessToken: token
  })
}
