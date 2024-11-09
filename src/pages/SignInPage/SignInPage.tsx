import { useState } from 'react'
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
import { useTranslation } from 'react-i18next'
import { useLoginUserMutation } from '@/store/apis/userApi'
import { useAppDispatch } from '@/utils/hook'
import { setUserError } from '@/store/modules/userSlice'

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
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [loginUser] = useLoginUserMutation()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (emailError && validateEmail(newEmail)) {
      setEmailError('')
    }
  }

  const handleSignIn = async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email format')
      return
    }
    setEmailError('')

    await loginUser({ email, password })
      .unwrap()
      .then((payload) => {
        if (remember) {
          localStorage.setItem('token', payload.token)
        } else {
          sessionStorage.setItem('token', payload.token)
        }
      })
      .catch((error) => {
        dispatch(setUserError(error.data))
      })
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
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                color="primary"
              />
            }
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
