import { useApi } from '@/shared'
import { AuthApi } from '@/shared'
import { getTokenFromCookies } from '@/shared/data/cookies'

const api = await useApi(AuthApi)

export async function refresh() {
  console.log(getTokenFromCookies('refreshToken'))

  const response = await api.refreshToken({
    tokenRefreshInputSchema: {
      refresh: getTokenFromCookies('refreshToken')
    }
  })

  console.log(response, 'Токен обновлен')
}
