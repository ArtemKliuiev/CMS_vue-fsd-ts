import { AuthApi } from '@/shared/api/gen'
import { useApi } from '@/shared/api'

export async function checkAdmin() {
  // const api = await useApi(AuthApi)
  //
  // // console.log(api)
  //
  // // try {
  // //   const myProfile = await api.getMyProfile()
  // //
  // //   return myProfile.data.is_superuser
  // // } catch (info) {
  // //   console.error(info)
  // //   return false
  // // }
  return true
}
