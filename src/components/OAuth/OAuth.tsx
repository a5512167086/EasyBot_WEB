import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { StyledOAuth } from './OAuth.style'
import { useTranslation } from 'react-i18next'

const oauthContent = {
  google: 'signPage.google'
}

export const OAuth = () => {
  const { t } = useTranslation()
  const handleLogin = () => {
    const client_id =
      '48844684655-se9surcs5rvd5ek14o1b39k0lbhvk6on.apps.googleusercontent.com'
    const redirect_uri = `${location.origin}/oauth-callback`
    const scope =
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid' // 要請求的 OAuth 權限
    const response_type = 'code'
    const access_type = 'offline'
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&access_type=${access_type}`

    window.location.href = oauthUrl
  }

  return (
    <StyledOAuth maxWidth="xs">
      <Button
        onClick={handleLogin}
        fullWidth
        variant="contained"
        className="oauth__button"
        startIcon={<GoogleIcon />}
      >
        {t(oauthContent.google)}
      </Button>
    </StyledOAuth>
  )
}
