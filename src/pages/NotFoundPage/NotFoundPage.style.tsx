import { Box, styled } from '@mui/material'

export const StyledNotFoundPage = styled(Box)(() => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  '& .notfound__errorImg': {
    maxWidth: '300px',
    margin: '20px 0'
  },
  '& .notfound__title': {
    margin: '10px 0 ',
    fontSize: '2.25rem',
    fontWeight: 'bold'
  }
}))
