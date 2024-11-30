import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/userSlice'
import botReducer from './modules/botSlice'
import { userApi } from './apis/userApi'
import { botApi } from './apis/botApi'

export const store = configureStore({
  reducer: {
    user: userReducer,
    bot: botReducer,
    [userApi.reducerPath]: userApi.reducer,
    [botApi.reducerPath]: botApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(botApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
