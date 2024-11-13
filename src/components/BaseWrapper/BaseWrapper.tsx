import { Alert, Box, Snackbar } from '@mui/material'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StyledBaseWrapper } from './BaseWrapper.style'
import { Outlet, useNavigate } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import { CustomLoader } from '../CustomLoader'
import { useTranslation } from 'react-i18next'
import { useClearError } from '@/hooks/useClearError'
import { PAGE_PATHS } from '@/routes'
import { useUser } from '@/hooks/useUser'

const loaderText = 'common.loading'

export const BaseWrapper = () => {
  useClearError()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { isAuthenticated, isAuthFailed } = useUser()
  const [isAlertOpen, setAlertOpen] = useState(false)

  const handleClose = () => {
    setAlertOpen(false)
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PAGE_PATHS.BOT_LIST)
    } else if (isAuthFailed) {
      setAlertOpen(true)
    }
  }, [isAuthenticated, isAuthFailed])

  return (
    <StyledBaseWrapper>
      <Header />
      <Box className="wrapper__content">
        <Suspense fallback={<CustomLoader size="6rem" text={t(loaderText)} />}>
          <Outlet />
          <Snackbar
            open={isAlertOpen}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="warning">
              {t('error.token_expired')}
            </Alert>
          </Snackbar>
        </Suspense>
      </Box>
      <Footer />
    </StyledBaseWrapper>
  )
}
