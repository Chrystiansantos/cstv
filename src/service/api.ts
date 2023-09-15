import axios from 'axios'

// Adicionar, o token gerado pela pandascore
const token = ''

export const api = axios.create({
  baseURL: 'https://api.pandascore.co/csgo'
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config;
})