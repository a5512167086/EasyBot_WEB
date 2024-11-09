import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustomError } from '@/configs/type'

interface UserState {
  username: string
  email: string
  errorCode: string
  errorMessage: string
}

const initialState: UserState = {
  username: '',
  email: '',
  errorCode: '',
  errorMessage: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserError: (state, action: PayloadAction<CustomError>) => {
      state.errorCode = action.payload.error_code
      state.errorMessage = action.payload.error_message
    },
    clearUserError: (state) => {
      state.errorCode = ''
      state.errorMessage = ''
    }
  },
  extraReducers: () => {}
})

export const { setUserError, clearUserError } = userSlice.actions

export default userSlice.reducer
