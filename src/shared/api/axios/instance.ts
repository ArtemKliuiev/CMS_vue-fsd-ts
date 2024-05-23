import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://kinocms-panel.demodev.cc',
  withCredentials: true,
  headers: {
    accept: 'application/json'
  }
})

export default instance
