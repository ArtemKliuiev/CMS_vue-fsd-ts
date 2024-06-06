import { AuthApi } from '@/shared/api/gen'
import { useApi } from '@/shared/api'

export async function checkAdmin() {
  const api = useApi(AuthApi)

  try {
    const myProfile = await api.getMyProfile()

    return myProfile.data.is_superuser
  } catch (info) {
    console.error(info)
  }

  return false
}
