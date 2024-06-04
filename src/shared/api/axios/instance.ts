import axios, { AxiosInstance } from 'axios'
import { API_URL } from '@/shared/config'

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'Accept-Language': 'en'
  }
})

export default instance
