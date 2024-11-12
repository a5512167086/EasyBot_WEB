import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '@/utils/hook'
import { clearUserError } from '@/store/modules/userSlice'

export const useClearError = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearUserError())
  }, [location, dispatch])
}
