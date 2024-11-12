import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustomError } from '@/configs/type'
import { userApi } from '../apis/userApi'
import { clearUserToken } from '@/utils/helper'

interface UserState {
  username: string
  email: string
  errorCode: string
  errorMessage: string
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: UserState = {
  username: '',
  email: '',
  errorCode: '',
  errorMessage: '',
  status: 'idle'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserError: (state, action: PayloadAction<CustomError>) => {
      state.errorCode = action.payload.error_code
      state.errorMessage = action.payload.error_message
      state.status = 'failed'
    },
    clearUserError: (state) => {
      state.errorCode = ''
      state.errorMessage = ''
      state.status = 'idle'
    },
    initUser: (state) => {
      state.username = ''
      state.email = ''
      state.errorCode = ''
      state.errorMessage = ''
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getUserMeLazy.matchPending, (state) => {
        state.status = 'loading'
      })
      .addMatcher(
        userApi.endpoints.getUserMeLazy.matchFulfilled,
        (state, action) => {
          state.status = 'succeeded'
          state.username = action.payload.username
          state.email = action.payload.email
        }
      )
      .addMatcher(
        userApi.endpoints.getUserMeLazy.matchRejected,
        (state, action) => {
          clearUserToken()
          state.status = 'failed'
          state.errorCode = action.error.code!
          state.errorMessage = action.error.message!
        }
      )
  }
})

export const { setUserError, clearUserError, initUser } = userSlice.actions

export default userSlice.reducer
