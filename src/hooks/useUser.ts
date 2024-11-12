import { useAppDispatch, useAppSelector } from '@/utils/hook'
import { initUser } from '@/store/modules/userSlice'
import { clearUserToken } from '@/utils/helper'
import { useEffect } from 'react'
import { useLazyGetUserMeLazyQuery } from '@/store/apis/userApi'
import { useNavigate } from 'react-router-dom'
import { PAGE_PATHS } from '@/routes'

type UseUser = {
  isAuthenticated: boolean
  logout: () => void
}

export const useUser = (): UseUser => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { username, email } = useAppSelector((state) => state.user)
  const [getUser] = useLazyGetUserMeLazyQuery()

  const token = localStorage.getItem('token') || sessionStorage.getItem('token')
  const isAuthenticated = Boolean(username && email && token)

  const logout = () => {
    if (isAuthenticated) {
      clearUserToken()
      dispatch(initUser())
      navigate(PAGE_PATHS.BASE)
    }
  }

  useEffect(() => {
    if (!isAuthenticated && token) {
      getUser().catch(() => {
        logout()
      })
    }
  }, [])

  return { isAuthenticated, logout }
}
