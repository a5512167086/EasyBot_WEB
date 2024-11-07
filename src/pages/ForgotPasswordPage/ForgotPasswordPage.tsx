import { Avatar, Button, TextField, Box, Typography } from '@mui/material'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { StyledForgotPasswordPage } from './ForgotPasswordPage.style'
import { useTranslation } from 'react-i18next'

const forgotPasswordContent = {
  title: 'signPage.forgotPassword',
  description: 'signPage.forgotPasswordHint',
  email: 'signPage.email',
  buttonText: 'signPage.sendPasswordResetEmail'
}

export const ForgotPasswordPage = () => {
  const { t } = useTranslation()
  return (
    <StyledForgotPasswordPage maxWidth="xs">
      <Box className="forgot__box">
        <Avatar className="forgot__avatar">
          <HelpCenterIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t(forgotPasswordContent.title)}
        </Typography>
        <Typography className="forgot__description">
          {t(forgotPasswordContent.description)}
        </Typography>
        <Box component="form" className="forgot__formBox">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t(forgotPasswordContent.email)}
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="sigin__forgotButton"
          >
            {t(forgotPasswordContent.buttonText)}
          </Button>
        </Box>
      </Box>
    </StyledForgotPasswordPage>
  )
}
