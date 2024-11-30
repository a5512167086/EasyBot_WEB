import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type BotsResponse = {
  class_id: number
  object_id: number
  bot_name: string
  channel_id: string
  owner_id: string
}

export const botApi = createApi({
  reducerPath: 'botApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BOT_BACKEND_URL,
    prepareHeaders: (headers) => {
      if (!headers.has('Authorization')) {
        const token =
          localStorage.getItem('token') || sessionStorage.getItem('token')
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getBots: builder.query<BotsResponse[], void>({
      query: () => ({
        url: 'bots',
        method: 'GET'
      })
    })
  })
})

export const { useGetBotsQuery } = botApi
