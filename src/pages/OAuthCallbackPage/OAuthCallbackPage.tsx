import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomLoader } from '@/components/CustomLoader'
import { useTranslation } from 'react-i18next'
import { PAGE_PATHS } from '@/routes'
import { Button, Paper, Typography } from '@mui/material'
import { StyledOAuthCallbackPage } from './OAuthCallbackPage.style'
import ErrorIcon from '@mui/icons-material/Error'

const oauthCallbackContent = {
  loading: 'common.loading',
  backToLogin: 'signPage.backToLogin',
  failedTitle: 'error.oauth_failed_title',
  failedDescription: 'error.oauth_failed_description'
}

export const OAuthCallbackPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleNavigateToLogin = () => {
    navigate(PAGE_PATHS.SIGN_IN)
  }

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      const error = urlParams.get('error')

      if (error || !code) {
        setError(true)
        setTimeout(() => {
          navigate(PAGE_PATHS.SIGN_IN)
        }, 5000)
        return
      }
    }

    handleOAuthCallback()
  }, [navigate, t])

  return !error ? (
    <CustomLoader size="6rem" text={t(oauthCallbackContent.loading)} />
  ) : (
    <StyledOAuthCallbackPage minWidth="xs" maxWidth="sm">
      <Paper elevation={3} className="oauth__paper">
        <ErrorIcon className="oauth__icon" />
        <Typography variant="h4" component="h1" className="oauth__text">
          {t(oauthCallbackContent.failedTitle)}
        </Typography>
        <Typography variant="body1" align="center" className="oauth__text">
          {t(oauthCallbackContent.failedDescription)}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          className="oauth__button"
          onClick={handleNavigateToLogin}
        >
          {t(oauthCallbackContent.backToLogin)}
        </Button>
      </Paper>
    </StyledOAuthCallbackPage>
  )
}