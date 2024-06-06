import { AuthApi, UserRegisterSchema } from '@/shared/api/gen'
import { useApi } from '@/shared/api'

export async function regisFunc(data: UserRegisterSchema) {
  const api = useApi(AuthApi)

  try {
    const registration = await api.register({
      userRegisterSchema: data
    })

    console.log(registration)
  } catch (err) {
    console.error(err)
  }
}
