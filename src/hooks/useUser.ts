import { useAppDispatch, useAppSelector } from '@/utils/hook'
import { initUser } from '@/store/modules/userSlice'
import { clearUserToken } from '@/utils/helper'
import { useEffect, useState } from 'react'
import { useLazyGetUserMeLazyQuery } from '@/store/apis/userApi'
import { useNavigate } from 'react-router-dom'
import { PAGE_PATHS } from '@/routes'

type UseUser = {
  isAuthenticated: boolean
  isAuthFailed: boolean
  logout: () => void
}

export const useUser = (): UseUser => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { username, email } = useAppSelector((state) => state.user)
  const [getUser] = useLazyGetUserMeLazyQuery()
  const [isAuthFailed, setIsAuthFailed] = useState(false)

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
      getUser()
        .unwrap()
        .catch(() => {
          setIsAuthFailed(true)
          logout()
        })
    }
  }, [])

  return { isAuthenticated, isAuthFailed, logout }
}
