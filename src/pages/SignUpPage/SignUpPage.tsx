import { Avatar, Button, TextField, Box, Typography } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { StyledSignUpPage } from './SignUpPage.style'
import { PAGE_PATHS } from '@/routes'
import { CustomLink } from '@/components/CustomLink'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const signUpContent = {
  title: 'signPage.signUp',
  signUpButtonText: 'signPage.signUp',
  haveAccount: 'signPage.haveAccount',
  fullName: 'signPage.fullName',
  email: 'signPage.email',
  password: 'signPage.password',
  confirmPassword: 'signPage.confirmPassword'
}

export const SignUpPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSignUp = () => {
    navigate(PAGE_PATHS.SIGN_IN)
  }

  return (
    <StyledSignUpPage maxWidth="xs">
      <Box className="signup__box">
        <Avatar className="signup__avatar">
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t(signUpContent.title)}
        </Typography>
        <Box component="form" className="signup__formBox">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label={t(signUpContent.fullName)}
            name="name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t(signUpContent.email)}
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t(signUpContent.password)}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label={t(signUpContent.confirmPassword)}
            type="password"
            id="confirm-password"
          />
          <Button
            fullWidth
            variant="contained"
            className="sigin__signupButton"
            onClick={handleSignUp}
          >
            {t(signUpContent.signUpButtonText)}
          </Button>
          <CustomLink
            linkText={t(signUpContent.haveAccount)}
            link={PAGE_PATHS.SIGN_IN}
            variant="body2"
          />
        </Box>
      </Box>
    </StyledSignUpPage>
  )
}
