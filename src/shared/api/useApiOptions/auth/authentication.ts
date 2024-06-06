import { tokenStore } from '../token'
import { AuthApi } from '@/shared/api/gen'
import { config } from '../config'
import { axiosInstance } from '../axiosInst'

export async function authFunc(log: string, pass: string) {
  const authApi = new AuthApi(config(), config().basePath, axiosInstance)

  try {
    const response = await authApi.obtainToken({
      loginSchema: {
        password: pass,
        email: log
      }
    })

    tokenStore().setToken(response.data.access)

    console.log(response.data)

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
  tokenStore().setToken('')
}
