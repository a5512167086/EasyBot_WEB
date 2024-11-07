import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid2,
  Box,
  Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { StyledSignInPage } from './SignInPage.style'
import { CustomDivider } from '@/components/CustomDivider'
import { OAuth } from '@/components/OAuth'
import { CustomLink } from '@/components/CustomLink'
import { PAGE_PATHS } from '@/routes'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const signInContent = {
  title: 'signPage.signIn',
  or: 'common.or',
  signInButtonText: 'signPage.signIn',
  forgotPassword: 'signPage.forgotPassword',
  notHaveAccount: 'signPage.notHaveAccount',
  email: 'signPage.email',
  password: 'signPage.password',
  rememberMe: 'signPage.rememberMe'
}

export const SignInPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate(PAGE_PATHS.BOT_LIST)
  }

  return (
    <StyledSignInPage maxWidth="xs">
      <Box className="signin__box">
        <Avatar className="signin__avatar">
          <LockOutlinedIcon />
        </Avatar>
        <OAuth />
        <CustomDivider text={t(signInContent.or)} />
        <Typography component="h1" variant="h5">
          {t(signInContent.title)}
        </Typography>
        <Box
          component="form"
          className="signin__formBox"
          onSubmit={(event) => {
            event.preventDefault()
            handleSignIn()
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t(signInContent.email)}
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t(signInContent.password)}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t(signInContent.rememberMe)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="sigin__signinButton"
          >
            {t(signInContent.signInButtonText)}
          </Button>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <CustomLink
                linkText={t(signInContent.forgotPassword)}
                link={PAGE_PATHS.FORGOT_PASSWORD}
                variant="body2"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8 }} className="signin__signupButton">
              <CustomLink
                linkText={t(signInContent.notHaveAccount)}
                link={PAGE_PATHS.SIGN_UP}
                variant="body2"
              />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </StyledSignInPage>
  )
}
