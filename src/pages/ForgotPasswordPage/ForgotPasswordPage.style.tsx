import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'

export const StyledForgotPasswordPage = styled(Container)(({ theme }) => ({
  '& .forgot__box': {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '& .forgot__avatar': {
    margin: '10px',
    backgroundColor: theme.palette.primary.main
  },
  '& .forgot__description': {
    marginTop: '10px',
    textAlign: 'center'
  },
  '& .forgot__formBox': {
    marginTop: '10px'
  },
  '& .sigin__forgotButton': {
    margin: '20px 0'
  },
  '& .forgot__forgotButton': {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  }
}))
