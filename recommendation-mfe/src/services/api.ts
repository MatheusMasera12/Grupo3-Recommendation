import axios from 'axios'

const TOKEN_KEY = String(import.meta.env['VITE_TOKEN_KEY'] ?? 'auth_token')
const BASE_URL = String(import.meta.env['VITE_API_URL'] ?? 'http://localhost:8090')

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY)
      window.dispatchEvent(new CustomEvent('auth:expired'))
    }
    return Promise.reject(error instanceof Error ? error : new Error(String(error)))
  },
)

export default api
