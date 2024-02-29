import axios from 'axios'

// import { auth } from '@/lib/auth'

export const client = axios.create({
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
  },
})

client.interceptors.request.use((config) => {
  // const accessToken = auth.getAccessToken()

  const env = import.meta.env.NODE_ENV || 'development'

  const baseUrls: { [key: string]: string } = {
    development: `/`,
    production: 'https://api.shyftlabs.com/v1',
  }

  // if (accessToken) {
  //   config.headers.set('authorization', `Bearer ${accessToken}`)
  // }

  return {
    ...config,
    baseURL: baseUrls[env],
  }
})
